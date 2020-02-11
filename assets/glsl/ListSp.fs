// vertexShaderから渡されるテクスチャ座標
varying vec2 vUv;

// current image
uniform sampler2D texture1;
// next image
uniform sampler2D texture2;
// noise image
uniform sampler2D disp;

// noise を混ぜる比率 TweenMax で動かす : 0 ~ 1
uniform float dispPower;
// effect を当てる強さ係数
uniform float intensity;

// canvas resolution
uniform vec2 resolution;
// image resolution
uniform vec2 imageResolution;

void main() {
  vec2 uv = vUv;

  // 画角の比率を計算
  vec2 ratio = vec2(
    min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
    min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
  );

  // テクスチャの色情報をピクセルに
  vec4 disp = texture2D(disp, uv);
  // テクスチャ座標
  vec2 dispVec = vec2(disp.x, disp.y);

  // horizontal
  vec2 distPos1 = vec2(
    uv.x * ratio.x + (1.0 - ratio.x) * 0.5 + (dispVec.x * intensity * dispPower),
    uv.y * ratio.y + (1.0 - ratio.y) * 0.5 - (dispVec.y * intensity * dispPower) * 0.25
  );
  vec2 distPos2 = vec2(
    uv.x * ratio.x + (1.0 - ratio.x) * 0.5 + (dispVec.x * -(intensity * (1.0 - dispPower))),
    uv.y * ratio.y + (1.0 - ratio.y) * 0.5 - (dispVec.y * -(intensity * (1.0 - dispPower))) * 0.5
  );

  vec4 _texture1 = texture2D(texture1, distPos1);
  vec4 _texture2 = texture2D(texture2, distPos2);

  gl_FragColor = mix(_texture1, _texture2, dispPower);
}
