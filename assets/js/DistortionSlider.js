import * as THREE from 'three'
import gsap from 'gsap'

import { disposeThreeObjects } from 'Js/DisposeThreeObjects'
import vertex from '~/assets/glsl/ListSp.vs'
import fragment from '~/assets/glsl/ListSp.fs'

export class DistortionSlider {
  /**
   * Constructor.
   *
   * @param target {HTMLElement}
   * @param images {string[]}
   * @param texture {string}
   * @param deep {number}
   * @param speed {number}
   * @param current {number}
   * @param transitionEnd {function}
   * @returns {DistortionSlider}
   */
  constructor({
    target,
    images,
    texture,
    deep,
    speed,
    current,
    transitionEnd,
  }) {
    // bind this
    this.bindAll([
      'render',
      'prevSlide',
      'nextSlide',
      'autoPlayStart',
      'update',
    ])

    /**
     * canvas insert position
     * @type {HTMLElement}
     */
    this.el = target

    /**
     * transition end callback function
     * @type {Function}
     */
    this.transitionEnd = transitionEnd

    /**
     * Array of images to apply the effect
     * @type {string[]}
     */
    this.images = images

    /**
     * page counter
     */
    // init
    this.counter = {
      current: current || 0,
      prev: 0,
      next: 1,
      total: this.images.length - 1,
    }
    // calc
    this.counter.next =
      this.counter.current === this.counter.total ? 0 : this.counter.current + 1
    this.counter.prev =
      this.counter.current === 0 ? this.counter.total : this.counter.current - 1

    // set canvas position and size
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.vertex = vertex
    this.fragment = fragment
    this.imageRes = new THREE.Vector2(1920, 1008)

    this.autoPlaySpeed = 4000
    this.timerId = 0

    /**
     * distortion texture
     * @type {string}
     */
    this.texture = texture

    this.state = {
      animating: false,
      initial: true,
    }

    /**
     * @type {{
     *  deep: number, エフェクトのかかり具合
     *  speed: number 切り替えの速度 sec
     *  }}
     */
    this.effect = {
      deep: deep || 0.5,
      speed: speed || 2.5,
    }

    this.bg = []

    this.eventList = []

    this.init()

    return this
  }

  /**
   * event bind self this
   * @param nameArr {string[]}
   */
  bindAll(nameArr) {
    nameArr.forEach(func => (this[func] = this[func].bind(this)))
  }

  /**
   * setting camera
   */
  cameraSetup() {
    // 平行投影で遠近感がないカメラ
    this.camera = new THREE.OrthographicCamera(
      this.width / -2,
      this.width / 2,
      this.height / 2,
      this.height / -2,
      1,
      1000,
    )
    // 原点方向を見る
    // this.camera.lookAt(new THREE.Vector3(0, 0, 0))

    this.scene && this.camera.lookAt(this.scene.position)
    this.camera.position.z = 500
  }

  /**
   * scene
   * renderer
   * append canvas
   */
  setup() {
    this.scene = new THREE.Scene()

    // tracking time - performance.now()
    // https://threejs.org/docs/#api/en/core/Clock
    this.clock = new THREE.Clock(true)

    // init renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.width, this.height)

    this.el && this.el.appendChild(this.renderer.domElement)
  }

  /**
   * set texture and images
   */
  loadTextures() {
    // loading a texture uses the ImageLoader
    // Texture object - https://threejs.org/docs/#api/en/textures/Texture
    const loader = new THREE.TextureLoader()
    loader.crossOrigin = 'Anonymous'

    this.images.forEach(image => {
      const img = loader.load(image, this.render)
      // リピートしないように
      img.wrapS = THREE.ClampToEdgeWrapping
      img.wrapT = THREE.ClampToEdgeWrapping
      // いい感じに縮小 (ノイズ少ない)
      img.minFilter = THREE.LinearFilter
      this.bg && this.bg.push(img)
    })

    // texture for distortion
    this.disp = loader.load(this.texture, this.render)
    // リピートさせる
    this.disp.wrapS = this.disp.wrapT = THREE.RepeatWrapping
    // いい感じに拡大
    this.disp.magFilter = this.disp.minFilter = THREE.LinearFilter
  }

  /**
   * create Mesh
   */
  createMesh() {
    // create material
    if (this.bg) {
      this.material = new THREE.ShaderMaterial({
        uniforms: {
          dispPower: { type: 'f', value: 0.0 },
          intensity: { type: 'f', value: this.effect.deep },
          texture1: { type: 't', value: this.bg[this.counter.current] },
          texture2: { type: 't', value: this.bg[this.counter.next] },
          resolution: {
            type: 'v2',
            value: new THREE.Vector2(this.width, this.height),
          },
          imageResolution: {
            type: 'v2',
            value: this.imageRes,
          },
          disp: { type: 't', value: this.disp },
        },
        transparent: true,
        vertexShader: this.vertex,
        fragmentShader: this.fragment,
      })
    }

    // create geometry
    this.geometry = new THREE.PlaneBufferGeometry(2, 2)

    // create mesh
    this.mesh = new THREE.Mesh(this.geometry, this.material)

    this.scene && this.scene.add(this.mesh)
  }

