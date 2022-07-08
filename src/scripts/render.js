const puppeteer = require("puppeteer");
var fs = require('fs');

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

  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 0 });

  function saveDataUrlToFile(dataURL, fileName) {
    var regex = /^data:.+\/(.+);base64,(.*)$/;
    var matches = dataURL.match(regex);
    var ext = matches[1];
    var data = matches[2];
    var buffer = Buffer.from(data, 'base64');
    fs.writeFileSync(fileName + '.' + ext, buffer);
  }

  function getRenderedImage() {
    var cable = cableViewer.newCable()
      .twistedCircleWire(0.2, 3, "copper")
      .circleWireCover(0.3, "plastic", "#444444")
      .clone(3)
      .circleWireCover(0.5, "plastic", "#333333")
      .ribbon("steel", 0.15)
      .circleWireCover(0.4, "plastic", "#111133")
      .compileScene();
    return cableViewer.render(cable);
  }

  var dataURL = await page.evaluate(getRenderedImage);
  saveDataUrlToFile(dataURL, "test");

/*
var testsCount = 1;
var startTime = Date.now();
for (var i = 0; i < testsCount; i++) {
  var dataURL = await page.evaluate(getRenderedImage);
  saveDataUrlToFile(dataURL, i);
}
var endTime = Date.now();
var avgTime = (endTime - startTime) / testsCount;
console.log(avgTime);
*/

  await page.close();
  const pages = await browser.pages();  
  await browser.close();
};

launch();
