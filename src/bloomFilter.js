import * as THREE from "three";
import { BoxBufferGeometry } from "three";
import { Line2 } from "three/examples/jsm/lines/Line2";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";

//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { ShapeGenerator } from "./ShapeGenerator";
var shapeGenerator = new ShapeGenerator;

import { CableGenerator } from "./CableGenerator";

const SIZE = 500;
const CANVAS_STYLE = `width: ${SIZE}px; height: ${SIZE}px; position: absolute; top: 10; left: 10; border: 1px solid black; z-index: 2`;

const init = () => {
  let scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, SIZE/SIZE, 1, 1000);
  // Light
  scene.add(new THREE.AmbientLight(0x222222));

  
  var light3 = new THREE.PointLight(0xffffff, 0.3);
  light3.position.set(-10, 0, 0);
  scene.add(light3);


const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(10, 10, 10);
light.target.position.set(0, 0, 0);
scene.add(light);
scene.add(light.target);  


const color2 = 0xFFFFFF;
const intensity2 = 0.6;
const light2 = new THREE.DirectionalLight(color2, intensity2);
light2.position.set(0, -10, 10);
light2.target.position.set(0, 0, 0);
//scene.add(light2);
scene.add(light2.target);  


  let renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.clearColor = new THREE.Color(0x00ff00);
  renderer.setSize(SIZE, SIZE);
  renderer.domElement.style = CANVAS_STYLE;
  document.body.appendChild(renderer.domElement);

  return { scene, camera, renderer };
};

const drawLine = () => {
  const { scene, camera, renderer } = init();


camera.position.set(-30, 10, 40);
camera.lookAt(new THREE.Vector3(5, 0, 0));

////////////////////////////////////////////////////////////// 


function getUrlParam(key, defaultValue) {
  var url_string = location.href;
  var url = new URL(url_string);
  var value = url.searchParams.get(key);
  return value !== null ? value : defaultValue;
}

function getUrlParamBool(key, defaultValue) {
  var value = getUrlParam(key, null);
  if (value !== null) {
    return value != 0;
  }
  return defaultValue;
}

// Кол-во кабелей (1 - 4)
var cablesCount = getUrlParam("cables-count", 3);
// Радиус провода в скрутке
var wireRadius = getUrlParam("wire-radius", 0.564189583548);
// Кол-во проводов в скрутке (пока не более 16)
var wiresCount = getUrlParam("wires-count", 16);
// Наличии изоляции для каждого кабеля (синяя)
var hasCableInsulation = getUrlParamBool("has-cable-insulation", true);
// Наличие защитной оболочки для каждого кабеля (серая)
var hasCableShield = getUrlParamBool("has-cable-shield", true);
// Наличие защитной оболочки вокруг всех кабелей
var hasOverallShield = getUrlParamBool("has-overall-shield", true);

// Цвет самого кабеля
var coverColor = 0x003333;
  
var cableGenerator = new CableGenerator();

  var cable = cableGenerator.twistedCircleWire(0.2, 16, cableGenerator.materials.copper)
    .circleWireCover(0.3, cableGenerator.materials.insulation)
    .clone(3)
    .circleWireCover(0.5, cableGenerator.materials.insulation)
    .ribbon(cableGenerator.materials.copper)
    .circleWireCover(0.4, cableGenerator.materials.insulation, true)
    .compileScene();

  scene.add(cable);

  //controls.update();
  renderer.render(scene, camera);
};

const runAll = () => {
  drawLine();
};

runAll();