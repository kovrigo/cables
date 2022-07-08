import * as THREE from "three";
import { EquiCirclePackings } from "./EquiCirclePackings";
import { ShapeGenerator } from "./ShapeGenerator";
import { SceneUtils } from 'three/examples/jsm/utils/SceneUtils';

class TwistedCircleWireShieldGenerator {

  constructor(radius, wireRadius, width, material) {
    this.radius = radius;
    this.wireRadius = wireRadius;
    this.width = width;
    this.material = material;
    this.shapeGenerator = new ShapeGenerator;
  }

  generateWireSpline(wireIndex, circlesCount, adaptiveRadius) {
    var wirePoints = [];
    var angle = 2 * Math.PI / circlesCount * wireIndex;
    var wireCenterVector = new THREE.Vector2(0, this.radius + adaptiveRadius);
    wireCenterVector = wireCenterVector.rotateAround(new THREE.Vector2(0, 0), angle);
    for (var i = 0; i <= this.width; i++) {
      wireCenterVector = wireCenterVector.rotateAround(new THREE.Vector2(0, 0), THREE.Math.degToRad( 20 ));
      wirePoints.push(new THREE.Vector3(i, wireCenterVector.x, wireCenterVector.y));
    }
    var wireSpline = new THREE.CatmullRomCurve3(wirePoints);
    return wireSpline;
  }
  
  generateWireMesh(wireIndex, circlesCount, adaptiveRadius) {
    var circleShape = this.shapeGenerator.circle(adaptiveRadius);
    var wireSpline = this.generateWireSpline(wireIndex, circlesCount, adaptiveRadius);
    var extrudeSettings = {
      steps: 200,
      bevelEnabled: false,
      extrudePath: wireSpline
    };
    var geometry = new THREE.ExtrudeGeometry(circleShape, extrudeSettings);
    var mesh = new THREE.Mesh(geometry, this.material);
    return mesh;
  }

  generate() {
    var len = 2 * Math.PI * (this.radius + this.wireRadius);
    var circlesCount = Math.floor(len / (this.wireRadius * 2));
    var adaptiveRadius = len / circlesCount / 2;
    this.totalRadius = this.radius + adaptiveRadius;
    var mesh;
    var wireGroup = new THREE.Group();
    for (var i = 0; i < circlesCount; i++) {
      mesh = this.generateWireMesh(i, circlesCount, adaptiveRadius);
      wireGroup.add(mesh);  
    }
    return wireGroup;
  }

}

export { TwistedCircleWireShieldGenerator };