import * as THREE from "three";
import { EquiCirclePackings } from "./EquiCirclePackings";
import { ShapeGenerator } from "./ShapeGenerator";

class TwistedCircleWireGenerator {

  constructor(radius, count, width, material) {
    this.radius = radius;
    this.count = count;
    this.width = width;
    this.material = material;
    this.shapeGenerator = new ShapeGenerator;
    this.equiCirclePackings = new EquiCirclePackings(radius, count);
    this.totalRadius = this.equiCirclePackings.getTotalRadius();
  }

  generateWireSpline(wireIndex) {
    var wirePoints = [];
    var wireCenterVector = this.equiCirclePackings.getCircleCenter(wireIndex);
    for (var i = 0; i <= this.width; i++) {
      wireCenterVector = wireCenterVector.rotateAround(new THREE.Vector2(0, 0), THREE.Math.degToRad( 20 ));
      wirePoints.push(new THREE.Vector3(i, wireCenterVector.x, wireCenterVector.y));
    }
    var wireSpline = new THREE.CatmullRomCurve3(wirePoints);
    return wireSpline;
  }
  
  generateWireMesh(wireIndex) {
    var circleShape = this.shapeGenerator.circle(this.radius);
    var wireSpline = this.generateWireSpline(wireIndex);
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
    var mesh;
    var wireGroup = new THREE.Group();
    for (var i = 0; i < this.count; i++) {
      mesh = this.generateWireMesh(i);
      wireGroup.add(mesh);  
    }
    return wireGroup;
  }

}

export { TwistedCircleWireGenerator };