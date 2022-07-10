import * as THREE from "three";

class Utils {

  constructor() {
    
  }

  fitCameraToObject = function ( camera, objectLength, offset, controls ) {
    var cameraVector = camera.position;
    var lookAtVector = new THREE.Vector3(0, 0, -1);
    lookAtVector.applyQuaternion(camera.quaternion);
    var cameraDist = cameraVector.sub(lookAtVector).length();
    var fov = 2 * Math.atan( objectLength / ( 2 * cameraDist ) ) * ( 180 / Math.PI );
    camera.fov = fov * 0.7;
    camera.updateProjectionMatrix();
  }

}

export { Utils };