/**
 * Dispose three objects
 *
 * @param scene
 * @param renderer
 */
export const disposeThreeObjects = (scene, renderer) => {
  scene.children.forEach(obj => {
    obj.traverse(obj3D => dispose(obj3D))
    scene.remove(obj)
  })

  renderer.dispose()
  renderer.forceContextLoss()
  renderer.domElement = null
}

function dispose(obj) {
  if (obj.geometry) {
    obj.geometry.dispose()
    obj.geometry = null
  }
  if (!!obj.material && Array.isArray(obj.material)) {
    obj.material.forEach(material => disposeMaterial(material))
  } else if (obj.material) {
    disposeMaterial(obj.material)
  }
}

function disposeMaterial(material) {
  if (material.map) {
    material.map.dispose()
    material.map = null
  }
  material.dispose()
  material = null
}
