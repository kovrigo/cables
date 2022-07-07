import * as THREE from "three";
import { BoxBufferGeometry } from "three";
import { Line2 } from "three/examples/jsm/lines/Line2";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";

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
   
  var wiresPositions = [
[
[0.000000000000000000000000000000,   0.000000000000000000000000000000]
],

[
[-0.500000000000000000000000000000,   0.000000000000000000000000000000],
[0.500000000000000000000000000000,   0.000000000000000000000000000000]
],

[
[-0.464101615137754587054892683011,  -0.267949192431122706472553658494],
[0.464101615137754587054892683011,  -0.267949192431122706472553658494],
[0.000000000000000000000000000000,   0.535898384862245412945107316988]
],

[
[-0.414213562373095048801688724210,  -0.414213562373095048801688724210],
[0.414213562373095048801688724210,  -0.414213562373095048801688724210],
[-0.414213562373095048801688724210,   0.414213562373095048801688724210],
[0.414213562373095048801688724210,   0.414213562373095048801688724210]
],

[
[-0.370191908158750137702237641058,  -0.509525449494428810513706911251],
[0.370191908158750137702237641058,  -0.509525449494428810513706911251],
[-0.598983089761037227177173011864,   0.194621403573803879364825731779],
[0.598983089761037227177173011864,   0.194621403573803879364825731779],
[0.000000000000000000000000000000,   0.629808091841249862297762358942]
],

[
[-0.333333333333333333333333333333,  -0.577350269189625764509148780502],
[0.333333333333333333333333333333,  -0.577350269189625764509148780502],
[-0.666666666666666666666666666667,   0.000000000000000000000000000000],
[0.666666666666666666666666666667,   0.000000000000000000000000000000],
[-0.333333333333333333333333333333,   0.577350269189625764509148780502],
[0.333333333333333333333333333333,   0.577350269189625764509148780502]
],

[
[-0.333333333333333333333333333333,  -0.577350269189625764509148780502],
[0.333333333333333333333333333333,  -0.577350269189625764509148780502],
[-0.666666666666666666666666666667,   0.000000000000000000000000000000],
[0.000000000000000000000000000000,   0.000000000000000000000000000000],
[0.666666666666666666666666666667,   0.000000000000000000000000000000],
[-0.333333333333333333333333333333,   0.577350269189625764509148780502],
[0.333333333333333333333333333333,   0.577350269189625764509148780502]
],

[
[-0.302593388348611302909204224933,  -0.628341645367213738512227388956],
[0.302593388348611302909204224933,  -0.628341645367213738512227388956],
[-0.679921171839088240043878874469,  -0.155187570571975671990838057814],
[0.679921171839088240043878874469,  -0.155187570571975671990838057814],
[0.000000000000000000000000000000,   0.000000000000000000000000000000],
[-0.545254445070410775447749861103,   0.434825910113495061957667559237],
[0.545254445070410775447749861103,   0.434825910113495061957667559237],
[0.000000000000000000000000000000,   0.697406611651388697090795775067]
],

[
[-0.276768653914155215717770973808,  -0.668178637919298919997757686523],
[0.276768653914155215717770973808,  -0.668178637919298919997757686523],
[-0.668178637919298919997757686523,  -0.276768653914155215717770973808],
[0.668178637919298919997757686523,  -0.276768653914155215717770973808],
[0.000000000000000000000000000000,   0.000000000000000000000000000000],
[-0.668178637919298919997757686523,   0.276768653914155215717770973808],
[0.668178637919298919997757686523,   0.276768653914155215717770973808],
[-0.276768653914155215717770973808,   0.668178637919298919997757686523],
[0.276768653914155215717770973808,   0.668178637919298919997757686523]
],

[
[-0.262258924190165855095630653709,  -0.689552138434555425611558523406],
[0.262258924190165855095630653709,  -0.689552138434555425611558523406],
[-0.654207495490543857031888931623,  -0.340990392505480262378855842125],
[0.654207495490543857031888931623,  -0.340990392505480262378855842125],
[0.000000000000000000000000000000,  -0.235306356998833687832605108517],
[-0.715460686241806569843043724712,   0.179938604472344027862805139398],
[0.715460686241806569843043724712,   0.179938604472344027862805139398],
[0.000000000000000000000000000000,   0.289211491381498022358656198900],
[-0.415055617900124834285924684739,   0.609910427019080420778753583334],
[0.415055617900124834285924684739,   0.609910427019080420778753583334]
],

[
[-0.254854701717148909608835737700,  -0.700207538209709779458522719445],
[0.254854701717148909608835737700,  -0.700207538209709779458522719445],
[-0.645314757823482092972348022140,  -0.372572649141425545195582131150],
[0.645314757823482092972348022140,  -0.372572649141425545195582131150],
[-0.254854701717148909608835737700,  -0.044937760073141310932641542855],
[0.254854701717148909608835737700,  -0.044937760073141310932641542855],
[-0.733824866869546118800008853460,   0.129393123143898335937886211109],
[0.733824866869546118800008853460,   0.129393123143898335937886211109],
[0.000000000000000000000000000000,   0.396483531848771796650108754372],
[-0.478970165152397209191173115760,   0.570814415065811443520636508336],
[0.478970165152397209191173115760,   0.570814415065811443520636508336]
],

[
[0.000000000000000000000000000000,  -0.751836529428313158455945512868],
[-0.468509916422022800799147453449,  -0.588010735613764119868275923156],
[0.468509916422022800799147453449,  -0.588010735613764119868275923156],
[-0.248163470571686841544054487132,  -0.143277246537595169579619996000],
[0.248163470571686841544054487132,  -0.143277246537595169579619996000],
[-0.743487192950506270382840218584,  -0.111736121739513839036609043190],
[0.743487192950506270382840218584,  -0.111736121739513839036609043190],
[0.000000000000000000000000000000,   0.286554493075190339159239992000],
[-0.651109533978045892394293176753,   0.375918264714156579227972756434],
[0.651109533978045892394293176753,   0.375918264714156579227972756434],
[-0.274977276528483469583692765135,   0.699746857353277958904884966346],
[0.274977276528483469583692765135,   0.699746857353277958904884966346]
],

[
[0.000000000000000000000000000000,  -0.763932022500210303590826331269],
[-0.449027976579585372441945151797,  -0.618033988749894848204586834366],
[0.449027976579585372441945151797,  -0.618033988749894848204586834366],
[0.000000000000000000000000000000,  -0.291796067500630910772478993806],
[-0.726542528005360885895466757481,  -0.236067977499789696409173668731],
[0.726542528005360885895466757481,  -0.236067977499789696409173668731],
[-0.277514551425775513453521605683,   0.090169943749474241022934171828],
[0.277514551425775513453521605683,   0.090169943749474241022934171828],
[-0.726542528005360885895466757481,   0.236067977499789696409173668731],
[0.726542528005360885895466757481,   0.236067977499789696409173668731],
[0.000000000000000000000000000000,   0.472135954999579392818347337463],
[-0.449027976579585372441945151797,   0.618033988749894848204586834366],
[0.449027976579585372441945151797,   0.618033988749894848204586834366]
],

[
[-0.231030727971008638446179972284,  -0.733442938515316761317080600849],
[0.231030727971008638446179972284,  -0.733442938515316761317080600849],
[-0.609675819175613671374693346478,  -0.468624729220878118077233075033],
[0.609675819175613671374693346478,  -0.468624729220878118077233075033],
[0.000000000000000000000000000000,  -0.333285979559905641242580264825],
[-0.768190276890133910785454709996,  -0.034604043351266198219931527263],
[0.768190276890133910785454709996,  -0.034604043351266198219931527263],
[-0.308367219150810883066288686495,   0.010822211595801297189873578980],
[0.308367219150810883066288686495,   0.010822211595801297189873578980],
[0.000000000000000000000000000000,   0.354930402751508235622327422786],
[-0.649340589637573068270213179616,   0.411910839835425855242946640088],
[0.649340589637573068270213179616,   0.411910839835425855242946640088],
[-0.296038836464104903630150063193,   0.709700464019698855133195351283],
[0.296038836464104903630150063193,   0.709700464019698855133195351283]
],

[
[-0.221172539086390937264316484926,  -0.746762962275994326426699615779],
[0.221172539086390937264316484926,  -0.746762962275994326426699615779],
[-0.641867708133704242812289468947,  -0.441110030636716667007802153589],
[0.641867708133704242812289468947,  -0.441110030636716667007802153589],
[-0.221172539086390937264316484926,  -0.304417884103212451898066645927],
[0.221172539086390937264316484926,  -0.304417884103212451898066645927],
[-0.778559854667208457922024976609,  -0.020414861589403361459829169568],
[0.778559854667208457922024976609,  -0.020414861589403361459829169568],
[-0.357864685619895152374051992588,   0.116277284944100853649906338094],
[0.357864685619895152374051992588,   0.116277284944100853649906338094],
[0.000000000000000000000000000000,   0.376281198318223196496320615665],
[-0.617868598994017495220466270160,   0.474141970563996006023958330682],
[0.617868598994017495220466270160,   0.474141970563996006023958330682],
[-0.260003913374122342846414277571,   0.734145883938118348870372608254],
[0.260003913374122342846414277571,   0.734145883938118348870372608254]
],

[
[0.000000000000000000000000000000,  -0.783335257075577578989352063067],
[-0.416424118540487841572566999821,  -0.663479523780077891110760966724],
[0.416424118540487841572566999821,  -0.663479523780077891110760966724],
[-0.705416674059201028176189884850,  -0.340589842680189381976367195063],
[0.705416674059201028176189884850,  -0.340589842680189381976367195063],
[-0.216664742924422421010647936933,  -0.278940013248970164633197783693],
[0.216664742924422421010647936933,  -0.278940013248970164633197783693],
[-0.778541931420337049205105404241,   0.086525059941917500142787551612],
[0.778541931420337049205105404241,   0.086525059941917500142787551612],
[-0.347827782219485848085061235425,   0.134062045376535804555624718135],
[0.347827782219485848085061235425,   0.134062045376535804555624718135],
[0.000000000000000000000000000000,   0.392500195080286289189873104776],
[-0.613422546404355735310803524023,   0.487162092675997572917936613924],
[0.613422546404355735310803524023,   0.487162092675997572917936613924],
[-0.260587343786171975082805234959,   0.738720759987242156057605439640],
[0.260587343786171975082805234959,   0.738720759987242156057605439640]
]
  
  ];
  
  var wiresRadiuses = [
    1.000000000000,
    0.500000000000,
    0.464101615138,
    0.414213562373,
    0.370191908159,
    0.333333333333,
    0.333333333333,
    0.302593388349,
    0.276768653914,
    0.262258924190,
    0.254854701717,
    0.248163470572,
    0.236067977500,
    0.231030727971,
    0.221172539086,
    0.216664742924    
  ];

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

  function getCircleShape(radius) {
    var circleRadius = radius;
    var circleShape = new THREE.Shape();
    circleShape.moveTo( 0, circleRadius );
    circleShape.quadraticCurveTo( circleRadius, circleRadius, circleRadius, 0 );
    circleShape.quadraticCurveTo( circleRadius, - circleRadius, 0, - circleRadius );
    circleShape.quadraticCurveTo( - circleRadius, - circleRadius, - circleRadius, 0 );
    circleShape.quadraticCurveTo( - circleRadius, circleRadius, 0, circleRadius );
    return circleShape;
  }
  
  function generateWireSpline(wireIndex) {
    var wirePoints = [];
    var startWirePosition = wiresPositions[wiresCount - 1][wireIndex];
    var wireCenterVector = new THREE.Vector2(startWirePosition[0], startWirePosition[1]);
    for (var i = 0; i < productWidth; i++) {
      wireCenterVector = wireCenterVector.rotateAround(new THREE.Vector2(0, 0), THREE.Math.degToRad( 20 ));
      wirePoints.push(new THREE.Vector3(i, wireCenterVector.x, wireCenterVector.y));
    }
    var wireSpline = new THREE.CatmullRomCurve3(wirePoints);
    return wireSpline;
  }
  
  function generateWireMesh(wireIndex) {
    var circleShape = getCircleShape(wiresRadiuses[wiresCount - 1]);
    var wireSpline = generateWireSpline(wireIndex);
    var extrudeSettings = {
      steps: 200,
      bevelEnabled: false,
      extrudePath: wireSpline
    };
    var geometry = new THREE.ExtrudeGeometry(circleShape, extrudeSettings);
    var mesh = new THREE.Mesh(geometry, wireMaterial);
    return mesh;
  }

  function generateWireCable() {
    var mesh;
    var wireGroup = new THREE.Group();
    for (var i = 0; i < wiresCount; i++) {
      mesh = generateWireMesh(i);
      wireGroup.add(mesh);  
    }
    var scaleFactor = 1 / wiresRadiuses[wiresCount - 1] * wireRadius;
    wireGroup.scale.set(scaleFactor, scaleFactor, scaleFactor);
    return wireGroup;
  }
  
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
    var circleShape = getCircleShape(getWireCableRadius() + cableInsulationWidth);
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
    var circleShape = getCircleShape(getWireCableRadius() + modifiedShieldWidth);
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
    var circleShape = getCircleShape(getCablesRadiusWithOverallShield() + cableOverallShieldWidth);
    var extrudeSettings = {
      steps: 1,
      bevelEnabled: false,
      extrudePath: cableSpline
    };
    var geometry = new THREE.ExtrudeGeometry(circleShape, extrudeSettings);
    var mesh = new THREE.Mesh(geometry, coverMaterial);
    return mesh;      
  }
  
  var cables = generateCables();
  if (hasOverallShield) {
    var overallCablesShield = generateOverallCablesShield();
    cables.add(overallCablesShield);
  }
  var cover = generateCover();
  cables.add(cover);

  //cables.scale.set(10, 10, 10);
  
  scene.add(cables);


  var geometry = new THREE.BoxGeometry(10, 10, 10);
  var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: false});
  var cube = new THREE.Mesh(geometry, material);
  //scene.add(cube);


  renderer.render(scene, camera);
};

const runAll = () => {
  drawLine();
};

runAll();
