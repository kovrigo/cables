import * as THREE from "three";
import { ShapeGenerator } from "./ShapeGenerator";

class CircleWireCoverGenerator {

  constructor(radius, width, material) {
    this.radius = radius;
    this.width = width;
    this.material = material;
    this.shapeGenerator = new ShapeGenerator;
  }

  generateSpline() {
    var cablePoints = [];
    cablePoints.push(new THREE.Vector3(0, 0, 0));
    cablePoints.push(new THREE.Vector3(this.width, 0, 0));
    var cableSpline = new THREE.CatmullRomCurve3(cablePoints);
    return cableSpline;
  }
  
  generateMesh() {
    var circleShape = this.shapeGenerator.circle(this.radius);
    var spline = this.generateSpline();
    var extrudeSettings = {
      steps: 1,
      bevelEnabled: false,
      extrudePath: this.generateSpline()
    };
    var geometry = new THREE.ExtrudeGeometry(circleShape, extrudeSettings);
    var mesh = new THREE.Mesh(geometry, this.material);
    return mesh;
  }

  generate() {
    return this.generateMesh();
  }

}

export { CircleWireCoverGenerator };