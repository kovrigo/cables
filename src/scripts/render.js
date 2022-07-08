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


function getRenderedImage() {
    return nodeRender(nodeGenerateRandomCable());
}

function saveDataUrlToFile(dataURL, fileName) {
  var regex = /^data:.+\/(.+);base64,(.*)$/;
  var matches = dataURL.match(regex);
  var ext = matches[1];
  var data = matches[2];
  var buffer = Buffer.from(data, 'base64');
  fs.writeFileSync(fileName + '.' + ext, buffer);
}

var testsCount = 100;
var startTime = Date.now();
for (var i = 0; i < testsCount; i++) {
  var dataURL = await page.evaluate(getRenderedImage);
  saveDataUrlToFile(dataURL, i);
}
var endTime = Date.now();
var avgTime = (endTime - startTime) / testsCount;
console.log(avgTime);


    //await page.screenshot({path: '_test.png'});
    await page.close();  

  const pages = await browser.pages();  
  await browser.close();
};

launch();
