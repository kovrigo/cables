import * as THREE from "three";
import { SceneCreator } from "./SceneCreator";
import { CableGenerator } from "./CableGenerator";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Utils } from "./Utils";

class CableViewer {

  cable = null;

  constructor(size = 500) {
    var sceneCreator = new SceneCreator(size);
    var { scene, camera, renderer, canvas } = sceneCreator.make();
    this.utils = new Utils();
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.canvas = canvas;
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0, 0);
    this.controls.addEventListener('change', function () {
      renderer.render(scene, camera);
    });
  }

  newCable() {
    this.cableGenerator = new CableGenerator();
    return this.cableGenerator;
  }

  render(cable) {
    var cableLength = this.cableGenerator.cableLength();
    this.controls.target.set(cableLength / 3, 0, 0);
    this.controls.update();
    this.utils.fitCameraToObject(this.camera, cableLength, 1.25, this.controls);
    if (this.cable != null) {
      this.scene.remove(this.cable);
      this.cable = null;
    }
    this.cable = cable;
    this.scene.add(this.cable);
    this.renderer.render(this.scene, this.camera);
    return this.renderer.domElement.toDataURL();
  }

}

export { CableViewer };