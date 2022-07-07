import * as THREE from "three";
import { BoxBufferGeometry } from "three";
import { Line2 } from "three/examples/jsm/lines/Line2";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";

import { ShapeGenerator } from "./ShapeGenerator";
var shapeGenerator = new ShapeGenerator;

import { CableGenerator } from "./CableGenerator";
var cableGenerator = new CableGenerator;

const PATH_TO_TEXTURE = "src/assets/particle1.png";
const SIZE = 500;
const CANVAS_STYLE = `width: ${SIZE}px; height: ${SIZE}px; position: absolute; top: 10; left: 10; border: 1px solid black; z-index: 2`;

const init = () => {
  let scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, SIZE/SIZE, 1, 1000);
  // Light
  scene.add(new THREE.AmbientLight(0x222222));
  var light = new THREE.PointLight(0xffffff);
  light.position.set(-30, 10, 40);
  scene.add(light);

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
  
//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////// 
   
  var productWidth = 20;
  
  var intersectionStepLength = 1.5;
  var cableInsulationWidth = 0.3;
  var cableShieldWidth = 0.5;
  var cableSpacer = 0.7;
  var cableOverallShieldWidth = 0.5;
  var coverWidth = 0.3;
  
  var wireMaterial = new THREE.MeshLambertMaterial({color: 0xff8000, wireframe: false});
  var cableInsulationMaterial = new THREE.MeshLambertMaterial({color: 0x006699, wireframe: false});
  var cableShieldMaterial = new THREE.MeshLambertMaterial({color: 0x777777, wireframe: false});
  var cableOverallShieldMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00, wireframe: false});
  var coverMaterial = new THREE.MeshLambertMaterial({color: coverColor, wireframe: false});

