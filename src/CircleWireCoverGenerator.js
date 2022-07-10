import * as THREE from "three";
import { ShapeGenerator } from "./ShapeGenerator";

class CircleWireCoverGenerator {

  constructor(radius, width, material, text = null, textSize = null, textColor = null) {
    this.radius = radius;
    this.width = width;
    this.material = material;
    this.text = text;
    this.textColor = textColor;
    this.textSize = textSize;
    this.shapeGenerator = new ShapeGenerator;
  }

  generateMesh() {
    var group = new THREE.Group();
    const geometry = new THREE.CylinderGeometry( this.radius, this.radius, this.width, 64 );
    var sideMaterial = this.material;
    if (this.text) {
      var highResolutionMultiplier = 100;
      var texHeight = this.width * highResolutionMultiplier;
      var texWidth = 2 * Math.PI * this.radius * highResolutionMultiplier;
      sideMaterial =  new THREE.MeshStandardMaterial({ 
          map: new THREE.CanvasTexture(this.getTextCanvas(
            texWidth, 
            texHeight, 
            "#" + this.material.color.getHexString(),
            this.text, 
            this.textSize * highResolutionMultiplier,
            this.textColor
          )) 
      });    
    }
    var materials = [
      sideMaterial,
      this.material,
      this.material
    ];
    var mesh = new THREE.Mesh(geometry, materials);
    mesh.rotateZ(-Math.PI * 0.5);
    mesh.rotateY(-Math.PI * 1.05);
    mesh.position.x = this.width / 2;
    group.add(mesh);
    return group;
  }

  getTextCanvas(canvasWidth, canvasHeight, canvasBgColor, text, textSize, textColor) { 

console.log(canvasBgColor);

    var canvas = document.createElement('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    var ctx = canvas.getContext('2d');
    ctx.font = Math.floor(textSize) + "px Lucida Console";
    ctx.fillStyle = canvasBgColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = textColor;
    ctx.textBaseline = "bottom";
    var metrics = ctx.measureText(text);
    var textRepeatCount = Math.floor(canvasWidth / metrics.width);
    var textOffset = (canvasWidth - textRepeatCount * metrics.width) / textRepeatCount;
    var textYOffset = textSize + textSize / 2;
    var offset = 0;
    for (var i = 0; i < textRepeatCount; i++) {
      ctx.fillText(text, offset, canvasHeight - textYOffset);
      offset += textOffset + metrics.width;        
    }

    // Draw top and bottom lines around the text
    ctx.strokeStyle = textColor;
    ctx.lineWidth = textSize / 15;

    var lineOffset = textSize / 2;
    var bottomLineY = canvasHeight - (textYOffset - lineOffset);
    ctx.beginPath();
    ctx.moveTo(0, bottomLineY);
    ctx.lineTo(canvasWidth, bottomLineY);
    ctx.stroke();

    var topLineY = canvasHeight - (textYOffset + textSize + lineOffset);
    ctx.beginPath();
    ctx.moveTo(0, topLineY);
    ctx.lineTo(canvasWidth, topLineY);
    ctx.stroke();

    return canvas;
  }

  generate() {
    return this.generateMesh();
  }

}

export { CircleWireCoverGenerator };