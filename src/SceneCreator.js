import * as THREE from "three";

class SceneCreator {

  constructor(size) {
    this.size = size;
    //this.canvasStyle = `width: ${this.size}px; height: ${this.size}px; position: absolute; top: 10; left: 10; border: 1px solid black; z-index: 2`;
    this.canvasStyle = `width: ${this.size}px; height: ${this.size}px; position: absolute; z-index: 2`;
  }

  make() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, this.size / this.size, 1, 1000);

    scene.add(new THREE.AmbientLight(0x222222));

    var pointLight = new THREE.PointLight(0xffffff, 0.3);
    pointLight.position.set(-10, 0, 0);
    scene.add(pointLight);

    var pointLight2 = new THREE.PointLight(0xffffff, 0.3);
    pointLight2.position.set(0, -50, 0);
    scene.add(pointLight2);

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    directionalLight.position.set(10, 10, 10);
    directionalLight.target.position.set(0, 0, 0);
    scene.add(directionalLight);
    scene.add(directionalLight.target);  

    let renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.clearColor = new THREE.Color(0xffffff);
    renderer.setSize(this.size, this.size);
    renderer.domElement.style = this.canvasStyle;

    var canvas = renderer.domElement;

    camera.position.set(-30, 30, 40);
    camera.lookAt(new THREE.Vector3(5, 0, 0));
    return { scene, camera, renderer, canvas };
  }

}

export { SceneCreator };