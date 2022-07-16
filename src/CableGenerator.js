import * as THREE from "three";
import { TwistedCircleWireGenerator } from "./TwistedCircleWireGenerator";
import { CircleWireCoverGenerator } from "./CircleWireCoverGenerator";
import { CloneGenerator } from "./CloneGenerator";
import { RibbonGenerator } from "./RibbonGenerator";
import { TwistedCircleWireShieldGenerator } from "./TwistedCircleWireShieldGenerator";
import { NetWireShieldGenerator } from "./NetWireShieldGenerator";
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
    return this.currentIntersectionStep;
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

  circleWireCover(coverWidth, materialName, color = null, alignWithNextLayer = false, text = null, textSize = null, textColor = null) {
    alignWithNextLayer = alignWithNextLayer == null ? false : alignWithNextLayer;
    var material = this.materials.getMaterialByCode(materialName, color);
    var radius = this.currentRadius + coverWidth;
    var width = this.intersectionStepLength;
    var circleWireCoverGenerator = new CircleWireCoverGenerator(radius, width, material, text, textSize, textColor);
    var wire = circleWireCoverGenerator.generate();
    wire.position.set(this.currentIntersectionStep, 0, 0);
    if (!alignWithNextLayer) {
      this.currentIntersectionStep += this.intersectionStepLength;
    }
    console.log(alignWithNextLayer)
    this.currentRadius += coverWidth;
    this.objects.push(wire);
    return this;
  }

  ribbon(thickness, materialName, color = null) {
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

  netWireShield(wireRadius, wiresCountPerRibbon, materialName) {
    var material = this.materials.getMaterialByCode(materialName);
    var netWireShieldGenerator = new NetWireShieldGenerator(this.currentRadius, wireRadius, wiresCountPerRibbon, this.intersectionStepLength, material);
    var wire = netWireShieldGenerator.generate();
    wire.position.set(this.currentIntersectionStep, 0, 0);
    this.currentIntersectionStep += this.intersectionStepLength;
    this.currentRadius = netWireShieldGenerator.totalRadius;
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

  setFromJson(json) {
    for (var i = 0; i < json.buildSteps.length; i++) {
      var buildStep = json.buildSteps[i];
      switch (buildStep.step) {
        case 'setDefaultStep':
          this.setDefaultStep();
          break
        case 'setStep':
          this.setStep(buildStep.options.newStep);
          break
        case 'clone':
          this.clone(buildStep.options.count);
          break
        case 'circleWireCover':
          this.circleWireCover(buildStep.options.radius, buildStep.options.material, buildStep.options.color, buildStep.options.alignWithNextLayer, buildStep.options.text, buildStep.options.textSize, buildStep.options.textColor);
          break
        case 'twistedCircleWire':
          this.twistedCircleWire(buildStep.options.radius, buildStep.options.count, buildStep.options.material);
          break
        case 'twistedCircleWireShield':
          this.twistedCircleWireShield(buildStep.options.radius, buildStep.options.material);
          break
        case 'netWireShield':
          this.netWireShield(buildStep.options.radius, buildStep.options.countPerRibbon, buildStep.options.material);
          break          
        case 'ribbon':
          this.ribbon(buildStep.options.thickness, buildStep.options.material);
          break          
        default:
          break
      }
    }
    return this.compileScene();
  }

}

export { CableGenerator };