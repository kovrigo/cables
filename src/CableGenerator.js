import * as THREE from "three";
import { TwistedCircleWireGenerator } from "./TwistedCircleWireGenerator";
import { CircleWireCoverGenerator } from "./CircleWireCoverGenerator";
import { CloneGenerator } from "./CloneGenerator";
import { RibbonGenerator } from "./RibbonGenerator";
import { TwistedCircleWireShieldGenerator } from "./TwistedCircleWireShieldGenerator";
import { Materials } from "./Materials";

class CableGenerator {

  intersectionDefaultStepLength = 5;
  intersectionStepLength = 5;
  cloneSpacerWidthMultiplier = 1.3;

  currentIntersectionStep = 0;
  currentRadius = 0;

  objects = [];

  constructor() {
    this.materials = new Materials();
  }

  cableLength() {
    return this.currentIntersectionStep + this.intersectionStepLength;
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

  circleWireCover(coverWidth, materialName, color = null) {
    var material = this.materials.getMaterialByCode(materialName, color);
    var radius = this.currentRadius + coverWidth;
    var width = this.intersectionStepLength;
    var circleWireCoverGenerator = new CircleWireCoverGenerator(radius, width, material);
    var wire = circleWireCoverGenerator.generate();
    wire.position.set(this.currentIntersectionStep, 0, 0);
    this.currentIntersectionStep += this.intersectionStepLength;
    this.currentRadius += coverWidth;
    this.objects.push(wire);
    return this;
  }

  ribbon(materialName, thickness, color = null) {
    var material = this.materials.getMaterialByCode(materialName, color);
    var radius = this.currentRadius;
    var width = this.intersectionStepLength * 1;
    var underlyingObject = this.objects[this.objects.length - 1];
    var ribbonGenerator = new RibbonGenerator(radius, width, thickness, material, underlyingObject);
    var ribon = ribbonGenerator.generate();
    ribon.position.set(this.currentIntersectionStep, 0, 0);
    this.currentIntersectionStep += width;
    this.currentRadius = ribbonGenerator.totalRadius;
    this.objects.push(ribon);
    return this;
  }

  twistedCircleWireShield(wireRadius, materialName) {
    var material = this.materials.getMaterialByCode(materialName);
    var twistedCircleWireShieldGenerator = new TwistedCircleWireShieldGenerator(this.currentRadius, wireRadius, this.intersectionStepLength, material);
    var wire = twistedCircleWireShieldGenerator.generate();
    wire.position.set(this.currentIntersectionStep, 0, 0);
    this.currentIntersectionStep += this.intersectionStepLength;
    this.currentRadius = twistedCircleWireShieldGenerator.totalRadius;
    this.objects.push(wire);
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

  setStep(step) {
    this.intersectionStepLength = step;
    return this;
  }

  setDefaultStep() {
    this.intersectionStepLength = this.intersectionDefaultStepLength;
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