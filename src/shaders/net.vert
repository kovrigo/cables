varying vec2 vUv;
        uniform float radius;
        uniform float wireRadius;
        uniform float startAngle;
        uniform float counterClockwise;
        uniform float cw;
        uniform float aw;
        uniform float aas;
        uniform float currentLen;
        uniform float rotationAngle;
        uniform vec3 tColor;
        varying vec3 vNormal;
        varying vec3 vEyeVec;
        varying vec3 vLightPos;
        varying vec3 vPosition;

        vec3 distorted(vec3 p, float radius, float startAngle, float counterClockwise, float cw, float aw, float aas, float currentLen, float wireRadius) {
          // Calculate rotation angle by position x
          float currentAngle = startAngle + (counterClockwise * 0.6108652382 / radius) * p.x;
          // Move wire "radius" distance from center
          vec2 v = vec2(.0, radius) + vec2(p.y, p.z);
          // Rotate aroud center
          float cosA = cos(currentAngle);
          float sinA = sin(currentAngle);
          mat2 rotationMatrix = mat2(
              cosA, -sinA, 
              sinA, cosA
            );
          v = v * rotationMatrix;

          float len = currentLen + position.x / cw * aw;
          if (mod(floor(len / aas / 2.0), 2.0) == 0.0) {
            v = v + normalize(v) * wireRadius;
          } else {
            v = v;
          }

          vec3 transformed = vec3(p.x, v.x, v.y);
          return transformed;
        }

        void main() {
          vUv = uv;
          vec3 transformedPosition = distorted(position, radius, startAngle, counterClockwise, cw, aw, aas, currentLen, wireRadius);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(transformedPosition, 1.0);

          vec4 vertex = modelViewMatrix * vec4(transformedPosition, 1.0); 
          vEyeVec = -vec3(vertex.xyz);
          vec3 light = vec3(100.0, 100.0, 100.0);
          vertex = viewMatrix * vec4(light, 1.0);
          vLightPos = vec3(vertex.xyz);
          vertex = modelViewMatrix * vec4(transformedPosition, 1.0);
          vPosition = vec3(vertex.xyz);

          // Recalculate normals
          float tangentFactor = 0.05;
          vec3 c = distorted(vec3(position.x - tangentFactor, 0.0, 0.0), radius, startAngle, counterClockwise, cw, aw, aas, currentLen, wireRadius);
          vec3 b = distorted(vec3(position.x + tangentFactor, 0.0, 0.0), radius, startAngle, counterClockwise, cw, aw, aas, currentLen, wireRadius);
          vec3 a = distorted(position, radius, startAngle, counterClockwise, cw, aw, aas, currentLen, wireRadius);
          vec3 d = normalize(c - b);
          vec3 v = a - b;
          float t = dot(v, d);
          vec3 p = b + t * d;
          vec3 n = normalize(a - p);

          // Rotate normals
          float cosA = cos(rotationAngle);
          float sinA = sin(rotationAngle);
          mat2 rotationMatrix = mat2(
              cosA, -sinA, 
              sinA, cosA
            );
          vec2 n2 = vec2(n.y, n.z);
          n2 = n2 * rotationMatrix;
          n = vec3(n.x, n2.x, n2.y);

          vNormal = n;
        }