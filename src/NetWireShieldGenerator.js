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

  generateRibbonWireSpline(startAngle, counterCockwise, wireIndexInRibbon, ribbonIndex) {
    var len = 2 * Math.PI * (this.radius + this.wireRadius);
    var ribbonWidth = this.wiresCountPerRibbon * this.wireRadius * 2;
    var ribbonSpacer = ribbonWidth / 3;
    var ribbonWidthWithSpacer = ribbonWidth + ribbonSpacer;
    var ribbonsCount = Math.floor(len / ribbonWidthWithSpacer);
    var ribbonAdaptiveSpacer = (len - ribbonWidthWithSpacer * ribbonsCount) / (ribbonsCount - 1);
    var singleWireAngleOffset  = ribbonWidth / len * 2 * Math.PI / this.wiresCountPerRibbon;


    // Угол поворота спирали за единицу длины кабеля
    var a1 = THREE.Math.degToRad(7);
    // Кол-во витков спирали за единицу длины кабеля
    var n = this.width * a1 / Math.PI;
    // Радиус спирали
    var R = this.radius + this.wireRadius;
    // Длина окружности кабеля
    var y = 2 * Math.PI * R;
    // Длина кабеля
    var x = this.width;

    // Развернуть боковую поверхность цилиндра в плоскость размером x на y
    // и вычислить угол fi между лентами, идущими по и против часовой стрелки
    var fi = Math.atan(y * n / (2 * x));
    var lambda = Math.PI / 2 - fi;

    // Размеры ленты при закручивании в спираль
    // Ширина ленты (основание равнобедренного треугольника)
    var b = this.wireRadius * 2 * this.wiresCountPerRibbon;
    // Сторона равнобедренного треугольника
    var a = b / (2 * Math.cos(lambda));
    var c = b * Math.sin(lambda) / (2 * Math.cos(lambda));

    // Размеры провода при закручивании в спираль
    // Ширина провода в ленте (основание равноберенного треугольника)
    var bw = this.wireRadius * 2;
    // Высота из вершины к основанию
    var cw = bw * Math.sin(lambda) / (2 * Math.cos(lambda));
    // Сторона равнобедренного треугольника
    var aw = cw / Math.sin(lambda);
    var anglePerCw = cw * a1;

    // Размеры пустых мест между лентами при закручивани в спираль
    // Ширина пустого места (основание равноберенного треугольника)
    var bs = ribbonAdaptiveSpacer + ribbonSpacer;
    // Высота из вершины к основанию
    var cs = bs * Math.sin(lambda) / (2 * Math.cos(lambda));
    // Сторона равнобедренного треугольника
    var as = cs / Math.sin(lambda);

    var wirePoints = [];
    var wireCenterVector = new THREE.Vector2(0, this.radius + this.wireRadius);
    var rotationDirection = counterCockwise ? 1 : -1;
    wireCenterVector = wireCenterVector.rotateAround(new THREE.Vector2(0, 0), startAngle);

    // Начальная точка для спремления провода
    if (counterCockwise) {
      var startVN = wireCenterVector.clone().normalize().multiplyScalar(this.wireRadius);
      var startV = wireCenterVector.clone().add(startVN);
      var startP = new THREE.Vector3(0, startV.x, startV.y);
    } else {
      var startV = wireCenterVector.clone();
      var startP = new THREE.Vector3(0, startV.x, startV.y);
    }

    var currentLen = ((wireIndexInRibbon + 1) / this.wiresCountPerRibbon) * a;
    currentLen += (ribbonIndex % 2) * (a + as);

    // Смещение лент относительно друг друга
    if (!counterCockwise) {
      currentLen = ((this.wiresCountPerRibbon - wireIndexInRibbon + 1) / this.wiresCountPerRibbon) * a;
      if (ribbonIndex % 2 == 0) {
        currentLen += (ribbonIndex % 2) * (a + as) - (a + as);  
      } else {
        currentLen += (ribbonIndex % 2) * (a + as) + (a + as); 
      }
    }

    var bumpMultiplier = 1.05;
    var oldK = null;
    var firstBump = true;

    for (var i = 0; i <= this.width + (c + cs) * 2; i += cw) {
      var j = Math.floor(currentLen / (a + as) / 2);
      var k = j % 2;
      // Точка изгиба ленты
      if (k != oldK) {
        if (!firstBump) {
        var dx = cs / 2;
        var da = a1 * dx * rotationDirection;
        var v, vn, p1, p2, p3;
        // Лента поднимается вверх
        if (k == 0) {
          // Точка в начале подъема
          v = wireCenterVector.clone();
          v = v.rotateAround(new THREE.Vector2(0, 0), -da);
          p1 = new THREE.Vector3(i - dx, v.x, v.y);
          // Точка в середине
          vn = wireCenterVector.clone().normalize().multiplyScalar(this.wireRadius / 2);
          v = wireCenterVector.clone().add(vn);
          p2 = new THREE.Vector3(i, v.x, v.y);
          // Точка в конце подъема
          vn = wireCenterVector.clone().normalize().multiplyScalar(this.wireRadius);
          v = wireCenterVector.clone().add(vn);
          v = v.rotateAround(new THREE.Vector2(0, 0), da);
          p3 = new THREE.Vector3(i + dx, v.x, v.y);
        } else {
          // Лента опускается вниз
          // Точка в начале спуса
          vn = wireCenterVector.clone().normalize().multiplyScalar(this.wireRadius);
          v = wireCenterVector.clone().add(vn);
          v = v.rotateAround(new THREE.Vector2(0, 0), -da);
          p1 = new THREE.Vector3(i - dx, v.x, v.y);          
          // Точка в середине
          vn = wireCenterVector.clone().normalize().multiplyScalar(this.wireRadius / 2);
          v = wireCenterVector.clone().add(vn);
          p2 = new THREE.Vector3(i, v.x, v.y);
          // Точка в конце спуска
          v = wireCenterVector.clone();
          v = v.rotateAround(new THREE.Vector2(0, 0), da);
          p3 = new THREE.Vector3(i + dx, v.x, v.y);          
        }
        // Добавить точки в кривую
        wirePoints.push(p1);  
        wirePoints.push(p2);
        wirePoints.push(p3);   
        } else {
          firstBump = false;
        }
        oldK = k;
      }
      currentLen += aw;
      wireCenterVector = wireCenterVector.rotateAround(new THREE.Vector2(0, 0), rotationDirection * anglePerCw );
    }

    wirePoints.unshift(startP);

    var wireSpline = new THREE.CatmullRomCurve3(wirePoints);
    return wireSpline;
  }

  generateRibbonMesh(startAngle, singleWireAngleOffset, counterCockwise, ribbonIndex) {
    var circleShape = this.shapeGenerator.circle(this.wireRadius);
    var group = new THREE.Group();
    var angle = startAngle;
    for (var i = 0; i < this.wiresCountPerRibbon; i++) {
      var wireSpline = this.generateRibbonWireSpline(angle, counterCockwise, i, ribbonIndex);
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
      var mesh1 = this.generateRibbonMesh(startAngle, singleWireAngleOffset, true, i);
      var mesh2 = this.generateRibbonMesh(startAngle, singleWireAngleOffset, false, i);
      group.add(mesh1);
      group.add(mesh2);
      offset += ribbonWidthWithSpacer + ribbonAdaptiveSpacer;
    }
    return group;
  }

}

export { NetWireShieldGenerator };