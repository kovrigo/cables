import * as THREE from "three";
import { EquiCirclePackings } from "./EquiCirclePackings";
import _ from 'lodash';

class GroundWireGenerator {

  constructor(radius, material, coverRadius, width, clonedRadius, clonedCount, clonedObjects) {
    this.radius = radius;
    this.material = material;
    this.coverRadius = coverRadius;
    this.width = width;
    this.clonedRadius = clonedRadius;
    this.clonedCount = clonedCount;
    this.clonedObjects = clonedObjects;
    this.equiCirclePackings = new EquiCirclePackings(this.clonedRadius, this.clonedCount);
    this.totalRadius = this.equiCirclePackings.getTotalRadius();
  }

  generate() {
    // Get all circles to put cloned objects into
    var circles = [];    
    for (var i = 0; i < this.clonedCount; i++) {
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
      return circle.clone().sub(firstCircle).length();
    });
    // Get second circle
    var secondCircle = circles.shift();
    // Get center of gound wire v
    var lVec = secondCircle.clone().sub(firstCircle);
    var l = lVec.length();
    var r = this.clonedRadius;
    var r1 = this.radius + this.coverRadius;
    var fi = Math.acos(l / (2 * (r + r1)));
    var v1 = lVec.clone().normalize().multiplyScalar(r + r1).rotateAround(new THREE.Vector2(0, 0), fi);
    v1 = firstCircle.clone().add(v1);
    var v2 = lVec.clone().normalize().multiplyScalar(r + r1).rotateAround(new THREE.Vector2(0, 0), -fi);
    v2 = firstCircle.clone().add(v2);
    var v = v1.length() > v2.length() ? v1 : v2;

    // Get angle to rotate ground wire and cloned objects to show ground wire at 2 pm position
    var desiredAngle = Math.PI / 4;
    var currentAngle = v.angle();
    var a = desiredAngle - currentAngle;    
    this.rotation = a;

    // Create and position ground wire
    var group = new THREE.Group();

    // Gound wire
    var goundWireCoverStep = this.width / 5;
    var groundWireGeometry = new THREE.CylinderGeometry( this.radius, this.radius, goundWireCoverStep, 64 );
    var mesh = new THREE.Mesh(groundWireGeometry, this.material);
    mesh.rotateZ(-Math.PI * 0.5);
    mesh.position.x = goundWireCoverStep / 2;
    mesh.position.y = v.x;
    mesh.position.z = v.y;
    group.add(mesh);

    // Ground material
    var highResolutionMultiplier = 100;
    var texHeight = this.width * highResolutionMultiplier;
    var texWidth = 2 * Math.PI * r1 * highResolutionMultiplier;
    var coverMaterial =  new THREE.MeshStandardMaterial({ 
        map: new THREE.CanvasTexture(this.getStripedCanvas(
          texWidth, 
          texHeight,
        )) 
    });     

    // Ground cover    
    var coverGeometry = new THREE.CylinderGeometry( r1, r1, this.width - goundWireCoverStep, 64 );
    mesh = new THREE.Mesh(coverGeometry, coverMaterial);
    mesh.rotateZ(-Math.PI * 0.5);
    mesh.rotateY(Math.PI);
    mesh.position.x = (this.width - goundWireCoverStep) / 2 + goundWireCoverStep;
    mesh.position.y = v.x;
    mesh.position.z = v.y;

    group.add(mesh);

    // Rotate gound wire and cloned objects
    group.rotateX(a);
    this.clonedObjects.rotateX(a);

    // Calculate new total radius
    if (v.length() + r1 > this.totalRadius) {
      this.totalRadius = v.length() + r1;
    }
    return group;
  }

  getStripedCanvas(canvasWidth, canvasHeight) { 
    var canvas = document.createElement('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = '#EEFF41';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw green stripe
    ctx.strokeStyle = '#2ECC40';
    ctx.lineWidth = canvasWidth / 10;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvasHeight);
    ctx.stroke();

    return canvas;
  }

}

export { GroundWireGenerator };