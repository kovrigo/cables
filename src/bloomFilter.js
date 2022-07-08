
import { CableViewer } from "./CableViewer";

var cableViewer = new CableViewer(500);
window.cableViewer = cableViewer;
document.body.appendChild(cableViewer.canvas);

var cable = cableViewer.newCable()
  .twistedCircleWire(0.2, 16, "copper")
  .setStep(2)
  .circleWireCover(0.3, "plastic", "#999999")
  .setStep(3)
  .twistedCircleWireShield(0.1, "steel")
  .clone(3)
  .circleWireCover(0.5, "plastic", "#333333")
  .setDefaultStep()
  .ribbon("steel", 0.15)
  .circleWireCover(0.4, "plastic", "#551300")
  .compileScene();

cableViewer.render(cable);