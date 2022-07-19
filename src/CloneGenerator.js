import * as THREE from "three";
import { EquiCirclePackings } from "./EquiCirclePackings";
import _ from 'lodash';

class CloneGenerator {

  constructor(object, radius, count) {
    this.object = object;
    this.radius = radius;
    this.count = count;
    this.equiCirclePackings = new EquiCirclePackings(radius, count);
    this.totalRadius = this.equiCirclePackings.getTotalRadius();
  }

  generate() {

    // Get all circles to put cloned objects into
    var circles = [];    
    for (var i = 0; i < this.count; i++) {
      circles.push(this.equiCirclePackings.getCircleCenter(i));
    }
    // Sort circles by distance from center (biggest first)
    circles = _.sortBy(circles, function (circle) {
      return -circle.length();
    });
    // Get the circle with the biggest distance from the center
    var firstCircle = circles.shift();
    // Sort remaining circles (trying to find closest neigboor on the outer layer)
    circles = _.sortBy(circles, function (circle) {
      //return (circle.length - firstCircle.length) + circle.clone().sub(firstCircle).length();
      return circle.clone().sub(firstCircle).length();
    });
    // Get second circle
    var secondCircle = circles.shift();


console.log(firstCircle, secondCircle, circles);

    var group = new THREE.Group();
    for (var i = 0; i < this.count; i++) {
      var centerVector = this.equiCirclePackings.getCircleCenter(i);
      var clonedObject = this.object.clone();

      var x = clonedObject.position.x;
      if (centerVector.x == firstCircle.x && centerVector.y == firstCircle.y) {
        x += 0.75;
      }
      if (centerVector.x == secondCircle.x && centerVector.y == secondCircle.y) {
        x += 1.5;
      }

      clonedObject.position.set(x, centerVector.x, centerVector.y);
      group.add(clonedObject);
    }
    return group;
  }

}

export { CloneGenerator };