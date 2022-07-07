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
    var group = new THREE.Group();
    const geometry = new THREE.CylinderGeometry( this.radius, this.radius, this.width, 32 );
    var mesh = new THREE.Mesh(geometry, this.material);
    mesh.rotateZ(-Math.PI * 0.5);
    mesh.position.x = this.width / 2;
    group.add(mesh);
    return group;
  }

  generate() {
    return this.generateMesh();
  }

}

export { CircleWireCoverGenerator };