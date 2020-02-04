import { TimelineMax } from 'gsap'

export class ClipAnimation {
  /**
   *
   * @param el {HTMLElement}
   */
  constructor(el) {
    this.$el = el
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.clip = [
      {
        x: this.width / 2,
        y: this.height / 2,
      },
      {
        x: this.width / 2,
        y: this.height / 2,
      },
      {
        x: this.width / 2,
        y: this.height / 2,
      },
      {
        x: this.width / 2,
        y: this.height / 2,
      },
    ]
  }

  /**
   *
   * @param done
   */
  openAnimation(done) {
    console.log('🔥 clipAnimation open start')

    const tl = new TimelineMax({
      onUpdate: () => {
        this.setStyle()
      },
      onComplete: () => {
        console.log('🔥 clipAnimation open end')
        done()
      },
    })

    tl.to(this.clip[0], 0.5, {
      x: 0,
      y: 0,
    })
      .to(this.clip[1], 0.5, {
        x: this.width,
        y: 0,
      })
      .to(this.clip[2], 0.5, {
        x: this.width,
        y: this.height,
      })
      .to(this.clip[3], 0.5, {
        x: 0,
        y: this.height,
      })
    // init val clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  closeAnimation(done) {
    console.log('🔥 clipAnimation close start')

    const tl = new TimelineMax({
      onUpdate: () => {
        this.setStyle()
      },
      onComplete: () => {
        console.log('🔥 clipAnimation close end')
        done()
      },
    })

    tl.to(this.clip[0], 0.5, {
      x: this.width / 2,
      y: this.height / 2,
    })
      .to(this.clip[1], 0.5, {
        x: this.width / 2,
        y: this.height / 2,
      })
      .to(this.clip[2], 0.5, {
        x: this.width / 2,
        y: this.height / 2,
      })
      .to(this.clip[3], 0.5, {
        x: this.width / 2,
        y: this.height / 2,
      })
    // init val clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  setStyle() {
    const clipPath = `polygon(${this.clip[0].x}px ${this.clip[0].y}px, ${this.clip[1].x}px ${this.clip[1].y}px, ${this.clip[2].x}px ${this.clip[2].y}px, ${this.clip[3].x}px ${this.clip[3].y}px)`
    this.$el.style.clipPath = 'none'
    this.$el.style.webkitClipPath = 'none'
    this.$el.offsetWidth
    this.$el.style.clipPath = clipPath
    this.$el.style.webkitClipPath = clipPath
  }
}
