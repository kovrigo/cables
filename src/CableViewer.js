import * as THREE from "three";
import { SceneCreator } from "./SceneCreator";
import { CableGenerator } from "./CableGenerator";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Utils } from "./Utils";
import { CableShadow } from "./CableShadow";
import { Reflector } from 'three/examples/jsm/objects/Reflector';

class CableViewer {

  cable = null;
  shadow = null;

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
      this.scene.remove(this.shadow);
      this.cable = null;
      this.shadow = null;
    }
    this.cable = cable;

    // Add fake shadow
    var cableShadow = new CableShadow();
    this.shadow = cableShadow.make(cableLength, this.cableGenerator.currentRadius);
    this.scene.add(this.shadow);

    this.scene.add(this.cable);
    this.renderer.render(this.scene, this.camera);
    return this.renderer.domElement.toDataURL();
  }

  newCableFromJson(json) {
    this.cableGenerator = new CableGenerator();
    return this.cableGenerator.setFromJson(json);
  }

}

export { CableViewer };