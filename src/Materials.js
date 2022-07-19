import * as THREE from "three";
import palette from "google-palette";

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
              metalness: 0.5,
              roughness: 0.5,
              color: color != null ? color : 0xced3d4
            });
        break;
      default:
        return new THREE.MeshPhongMaterial({
              color: color != null ? color : 0x222222,
              shininess: 4
            });
        break;
    }
  }

  getPaletteMaterials(count) {
    var materials = [];
    var colors = palette('mpn65', count);
    for (var i = 0; i < count; i++) {
      var material = new THREE.MeshPhongMaterial({
          color: '#' + colors[i],
          shininess: 4
        });
      materials.push(material);
    }
    return materials;
  }

}

export { Materials };