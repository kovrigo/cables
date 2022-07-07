import * as THREE from "three";
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SceneCreator } from "./SceneCreator";
import { CableGenerator } from "./CableGenerator";

const sceneCreator = new SceneCreator(500);
const { scene, camera, renderer } = sceneCreator.make();

function render() {
  var cableGenerator = new CableGenerator();

  var cable = cableGenerator.twistedCircleWire(0.2, 16, "steel", "copper")
    .circleWireCover(0.3, "plastic", 0x444444)
    .clone(3)
    .circleWireCover(0.5, "plastic", 0x333333)
    .ribbon("steel")
    .circleWireCover(0.4, "plastic")
    .compileScene();

  scene.add(cable);
  //controls.update();
  renderer.render(scene, camera);
};

render();

// Тонкая пленка из фольги (сталь)
// Экструдированный полимерный слой (любой цвет полимера)
// Проволока панцирем (медь или облуженная)
// Гофра (сталь)
// Проволока сеткой (медь или облуженная)
// Лента (сталь)
