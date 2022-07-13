import * as THREE from "three";
import { SceneCreator } from "./SceneCreator";
import { CableGenerator } from "./CableGenerator";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Utils } from "./Utils";
import { Reflector } from 'three/examples/jsm/objects/Reflector'

class CableShadow {

  constructor() {

  }

  make(length, radius) {
    var shader = {
      uniforms: {
        
      },
      vertexShader: /* glsl */`
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,

      fragmentShader: /* glsl */`
        varying vec2 vUv;

        void main() {
          vec4 res = vec4(0.0, 0.0, 0.0, 1.0);
          vec2 center = vec2(0.5, 0.5);
          float c = 1.0 - smoothstep(0.0, 0.5, length(vUv - center));
          gl_FragColor = res * c * 0.5;
        }`
    };

    var shaderMaterial = new THREE.ShaderMaterial({
      uniforms: shader.uniforms,
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader,
    });

    const shadowGeo = new THREE.PlaneGeometry(length * 1.5, radius * 2 * 1.5);
    const shadowMesh = new THREE.Mesh(shadowGeo, shaderMaterial);
    shadowMesh.position.set(length * 1.5 / 2 - radius / 2, -radius * 2 * 1.5, -radius / 2);
    shadowMesh.rotation.x = Math.PI * -.5;
    return shadowMesh;

  }

}

export { CableShadow };