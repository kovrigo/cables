import * as THREE from "three";

class ShapeGenerator {

  constructor() {

  }

  circle(radius) {
    var circleRadius = radius;
    var circleShape = new THREE.Shape();
    circleShape.moveTo( 0, circleRadius );
    circleShape.quadraticCurveTo( circleRadius, circleRadius, circleRadius, 0 );
    circleShape.quadraticCurveTo( circleRadius, - circleRadius, 0, - circleRadius );
    circleShape.quadraticCurveTo( - circleRadius, - circleRadius, - circleRadius, 0 );
    circleShape.quadraticCurveTo( - circleRadius, circleRadius, 0, circleRadius );
    return circleShape;
  }

}

export { ShapeGenerator };