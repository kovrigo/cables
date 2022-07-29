import * as THREE from "three";

class Materials {

  colors = {
    "copper": 0xB87333,
    "steel": 0xced3d4,
    "plastic": 0x222222,
  };

  constructor() {

  }

  getMaterialByCode(code, color = null) {
    var Material = this.getMaterialConstructorByCode(code, color);
    return new Material;
  }

  getMaterialColorByCode(code) {
    return this.colors[code];
  }

  getMaterialConstructorByCode(code, color = null) {
    var self = this;
    switch(code) {
      case 'copper':
        return function () { 
            return new THREE.MeshStandardMaterial({
              metalness: 0.7,
              roughness: 0.5,
              color: self.colors[code],
            });
          };
        break;
      case 'steel':
        return function () { 
            return new THREE.MeshStandardMaterial({
              metalness: 0.7,
              roughness: 0.5,
              color: self.colors[code],
            });
          };
        break;
      default:
        return function () { 
            return new THREE.MeshPhongMaterial({
              color: color != null ? color : self.colors[code],
              shininess: 4
            });
          };      
        break;
    }
  }

  getPaletteMaterials(count) {
    var materials = [];
    var colors = [
        '#4682B4', '#FFA500', '#228B22', '#5A2A2A'
      ]
    for (var i = 0; i < count; i++) {
      var material = new THREE.MeshPhongMaterial({
          color: colors[i],
          shininess: 4
        });
      materials.push(material);
    }
    return materials;
  }

}

export { Materials };