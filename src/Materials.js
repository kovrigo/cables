import * as THREE from "three";

class Materials {

  constructor() {
    
  }

  getMaterialByCode(code, color = null) {
    switch(code) {
      case 'copper':
        return new THREE.MeshStandardMaterial({
              metalness: 0.7,
              roughness: 0.5,
              color: color != null ? color : 0xB87333
            });
        break;
      case 'steel':
        return new THREE.MeshStandardMaterial({
              metalness: 0.7,
              roughness: 0.5,
              color: color != null ? color : 0xced3d4
            });
        break;
      default:
        return new THREE.MeshPhongMaterial({
              color: color != null ? color : 0x222222,
              //specular: 0x0088bb,
              shininess: 4
            });
        break;
    }
  }

}

export { Materials };