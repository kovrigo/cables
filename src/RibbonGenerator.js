import * as THREE from "three";

class RibbonGenerator {

  ribbonThickness = 0.6;
  ribbonWidth = 7;
  ribbonSteps = 2.7;

  constructor(innerRadius, width, material, underlyingObject) {
    this.innerRadius = innerRadius;
    this.width = width;
    this.material = material;
    this.underlyingObject = underlyingObject;
    this.totalRadius = this.innerRadius + this.ribbonThickness;
  }

  generate() {
    var rbnSteps = this.ribbonSteps;
    var rbnWidth = this.ribbonWidth;
    var rbnThickness = this.ribbonThickness / this.ribbonSteps;
    var rbnStepLength = this.width / this.ribbonSteps;
    var rbnSegsPerStep = 50;
    var rbnRadius = this.innerRadius;

    var rbnGeom = new THREE.BoxGeometry(rbnSteps * Math.PI * 2, rbnWidth, rbnThickness, rbnSteps * rbnSegsPerStep, 1, 1);
    rbnGeom.computeBoundingBox();
    var size = new THREE.Vector3();
    rbnGeom.boundingBox.getSize(size);
    rbnGeom.translate(size.x * 0.5, size.y * 0.5, size.z * 0.5);

    const attribute = rbnGeom.attributes.position;
    for (var i = 0; i < attribute.array.length; i++) {
      var v = new THREE.Vector3(attribute.array[i*3], attribute.array[i*3 + 1], attribute.array[i*3 + 2]);

      let angle = -v.x;
      let radius = rbnRadius + v.z;
      let shift = (v.x / (Math.PI * 2)) * rbnStepLength + v.y;
      //let radiusShift = v.x / (Math.PI * 2) * rbnThickness;
      let radiusShift = Math.floor(v.x / (Math.PI * 2)) * rbnThickness;
      radius += radiusShift;
      
      v.x = Math.cos(angle) * radius;
      v.y = shift;
      v.z = Math.sin(angle) * radius;

      attribute.array[i*3] = v.x;
      attribute.array[i*3 + 1] = v.y;
      attribute.array[i*3 + 2] = v.z;

    }

    attribute.needsUpdate = true;

    rbnGeom.computeFaceNormals();
    rbnGeom.computeVertexNormals();

    var mesh = new THREE.Mesh(rbnGeom, this.material);
    mesh.rotateZ(-Math.PI * 0.5);
    mesh.rotateY(-Math.PI * 1.1);

    // Copy underlying object to fill space under he tibon
    var group = new THREE.Group();
    var clonedObject = this.underlyingObject.clone();
    clonedObject.position.set(0, 0, 0);
    group.add(clonedObject);
    group.add(mesh);

    return group;
  }

}

export { RibbonGenerator };