  transitionPrev() {
    if (this.material && this.bg) {
      this.material.uniforms.texture2.value = this.bg[this.counter.prev]

      gsap.to(this.material.uniforms.dispPower, this.effect.speed, {
        value: 1,
        ease: 'Expo.easeInOut',
        onUpdate: this.render,
        onComplete: () => {
          //
          // export current index
          this.transitionEnd && this.transitionEnd(this.counter.current)
          // init
          if (this.material) {
            this.material.uniforms.dispPower.value = 0.0
          }
          this.changeTexture('prev')
          this.state.animating = false
          //
          //          console.log('🖼 transitionPrev end')
        },
      })
    }
  }

  /**
   * インクリメント時のアニメーション
   */
  transitionNext() {
    if (this.material && this.bg) {
      this.material.uniforms.texture2.value = this.bg[this.counter.next]
      //
      gsap.to(this.material.uniforms.dispPower, this.effect.speed, {
        value: 1,
        ease: 'Expo.easeInOut',
        onUpdate: this.render,
        onComplete: () => {
          //
          // export current index
          this.transitionEnd && this.transitionEnd(this.counter.current)
          // init
          if (this.material) {
            this.material.uniforms.dispPower.value = 0.0
          }
          this.changeTexture('next')
          this.state.animating = false
          //
          //          console.log('🖼 transitionNext end')
        },
      })
    }
  }

  prevSlide() {
    //    console.log('🖼 prevSlide start')
    //
    if (this.state.animating) return

    this.state.animating = true

    // start animation
    this.transitionPrev()

    // カウンターを進める
    this.counter.current =
      this.counter.current === 0 ? this.counter.total : this.counter.current - 1
    this.counter.next =
      this.counter.current === this.counter.total ? 0 : this.counter.current + 1
    this.counter.prev =
      this.counter.current === 0 ? this.counter.total : this.counter.current - 1

    // this.transitionEnd && this.transitionEnd(this.counter.current)
  }

  nextSlide() {
    //    console.log('🖼 nextSlide start')
    //
    if (this.state.animating) return

    this.state.animating = true

    // start animation
    this.transitionNext()

    // カウンターを進める
    this.counter.current =
      this.counter.current === this.counter.total ? 0 : this.counter.current + 1
    this.counter.next =
      this.counter.current === this.counter.total ? 0 : this.counter.current + 1
    this.counter.prev =
      this.counter.current === 0 ? this.counter.total : this.counter.current - 1
  }

  /**
   * update texture
   */
  changeTexture(direction) {
    if (this.material && this.bg) {
      this.material.uniforms.texture1.value = this.bg[this.counter.current]
      const texture2Count =
        direction === 'next' ? this.counter.next : this.counter.prev
      this.material.uniforms.texture2.value = this.bg[texture2Count]
    }
  }

  /**
   * set wheel event
   */
  listeners() {
    //
  }

  /**
   * autoplay start
   */
  autoPlayStart(speed = this.autoPlaySpeed) {
    this.timerId = window.setInterval(this.nextSlide, speed)
  }

  /**
   * autoplay stop
   */
  autoPlayStop() {
    clearInterval(this.timerId)
  }

  /**
   * autoplay reset
   */
  autoPlayReset(speed = this.autoPlaySpeed) {
    clearInterval(this.timerId)
    this.timerId = window.setInterval(this.nextSlide, speed)
  }

  /**
   * update render
   * called tweenMax update
   */
  render() {
    if (this.scene && this.renderer && this.camera) {
      this.renderer.render(this.scene, this.camera)
    }
  }

  /**
   * update frame
   */
  update() {
    this.render()

    this.animId = window.requestAnimationFrame(() => {
      this.update()
    })
  }

  /**
   * init
   */
  init() {
    this.setup()
    this.cameraSetup()
    this.loadTextures()
    this.createMesh()
    this.render()
  }

  /**
   * animation start
   */
  start() {
    this.listeners()
    this.update()
    this.autoPlayStart()
  }

  /**
   * destroy this object
   */
  destroy() {
    this.animId && cancelAnimationFrame(this.animId)
    this.autoPlayStop()

    this.eventList.forEach(event => event.destroy())

    this.mesh && this.scene && this.scene.remove(this.mesh)
    disposeThreeObjects(this.scene, this.renderer)
  }
}

export default DistortionSlider
