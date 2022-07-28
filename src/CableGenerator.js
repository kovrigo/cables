import * as THREE from "three";
import { TwistedCircleWireGenerator } from "./TwistedCircleWireGenerator";
import { CircleWireCoverGenerator } from "./CircleWireCoverGenerator";
import { CloneGenerator } from "./CloneGenerator";
import { RibbonGenerator } from "./RibbonGenerator";
import { TwistedCircleWireShieldGenerator } from "./TwistedCircleWireShieldGenerator";
import { NetWireShieldGenerator } from "./NetWireShieldGenerator";
import { GroundWireGenerator } from "./GroundWireGenerator";
import { CorrugationCoverGenerator } from "./CorrugationCoverGenerator";
import { Materials } from "./Materials";

class CableGenerator {

  intersectionDefaultStepLength = 5;
  intersectionStepLength = 5;
  cloneSpacerWidthMultiplier = 1.1;

  currentIntersectionStep = 0;
  currentRadius = 0;

  objects = [];

  stepVariables = {
    twistedCircleWire: {
      radius: null,
      material: null
    },
    clone: {
      count: null,
    }
  };

  constructor(onProgress) {
    this.materials = new Materials();
    this.onProgress = onProgress;
  }

  cableLength() {
    return this.currentIntersectionStep;
  }

  twistedCircleWire(radius, count, materialName, isolated = false, isolationRadius = null) {
    isolated = isolated == null ? false : isolated;
    var material = this.materials.getMaterialByCode(materialName);
    var isolationMaterials = this.materials.getPaletteMaterials(count);
    var twistedCircleWireGenerator = new TwistedCircleWireGenerator(radius, count, this.intersectionStepLength, material, isolated, isolationRadius, isolationMaterials);
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
    this.currentRadius += coverWidth;
    this.objects.push(wire);
    return this;
  }

  ribbon(thickness, materialName, color = null) {
    var material = this.materials.getMaterialByCode(materialName, color);
    var radius = this.currentRadius;
    var width = this.intersectionStepLength;
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
    var material = this.materials.getMaterialConstructorByCode(materialName);
    var twistedCircleWireShieldGenerator = new TwistedCircleWireShieldGenerator(this.currentRadius, wireRadius, this.intersectionStepLength, material);
    var wire = twistedCircleWireShieldGenerator.generate();
    wire.position.set(this.currentIntersectionStep, 0, 0);
    this.currentIntersectionStep += this.intersectionStepLength;
    this.currentRadius = twistedCircleWireShieldGenerator.totalRadius;
    this.objects.push(wire);
    return this;
  }

  netWireShield(wireRadius, wiresCountPerRibbon, materialName) {
    var material = this.materials.getMaterialConstructorByCode(materialName);
    //var material = this.materials.getMaterialByCode(materialName);
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
    this.clonedRadius = radius;
    this.clonedCount = count;
    var cloneGenerator = new CloneGenerator(object, radius, count);
    this.clonedObjects = cloneGenerator.generate();
    this.currentRadius = cloneGenerator.totalRadius;
    this.objects = [this.clonedObjects];
    return this;
  }

  groundWire(radius, materialName, coverRadius) {
    var material = this.materials.getMaterialByCode(materialName);
    var width = this.intersectionStepLength;
    var groundWireGenerator = new GroundWireGenerator(radius, material, coverRadius, this.currentIntersectionStep, this.clonedRadius, this.clonedCount, this.clonedObjects);
    var groundWire = groundWireGenerator.generate();
    groundWire.position.set(0, 0, 0);
    this.currentRadius = groundWireGenerator.totalRadius;
    this.objects.push(groundWire);
    return this;
  }

  corrugationCover(radius, materialName, stripeWidth, spacerWidth) {
    var material = this.materials.getMaterialByCode(materialName);
    var width = this.intersectionStepLength;
    var corrugationCoverGenerator = new CorrugationCoverGenerator(this.currentRadius, radius, stripeWidth, spacerWidth, material, width);
    var cover = corrugationCoverGenerator.generate();
    cover.position.set(this.currentIntersectionStep, 0, 0);
    this.currentIntersectionStep += this.intersectionStepLength;
    this.currentRadius += radius;
    this.objects.push(cover);
    return this;
  }

  setStep(step) {
    var newStep = step.toString();
    if (newStep.includes('%')) {
      newStep = newStep.replace('%', '');
      newStep = parseFloat(newStep);
      newStep = newStep * this.currentRadius * 2 / 100;
    } else {
      newStep = parseFloat(newStep);
    }
    this.intersectionStepLength = newStep;
    return this;
  }

  setDefaultStep() {
    this.intersectionStepLength = this.intersectionDefaultStepLength;
    return this;
  }

  setVariable(step, option, value) {
    this.stepVariables[step][option] = value;
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

      if (this.onProgress) {
       this.onProgress((i + 1) / json.buildSteps.length);
      }

      var buildStep = json.buildSteps[i];
      switch (buildStep.step) {
        case 'setVariable':
          this.setVariable(buildStep.options.step, buildStep.options.option, buildStep.options.value);
          break        
        case 'setDefaultStep':
          this.setDefaultStep();
          break
        case 'setStep':
          this.setStep(buildStep.options.newStep);
          break
        case 'clone':
          var count = this.stepVariables.clone['count'] ? this.stepVariables.clone['count'] : buildStep.options.count;
          count = parseInt(count);
          this.clone(count);
          break
        case 'circleWireCover':
          this.circleWireCover(buildStep.options.radius, buildStep.options.material, buildStep.options.color, buildStep.options.alignWithNextLayer, buildStep.options.text, buildStep.options.textSize, buildStep.options.textColor);
          break
        case 'twistedCircleWire':
          var radius = this.stepVariables.twistedCircleWire['radius'] ? this.stepVariables.twistedCircleWire['radius'] : buildStep.options.radius;
          radius = parseFloat(radius);
          var material = this.stepVariables.twistedCircleWire['material'] ? this.stepVariables.twistedCircleWire['material'] : buildStep.options.material;
          this.twistedCircleWire(radius, buildStep.options.count, material, buildStep.options.isolated, buildStep.options.isolationRadius);
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
        case 'groundWire':
          this.groundWire(buildStep.options.radius, buildStep.options.material, buildStep.options.coverRadius);
          break;
        case 'corrugationCover':
          this.corrugationCover(buildStep.options.radius, buildStep.options.material, buildStep.options.stripeWidth, buildStep.options.spacerWidth);
          break;
        default:
          break
      }
    }
    return this.compileScene();
  }

}

export { CableGenerator };