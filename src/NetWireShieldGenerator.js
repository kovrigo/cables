import * as THREE from "three";
import { EquiCirclePackings } from "./EquiCirclePackings";
import { ShapeGenerator } from "./ShapeGenerator";
import { SceneUtils } from 'three/examples/jsm/utils/SceneUtils';

class NetWireShieldGenerator {

  constructor(radius, wireRadius, wiresCountPerRibbon, width, material) {
    this.radius = radius;
    this.wireRadius = wireRadius;
    this.wiresCountPerRibbon = wiresCountPerRibbon;
    this.width = width;
    this.material = material;
    this.shapeGenerator = new ShapeGenerator;
    this.totalRadius = this.radius + this.wireRadius * 2;
  }

  generateRibbonWireSpline(startAngle, counterCockwise, wireIndexInRibbon) {

    var len = 2 * Math.PI * (this.radius + this.wireRadius);
    var ribbonWidth = this.wiresCountPerRibbon * this.wireRadius * 2;
    var ribbonSpacer = ribbonWidth / 3;
    var ribbonWidthWithSpacer = ribbonWidth + ribbonSpacer;
    var ribbonsCount = Math.floor(len / ribbonWidthWithSpacer);
    var ribbonAdaptiveSpacer = (len - ribbonWidthWithSpacer * ribbonsCount) / (ribbonsCount - 1);
    var singleWireAngleOffset  = ribbonWidth / len * 2 * Math.PI / this.wiresCountPerRibbon;


    var anglePerSingleWidth = THREE.Math.degToRad(20);
    var bumpMultiplier = 1.1;
    var bumped = false;

    // Кол-во витков на единицу длины кабеля
    var turnsCount = anglePerSingleWidth / 2 * Math.PI;
    // Длина спирали для единичной длины кабеля
    var spiralLength = 2 * Math.PI * (this.radius + this.wireRadius) * turnsCount;
    // Соотношение между длиной спирали и длиной кабеля
    var spiralLengthMultiplier = 1 / spiralLength;
    // Ширина ленты с учетом искажений при обмотке вокруг кабеля ???
    var adaptiveRibbonLength = (ribbonWidthWithSpacer + ribbonAdaptiveSpacer) * this.wiresCountPerRibbon * spiralLengthMultiplier;
    // Необходимый шаг длины кабеля, за который спираль проходит одну ширину ленты
    var adaptiveStepWidth = adaptiveRibbonLength / spiralLengthMultiplier;
    // Шаг длины кабеля, за который спираль проходит одну ширину провода в ленте
    var adaptiveWireStepLenght = adaptiveStepWidth / this.wiresCountPerRibbon;
    // Длина спирали за один шаг длины кабеля, за который спираль проходит одну ширину провода в ленте
    var spiralLengthPerStep = spiralLength * adaptiveWireStepLenght;    
    // Необходимый угол поворота за шаг длины кабеля
    var adaptiveAnglePerWidth = anglePerSingleWidth * adaptiveWireStepLenght;
    // Кол-во витков за один шаг длины кабеля
    var turnsCountPerWidth = adaptiveWireStepLenght / this.width * turnsCount;

console.log(spiralLength, adaptiveStepWidth, adaptiveRibbonLength);

    var wirePoints = [];
    var angle = startAngle;
    var wireCenterVector = new THREE.Vector2(0, this.radius + this.wireRadius);
    var rotationDirection = counterCockwise ? 1 : -1;
    wireCenterVector = wireCenterVector.rotateAround(new THREE.Vector2(0, 0), angle);

    var currentSpiralLength = 0;
    var bump = false;
    var wireBumpedCenterVector = null;
    for (var i = 0; i <= this.width; i += adaptiveWireStepLenght) {
      var wireBumpedCenterVector = wireCenterVector.clone();

      var j = Math.floor(currentSpiralLength / adaptiveRibbonLength);
      if (j % 2 == 0) {
        bump = !bump;
      }
      //console.log(currentSpiralLength, adaptiveRibbonLength, j);

      if (counterCockwise) {
        if (bump) {
          wireBumpedCenterVector = wireBumpedCenterVector.multiplyScalar(bumpMultiplier);
        }
      } else {
        if (!bump) {
          wireBumpedCenterVector = wireBumpedCenterVector.multiplyScalar(bumpMultiplier);
        }      
      }
      wirePoints.push(new THREE.Vector3(i, wireBumpedCenterVector.x, wireBumpedCenterVector.y));
      wireCenterVector = wireCenterVector.rotateAround(new THREE.Vector2(0, 0), rotationDirection * adaptiveAnglePerWidth );

      currentSpiralLength += spiralLengthPerStep;
    }
    var wireSpline = new THREE.CatmullRomCurve3(wirePoints);
    return wireSpline;
  }

  generateRibbonMesh(startAngle, singleWireAngleOffset, counterCockwise) {
    var circleShape = this.shapeGenerator.circle(this.wireRadius);
    var group = new THREE.Group();
    var angle = startAngle;
    for (var i = 0; i < this.wiresCountPerRibbon; i++) {
      var wireSpline = this.generateRibbonWireSpline(angle, counterCockwise, i);
      var extrudeSettings = {
        steps: 200,
        bevelEnabled: false,
        extrudePath: wireSpline
      };
      var geometry = new THREE.ExtrudeGeometry(circleShape, extrudeSettings);
      var mesh = new THREE.Mesh(geometry, this.material);
      group.add(mesh);
      angle += singleWireAngleOffset;
    }
    return group;
  }

  generate() {
    var len = 2 * Math.PI * (this.radius + this.wireRadius);
    var ribbonWidth = this.wiresCountPerRibbon * this.wireRadius * 2;
    var ribbonSpacer = ribbonWidth / 3;
    var ribbonWidthWithSpacer = ribbonWidth + ribbonSpacer;
    var ribbonsCount = Math.floor(len / ribbonWidthWithSpacer);
    var ribbonAdaptiveSpacer = (len - ribbonWidthWithSpacer * ribbonsCount) / (ribbonsCount - 1);
    var singleWireAngleOffset  = ribbonWidth / len * 2 * Math.PI / this.wiresCountPerRibbon;

    var group = new THREE.Group();
    var offset = 0;
    for (var i = 0; i < ribbonsCount; i++) {
      var startAngle = 2 * Math.PI / len * offset;
      var mesh1 = this.generateRibbonMesh(startAngle, singleWireAngleOffset, true);
      var mesh2 = this.generateRibbonMesh(startAngle, singleWireAngleOffset, false);
      group.add(mesh1);
      group.add(mesh2);
      offset += ribbonWidthWithSpacer + ribbonAdaptiveSpacer;
    }
    return group;
  }

}

export { NetWireShieldGenerator };