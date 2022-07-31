varying vec2 vUv;
varying vec3 vNormal;
uniform vec3 tColor;

varying vec3 vEyeVec;
varying vec3 vPosition;
varying vec3 vLightPos;

void main() {
  vec3 light = vec3(100.0, 100.0, 100.0);
  light = normalize(light);
  float dProd = max(0.0, dot(vNormal, light));
  vec3 c = dProd * tColor;

  vec3 L = normalize(vPosition - vLightPos); 
  vec3 N = normalize(vNormal); 
  vec3 E = normalize(vEyeVec); 
  vec3 R = reflect(L, N); 
  float specular = pow( max(dot(R, E), 0.0), 0.8);
  c = c + c * specular / 1.5;

  gl_FragColor = vec4(c.r, c.g, c.b, 1.0);
}