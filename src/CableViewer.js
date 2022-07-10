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


/*

  function getTextCanvas(canvasWidth, canvasHeight, canvasBgColor) { 
    var canvas = document.createElement('canvas');
    var blurredCanvasWidth = 100;
    var blurredCanvasHeight = blurredCanvasWidth * canvasHeight / canvasWidth;
    canvas.width = blurredCanvasWidth;
    canvas.height = blurredCanvasHeight;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = canvasBgColor;
    var rectWidth = blurredCanvasWidth / 2;
    var rectHeight = blurredCanvasHeight / 2;
    var rectWidthOffset = (blurredCanvasWidth - rectWidth) / 2;
    var rectHeightOffset = (blurredCanvasHeight - rectHeight) / 2;
    ctx.fillRect(rectWidthOffset, rectHeightOffset, rectWidth, rectHeight);

//return canvas;

    var blurredCanvas = document.createElement('canvas');
    blurredCanvas.width = canvasWidth;
    blurredCanvas.height = canvasHeight;
    var blurredCtx = blurredCanvas.getContext('2d');
    blurredCtx.drawImage(canvas, 0, 0, canvasWidth, canvasHeight);


return blurredCanvas;

  }

      var highResolutionMultiplier = 1000;
      var texHeight = this.cableGenerator.currentRadius * 2;
      var texWidth = cableLength;
      var sideMaterial =  new THREE.MeshBasicMaterial({ 
          map: new THREE.CanvasTexture(getTextCanvas(
            texWidth * highResolutionMultiplier, 
            texHeight * highResolutionMultiplier, 
            "#333333"
          )) 
      });

const shadowGeo = new THREE.PlaneGeometry(cableLength, this.cableGenerator.currentRadius * 2);
const shadowMesh = new THREE.Mesh(shadowGeo, sideMaterial);

shadowMesh.position.set(cableLength / 2 - this.cableGenerator.currentRadius / 2, -this.cableGenerator.currentRadius * 2, -this.cableGenerator.currentRadius / 2);
shadowMesh.rotation.x = Math.PI * -.5;

this.scene.add(shadowMesh);

*/

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