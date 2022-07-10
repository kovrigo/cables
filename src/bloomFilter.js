
import { CableViewer } from "./CableViewer";

var cableViewer = new CableViewer(500);
window.cableViewer = cableViewer;
document.body.appendChild(cableViewer.canvas);

var cableDescription = {
  buildSteps: [
    {
      step: "twistedCircleWire",
      options: {
        radius: 0.2,
        count: 16,
        material: "copper"
      }
    },
    {
      step: "setStep",
      options: {
        newStep: 1.3
      }
    },
    {
      step: "circleWireCover",
      options: {
        radius: 0.2,
        material: "plastic",
        color: "#999999"
      }
    },
    {
      step: "setStep",
      options: {
        newStep: 3
      }
    },
    {
      step: "twistedCircleWireShield",
      options: {
        radius: 0.1,
        material: "steel",
      }
    },
    {
      step: "clone",
      options: {
        count: 3
      }
    },
    {
      step: "setStep",
      options: {
        newStep: 2.5
      }
    },
    {
      step: "circleWireCover",
      options: {
        radius: 0.4,
        material: "plastic",
        color: "#00695c"
      }
    },
    {
      step: "setStep",
      options: {
        newStep: 1.5
      }
    },
    {
      step: "circleWireCover",
      options: {
        radius: 0.3,
        material: "plastic",
        color: "#333333"
      }
    },
    {
      step: "setDefaultStep"
    },
    {
      step: "ribbon",
      options: {
        thickness: 0.1,
        material: "steel"
      }
    },
    {
      step: "setStep",
      options: {
        newStep: 10
      }
    },
    {
      step: "circleWireCover",
      options: {
        radius: 0.4,
        material: "plastic",
        color: "#333333",
        text: "allcables.pro",
        textSize: 0.7,
        textColor: "#FFFFFF"
      }
    },    
  ]
};

var cable = cableViewer.newCableFromJson(cableDescription);

/*
var cable = cableViewer.newCable()
  .twistedCircleWire(0.2, 16, "copper")
  .setStep(1)
  .circleWireCover(0.2, "plastic", "#999999")
  .setStep(4)
  .twistedCircleWireShield(0.1, "steel")
  .clone(3)
  .setStep(2)
  .circleWireCover(0.4, "plastic", "#777777")
  .setStep(1.5)
  .circleWireCover(0.3, "plastic", "#333333")
  .setDefaultStep()
  .ribbon(0.15, "steel")
  .setStep(7)
  .circleWireCover(0.4, "plastic", "#222222")
  .compileScene();
*/

cableViewer.render(cable);