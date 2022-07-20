import * as THREE from "three";
import { ShapeGenerator } from "./ShapeGenerator";

class CorrugationCoverGenerator {

  constructor(currentRadius, coverRadius, stripeWidth, spacerWidth, material, width) {
    this.currentRadius = currentRadius;
    this.coverRadius = coverRadius;
    this.stripeWidth = stripeWidth;
    this.spacerWidth = spacerWidth;
    this.width = width;
    this.material = material;
    this.shapeGenerator = new ShapeGenerator;
  }

  generateMesh() {
    var group = new THREE.Group();
    var r = this.currentRadius + this.coverRadius;
    const geometry = new THREE.CylinderGeometry( r, r, this.width, 128, 128 );
    geometry.computeBoundingBox();
    var size = new THREE.Vector3();
    geometry.boundingBox.getSize(size);
    geometry.translate(0, size.y * 0.5, 0);
    const attribute = geometry.attributes.position;

    var b = this.spacerWidth;
    var u = this.stripeWidth / 3;
    var t = this.stripeWidth / 3;
    var l = b + t + 2 * u;

    var bumpMultiplier = this.currentRadius / (this.currentRadius + this.coverRadius / 2);

    for (var i = 0; i < attribute.array.length; i++) {
      var v = new THREE.Vector3(attribute.array[i*3], attribute.array[i*3 + 1], attribute.array[i*3 + 2]);

      var p = v.y - Math.floor(v.y / l);
      if (p > b && p < l - u) {
        var v2 = new THREE.Vector2(v.x, v.z);
        v2 = v2.clone().multiplyScalar(bumpMultiplier);
        v = new THREE.Vector3(v2.x, v.y, v2.y);
      }

      attribute.array[i*3] = v.x;
      attribute.array[i*3 + 1] = v.y;
      attribute.array[i*3 + 2] = v.z;
    }

    attribute.needsUpdate = true;
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();

    var mesh = new THREE.Mesh(geometry, this.material);
    mesh.rotateZ(-Math.PI * 0.5);
    mesh.rotateY(Math.PI);
    group.add(mesh);
    return group;
  }

  generate() {
    return this.generateMesh();
  }

}

export { CorrugationCoverGenerator };