import * as THREE from "three";
import { EquiCirclePackings } from "./EquiCirclePackings";
import { ShapeGenerator } from "./ShapeGenerator";
import { SceneUtils } from 'three/examples/jsm/utils/SceneUtils';

class TwistedCircleWireGenerator {

  isolatedStepWidthMultiplier = 1 / 5;

  constructor(radius, count, width, material, isolated, isolationRadius, isolationMaterials) {
    this.radius = radius;
    this.count = count;
    this.width = width;
    this.material = material;
    this.isolated = isolated;
    this.isolationMaterials = isolationMaterials;
    this.shapeGenerator = new ShapeGenerator;
    this.adaptiveRadius = isolated ? radius + isolationRadius : radius;
    this.equiCirclePackings = new EquiCirclePackings(this.adaptiveRadius, count);
    this.totalRadius = this.equiCirclePackings.getTotalRadius();
  }

  generateWireSpline(wireIndex, isIsolation) {
    var wirePoints = [];
    var wireCenterVector = this.equiCirclePackings.getCircleCenter(wireIndex);
    var start = isIsolation ? this.width * this.isolatedStepWidthMultiplier : 0;
    if (this.isolated) {
      var end = isIsolation ? this.width : this.width - this.width * (1 - this.isolatedStepWidthMultiplier);
    } else {
      var end = this.width;
    }
    var startAngle = start * THREE.Math.degToRad( 20 );
    wireCenterVector = wireCenterVector.rotateAround(new THREE.Vector2(0, 0), startAngle);      

    for (var i = start; i <= end; i++) {
      wirePoints.push(new THREE.Vector3(i, wireCenterVector.x, wireCenterVector.y));
      wireCenterVector = wireCenterVector.rotateAround(new THREE.Vector2(0, 0), THREE.Math.degToRad( 20 ));      
    }
    var wireSpline = new THREE.CatmullRomCurve3(wirePoints);
    return wireSpline;
  }
  
  generateWireMesh(wireIndex, isIsolation) {
    var circleShape, wireSpline, extrudeSettings, geometry, mesh;
    circleShape = this.shapeGenerator.circle(isIsolation ? this.adaptiveRadius : this.radius);
    wireSpline = this.generateWireSpline(wireIndex, isIsolation);
    extrudeSettings = {
      steps: 200,
      bevelEnabled: false,
      extrudePath: wireSpline
    };
    geometry = new THREE.ExtrudeGeometry(circleShape, extrudeSettings);
    mesh = new THREE.Mesh(geometry, isIsolation ? this.isolationMaterials[wireIndex] : this.material);
    return mesh;
  }

  generate() {
    var mesh;
    var wireGroup = new THREE.Group();
    for (var i = 0; i < this.count; i++) {
      mesh = this.generateWireMesh(i, false);
      wireGroup.add(mesh);
      if (this.isolated) {
        mesh = this.generateWireMesh(i, true);
        wireGroup.add(mesh);
      }
    }
    return wireGroup;
  }

}

export { TwistedCircleWireGenerator };