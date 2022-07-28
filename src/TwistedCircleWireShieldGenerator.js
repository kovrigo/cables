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
      wireCenterVector = wireCenterVector.rotateAround(new THREE.Vector2(0, 0), THREE.Math.degToRad(-35 / this.radius));
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
      //mesh = this.generateWireMesh(i, circlesCount, adaptiveRadius);
      //wireGroup.add(mesh);      
      var mesh = this.generateVertexMesh(i, circlesCount, adaptiveRadius);
      wireGroup.add(mesh);
    }
    return wireGroup;
  }

  generateVertexMesh(wireIndex, circlesCount, adaptiveRadius) {
    var self = this;
    var startAngle = 2 * Math.PI / circlesCount * wireIndex;
    startAngle = startAngle.toFixed(10);
    var radius = this.radius + adaptiveRadius;
    radius = radius.toFixed(10);

    var material = this.material();
    material.userData.radius = radius;
    material.userData.startAngle = startAngle;
    material.onBeforeCompile = function ( shader ) {

      shader.uniforms.radius = { value: this.userData.radius };
      shader.uniforms.startAngle = { value: this.userData.startAngle };

      shader.vertexShader = 'uniform float radius;\n' + shader.vertexShader
      shader.vertexShader = 'uniform float startAngle;\n' + shader.vertexShader

      var replace = `
          // Calculate rotation angle by position x
          float currentAngle = startAngle + (-0.6108652382 / radius) * position.x;

          // Move wire "radius" distance from center
          vec2 v = vec2(.0, radius) + vec2(position.y, position.z);

          // Rotate aroud center
          float cosA = cos(currentAngle);
          float sinA = sin(currentAngle);
          mat2 rotationMatrix = mat2(
              cosA, -sinA, 
              sinA, cosA
            );
          v = v * rotationMatrix;


          vec3 transformed = vec3(position.x, v.x, v.y);
        `;
      shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', replace);
    };

    // Make sure WebGLRenderer doesnt reuse a single program
    material.customProgramCacheKey = function () {
      return wireIndex;
    };

    var geometry = new THREE.CylinderGeometry(adaptiveRadius, adaptiveRadius, this.width, 64, 128);
    geometry.translate(0, -this.width / 2, 0);
    geometry.rotateZ(Math.PI / 2);
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
  }

}

export { TwistedCircleWireShieldGenerator };