import * as THREE from "three";
import { EquiCirclePackings } from "./EquiCirclePackings";

class CloneGenerator {

  constructor(object, radius, count) {
    this.object = object;
    this.radius = radius;
    this.count = count;
    this.equiCirclePackings = new EquiCirclePackings(radius, count);
    this.totalRadius = this.equiCirclePackings.getTotalRadius();
  }

  generate() {
    var group = new THREE.Group();
    for (var i = 0; i < this.count; i++) {
      var centerVector = this.equiCirclePackings.getCircleCenter(i);
      var clonedObject = this.object.clone();
      clonedObject.position.set(clonedObject.position.x, centerVector.x, centerVector.y);
      group.add(clonedObject);
    }
    return group;
  }

}

export { CloneGenerator };