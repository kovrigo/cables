const puppeteer = require("puppeteer");
var fs = require('fs');

const URL = "http://localhost:8080";

const launch = async () => {
  const browser = await puppeteer.launch({
    args: [
      //"--disable-gpu",
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
    fs.writeFileSync(fileName, buffer);
  }

  function getRenderedImage(json) {
    var cable = cableViewer.newCableFromJson(json);
    return cableViewer.render(cable);
  }

  var argv = require('minimist')(process.argv.slice(2));
  var cables = JSON.parse(fs.readFileSync(argv.i, 'utf8'));
  for (var i = 0; i < cables.length; i++) {
    var dataURL = await page.evaluate(getRenderedImage, cables[i]);
    saveDataUrlToFile(dataURL, cables[i]["file_name"]);
  }

  await page.close();
  const pages = await browser.pages();  
  await browser.close();
};

launch();
