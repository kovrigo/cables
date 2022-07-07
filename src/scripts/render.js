const puppeteer = require("puppeteer");

const URL = "http://localhost:8080";

const launch = async () => {
  const browser = await puppeteer.launch({
    args: [
      "--disable-gpu",
      "--swiftshader",
      "--webgl-antialiasing-mode",
      "implicit",
    ],
    defaultViewport: {
      width: 520,
      height: 520,
    },
    headless: true,
    devtools: false,
  });

/*
var params = [
  {
    "name": "cables-count",
    "values": [1, 2, 3, 4]
  },
  {
    "name": "wires-count",
    "values": [1, 8, 16]
  },
  {
    "name": "has-cable-insulation",
    "values": [true, false]
  },
  {
    "name": "has-cable-shield",
    "values": [true, false]
  },
  {
    "name": "has-overall-shield",
    "values": [true, false]
  }
];

function combine(arrs) {
  const answer = [];
  (function req(result, rest = arrs.length) {
    if (!rest) return answer.push(result);
    arrs[rest - 1].forEach((element) => req([...result, element], rest - 1));
  })([]);
  return answer.map((arr) => arr.reverse().map((current, index) => ({[`arr${index + 1}`]: current})));
}

function flattenObject(obj) {
  var res = Object.keys(obj).map(function(key){return obj[key]});
  return res[0];
}

function generateTestCases(params) {
  var arrs = [];
  for (var i = 0; i < params.length; i++) {
    var testCaseValues = params[i]["values"];
    arrs.push(testCaseValues);
  }
  var combinedArrs = combine(arrs);
  var combinedArrsFlattened = [];
  for (var i = 0; i < combinedArrs.length; i++) {
    var flattened = [];
    for (var j = 0; j < combinedArrs[i].length; j++) {
      console.log(j, combinedArrs[i].length);
      flattened.push(flattenObject(combinedArrs[i][j]));
    }
    combinedArrsFlattened.push(flattened);
  }
  var res = [];
  for (var i = 0; i < combinedArrsFlattened.length; i++) {
    var testCase = {};
    for (var j = 0; j < params.length; j++) {
      testCase[params[j].name] = combinedArrsFlattened[i][j];
    }
    res.push(testCase);
  }
  return res;
}

var testCases = generateTestCases(params);

  function getRULParams(testCase) {
    var params = [];
    for (var key in testCase) {
      params.push(key + "=" + testCase[key]);
    }
    return "?" + params.join("&");
  }

  var lastTime = new Date();
  var timeElapsed = 0;
  var totalTime = 0;
  for (var i = 0; i < testCases.length; i++) {
    console.log(i + "/" + testCases.length);

    var URLParams = getRULParams(testCases[i]);    
    const page = await browser.newPage();
    await page.goto(URL + URLParams, { waitUntil: "networkidle0", timeout: 0 });
    await page.screenshot({path: 'cables/' + i + '.png'});
    await page.close();

    timeElapsed = new Date() - lastTime;
    lastTime = new Date();
    totalTime += timeElapsed;
  }

  console.log(totalTime / testCases.length);
*/

    const page = await browser.newPage();
    await page.goto(URL, { waitUntil: "networkidle0", timeout: 0 });
    await page.screenshot({path: '_test.png'});
    await page.close();  

  const pages = await browser.pages();  
  await browser.close();
};

launch();
