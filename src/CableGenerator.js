import * as THREE from "three";
import { TwistedCircleWireGenerator } from "./TwistedCircleWireGenerator";
import { CircleWireCoverGenerator } from "./CircleWireCoverGenerator";
import { CloneGenerator } from "./CloneGenerator";
import { RibbonGenerator } from "./RibbonGenerator";
import { Materials } from "./Materials";

class CableGenerator {

  width = 40;
  intersectionStepLength = 5;
  cloneSpacerWidthMultiplier = 1.3;

  currentIntersectionStep = 0;
  currentRadius = 0;

  objects = [];

  constructor() {
    this.materials = new Materials();
  }

  twistedCircleWire(radius, count, materialName) {
    var material = this.materials.getMaterialByCode(materialName);
    var twistedCircleWireGenerator = new TwistedCircleWireGenerator(radius, count, this.intersectionStepLength, material);
    var wire = twistedCircleWireGenerator.generate();
    wire.position.set(this.currentIntersectionStep, 0, 0);
    this.currentIntersectionStep += this.intersectionStepLength;
    this.currentRadius += twistedCircleWireGenerator.totalRadius;
    this.objects.push(wire);
    return this;
  }

  circleWireCover(coverWidth, material, color = null, extendToFullWidth = false) {
    material = this.materials.getMaterialByCode(material, color);
    var radius = this.currentRadius + coverWidth;
    var width = extendToFullWidth ? this.width - this.currentIntersectionStep : this.intersectionStepLength;
    var circleWireCoverGenerator = new CircleWireCoverGenerator(radius, width, material);
    var wire = circleWireCoverGenerator.generate();
    wire.position.set(this.currentIntersectionStep, 0, 0);
    this.currentIntersectionStep += this.intersectionStepLength;
    this.currentRadius += coverWidth;
    this.objects.push(wire);
    return this;
  }

  ribbon(material, color = null) {
    material = this.materials.getMaterialByCode(material, color);
    var radius = this.currentRadius;
    var width = this.intersectionStepLength * 2;
    var underlyingObject = this.objects[this.objects.length - 1];
    var ribbonGenerator = new RibbonGenerator(radius, width, material, underlyingObject);
    var ribon = ribbonGenerator.generate();
    ribon.position.set(this.currentIntersectionStep, 0, 0);
    this.currentIntersectionStep += width;
    this.currentRadius = ribbonGenerator.totalRadius;
    this.objects.push(ribon);
    return this;
  }

  clone(count) {
    var object = this.compileScene();
    var radius = this.currentRadius * this.cloneSpacerWidthMultiplier;
    var cloneGenerator = new CloneGenerator(object, radius, count);
    var clonedObjects = cloneGenerator.generate();
    this.currentRadius = cloneGenerator.totalRadius;
    this.objects = [clonedObjects];
    return this;
  }

  compileScene() {
    var group = new THREE.Group();
    for (var i = 0; i < this.objects.length; i++) {
      group.add(this.objects[i]);
    }
    return group;
  }

}

export { CableGenerator };