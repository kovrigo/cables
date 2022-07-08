import * as THREE from "three";
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SceneCreator } from "./SceneCreator";
import { CableGenerator } from "./CableGenerator";

const sceneCreator = new SceneCreator(500);
const { scene, camera, renderer } = sceneCreator.make();

window.threeCanvas = renderer.domElement;

var cableGenerator = new CableGenerator();
var cable = cableGenerator.twistedCircleWire(0.2, 16, "copper")
  .circleWireCover(0.3, "plastic", 0x444444)
  .clone(3)
  .circleWireCover(0.5, "plastic", 0x333333)
  .ribbon("steel")
  .circleWireCover(0.4, "plastic")
  .compileScene();

function render(cable) {
  scene.add(cable);
  //controls.update();
  renderer.render(scene, camera);
  scene.remove(cable);
};

function nodeRender(cable) {
  scene.add(cable);
  renderer.render(scene, camera);
  scene.remove(cable);
  return renderer.domElement.toDataURL();
}

function nodeGenerateRandomCable() {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  var cableGenerator = new CableGenerator();
  var cable = cableGenerator.twistedCircleWire(0.2, getRandomInt(16) + 1, "copper")
    .circleWireCover(0.3, "plastic", 0x444444)
    .clone(3)
    .circleWireCover(0.5, "plastic", 0x333333)
    .ribbon("steel")
    .circleWireCover(0.4, "plastic")
    .compileScene();
  return cable;
}

window.nodeRender = nodeRender;
window.nodeGenerateRandomCable = nodeGenerateRandomCable;

render(cable);

// Тонкая пленка из фольги (сталь)
// Экструдированный полимерный слой (любой цвет полимера)
// Проволока панцирем (медь или облуженная)
// Гофра (сталь)
// Проволока сеткой (медь или облуженная)
// Лента (сталь)