//////////////////////////////////////////////////////////////  

    
  function getWireCableRadius() {
    return 1 / wiresRadiuses[wiresCount - 1] * wireRadius;
  }
  
  function getWireCableRadiusWithInsulationAndShield() {
    var radius = 1 / wiresRadiuses[wiresCount - 1] * wireRadius;
    if (hasCableInsulation) {
      radius += cableInsulationWidth;
    }
    if (hasCableShield) {
      radius += cableInsulationWidth;
    }
    return radius + cableSpacer;
  }  
  
  function getCablesRadius() {
      var cableRadius = getWireCableRadiusWithInsulationAndShield();
      var scaleFactor = 1 / wiresRadiuses[cablesCount - 1];
      return cableRadius * scaleFactor;
  }    

  function getCablesRadiusWithOverallShield() {
    var radius = hasOverallShield ? getCablesRadius() + cableOverallShieldWidth : getCablesRadius();
    return radius;
  }    
  
  function generateWireCableInsulation() {
    var cablePoints = [];
    var scaleFactor = 1 / wiresRadiuses[wiresCount - 1] * wireRadius;
    cablePoints.push(new THREE.Vector3(intersectionStepLength * scaleFactor, 0, 0));
    cablePoints.push(new THREE.Vector3(productWidth * scaleFactor, 0, 0));
    var cableSpline = new THREE.CatmullRomCurve3(cablePoints);
    var circleShape = shapeGenerator.circle(getWireCableRadius() + cableInsulationWidth);
    var extrudeSettings = {
      steps: 1,
      bevelEnabled: false,
      extrudePath: cableSpline
    };
    var geometry = new THREE.ExtrudeGeometry(circleShape, extrudeSettings);
    var mesh = new THREE.Mesh(geometry, cableInsulationMaterial);
    return mesh;
  }

  function generateWireCableShield() {
    var cablePoints = [];
    var scaleFactor = 1 / wiresRadiuses[wiresCount - 1] * wireRadius;
    var modifiedShieldWidth = hasCableInsulation ? cableInsulationWidth + cableShieldWidth : cableShieldWidth;
    var modifiedIntersectionStepLength = hasCableInsulation ? intersectionStepLength * 2 : intersectionStepLength;
    cablePoints.push(new THREE.Vector3(modifiedIntersectionStepLength * scaleFactor, 0, 0));
    cablePoints.push(new THREE.Vector3(productWidth * scaleFactor, 0, 0));
    var cableSpline = new THREE.CatmullRomCurve3(cablePoints);    
    var circleShape = shapeGenerator.circle(getWireCableRadius() + modifiedShieldWidth);
    var extrudeSettings = {
      steps: 1,
      bevelEnabled: false,
      extrudePath: cableSpline
    };
    var geometry = new THREE.ExtrudeGeometry(circleShape, extrudeSettings);
    var mesh = new THREE.Mesh(geometry, cableShieldMaterial);
    return mesh;
  }  
  
  function generateCable() {
    var cableGroup = new THREE.Group();
    var cable = generateWireCable(wiresCount, wireRadius);
    cableGroup.add(cable);
    if (hasCableInsulation) {
      var cableInsulation = generateWireCableInsulation();
      cableGroup.add(cableInsulation);
    }
    if (hasCableShield) {
      var cableShield = generateWireCableShield();
      cableGroup.add(cableShield);
    }
    return cableGroup;
  }
  
  function generateCables() {
    var cables = new THREE.Group();
    for (var i = 0; i < cablesCount; i++) {
      var cable = generateCable();
      var startWirePosition = wiresPositions[cablesCount - 1][i];
      var cableRadius = getWireCableRadiusWithInsulationAndShield();
      var scaleFactor = 1 / 1 / wiresRadiuses[cablesCount - 1] * cableRadius;
      cable.position.set(0, startWirePosition[0] * scaleFactor, startWirePosition[1] * scaleFactor);
      cables.add(cable);
    }
    return cables;
  }

  function generateOverallCablesShield() {
    var cablePoints = [];
    var scaleFactor = 1 / wiresRadiuses[wiresCount - 1] * wireRadius;
    var multiplier = 1;
    if (hasCableInsulation) {
      multiplier += 1;
    }
    if (hasCableShield) {
      multiplier += 1;
    }        
    cablePoints.push(new THREE.Vector3(intersectionStepLength * scaleFactor * multiplier, 0, 0));
    cablePoints.push(new THREE.Vector3(productWidth * scaleFactor, 0, 0));

var shieldRadius = getCablesRadius() + cableOverallShieldWidth / 2;

var rbnWidth = 7;
var rbnSteps = 3;
var rbnThickness = cableOverallShieldWidth / rbnSteps;
var rbnStepLength = intersectionStepLength * scaleFactor / rbnSteps;
var rbnSegsPerStep = 50;
var rbnRadius = shieldRadius;

var rbnGeom = new THREE.BoxGeometry(rbnSteps * Math.PI * 2, rbnWidth, rbnThickness, rbnSteps * rbnSegsPerStep, 1, 1);
rbnGeom.computeBoundingBox();
var size = new THREE.Vector3();
rbnGeom.boundingBox.getSize(size);
rbnGeom.translate(size.x * 0.5, size.y * 0.5, size.z * 0.5);

// bend it!

const attribute = rbnGeom.attributes.position;
for (var i = 0; i < attribute.array.length; i++) {
  var v = new THREE.Vector3(attribute.array[i*3], attribute.array[i*3 + 1], attribute.array[i*3 + 2]);

  let angle = -v.x;
  let radius = rbnRadius + v.z;
  let shift = (v.x / (Math.PI * 2)) * rbnStepLength + v.y;
  let radiusShift = v.x / (Math.PI * 2) * rbnThickness;
  radius += radiusShift;
  
  v.x = Math.cos(angle) * radius;
  v.y = shift;
  v.z = Math.sin(angle) * radius;

  attribute.array[i*3] = v.x;
  attribute.array[i*3 + 1] = v.y;
  attribute.array[i*3 + 2] = v.z;

}

attribute.needsUpdate = true;

rbnGeom.computeFaceNormals();
rbnGeom.computeVertexNormals();

var mesh = new THREE.Mesh(rbnGeom, wireMaterial);
mesh.rotateZ(-Math.PI * 0.5);
mesh.position.set(intersectionStepLength * scaleFactor * multiplier, 0, 0);
//mesh.position.set(0, 0, 0);

//scene.add(mesh);



/*
    var extrudeSettings = {
      steps: 200,
      bevelEnabled: false,
      extrudePath: cableSpline
    };
    var geometry = new THREE.ExtrudeGeometry(circleShape, extrudeSettings);
    var mesh = new THREE.Mesh(geometry, cableOverallShieldMaterial);
*/
    return mesh;    
  }
  
  function generateCover() {
    var cablePoints = [];
    var scaleFactor = 1 / wiresRadiuses[wiresCount - 1] * wireRadius;
    var multiplier = 1;
    if (hasCableInsulation) {
      multiplier += 1;
    }
    if (hasCableShield) {
      multiplier += 1;
    }
    if (hasOverallShield) {
      multiplier += 1;
    }    
    cablePoints.push(new THREE.Vector3(intersectionStepLength * scaleFactor * multiplier, 0, 0));
    cablePoints.push(new THREE.Vector3(productWidth * scaleFactor, 0, 0));
    var cableSpline = new THREE.CatmullRomCurve3(cablePoints);    
    var circleShape = shapeGenerator.circle(getCablesRadiusWithOverallShield() + cableOverallShieldWidth);
    var extrudeSettings = {
      steps: 1,
      bevelEnabled: false,
      extrudePath: cableSpline
    };
    var geometry = new THREE.ExtrudeGeometry(circleShape, extrudeSettings);
    var mesh = new THREE.Mesh(geometry, coverMaterial);
    return mesh;      
  }
  

  var x = cableGenerator.twistedCircleWire(0.5, 8, cableGenerator.materials.copper)
    .circleWireCover(0.3, cableGenerator.materials.insulation)
    .clone(3)
    .circleWireCover(0.5, cableGenerator.materials.insulation, true)
    .compileScene();

  scene.add(x);
  

  /*
  var cables = generateCables();
  if (hasOverallShield) {
    var overallCablesShield = generateOverallCablesShield();
    cables.add(overallCablesShield);
  }
  var cover = generateCover();
  cables.add(cover);

  //cables.scale.set(10, 10, 10);
  
  scene.add(cables);
*/


  renderer.render(scene, camera);
};

const runAll = () => {
  drawLine();
};

runAll();
