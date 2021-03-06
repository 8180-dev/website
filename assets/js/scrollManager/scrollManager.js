import FakeScroll from './fakeScroll'
import Parallax from './parallax'

class ScrollManager {
  constructor(browser) {
    this.browser = browser
    this.isPC = this.browser.isFromPc()
    this.isIE11 = this.browser.browser() === 'Internet Explorer'
    this.isEdge = this.browser.browser() === 'Edge'
    this.isSafari = this.browser.browser() === 'Safari'
    this.isPalax = false
    this.animateID = 0
    this.rafLoop = false
    this.isFirst = true
  }

  // init
  scrollEventAttach() {
    if (!this.isIE11 && this.isPC) {
      // eslint-disable-next-line new-cap
      this.fakeScroll = new FakeScroll('#wrap', 0.1)
      this.fakeScroll.eventAttach()
      this.animatePlay()
    }
  }

  // init & update
  parallaxEventAttach() {
    if (this.isIE11) {
      ;[...document.querySelectorAll('.js-parallax-item')].forEach(el => {
        el.classList.add('is-show')
      })
    } else if (!this.isIE11) {
      this.isPalax = true

      console.log('🎪 parallaxEventAttach')

      this.parallax = new Parallax('.js-parallax-item', {
        degree: 10,
        zoom: this.isEdge ? 0 : 200,
        speed: 0.05,
      })
      this.parallax.eventAttach()
      //
      this.isPC && this.fakeScroll.resize()
    }
  }

  scrollEventDetach() {
    if (!this.isIE11 && this.isPC) {
      this.fakeScroll.eventDetach()
      this.fakeScroll.destroyStyle()
      this.animateStop()
    }
  }

  parallaxEventDetach() {
    if (!this.isIE11) {
      this.isPalax = false
      this.parallax.eventDetach()
      this.parallax = null
    }
  }

  update() {
    //
    if (!this.isIE11 && !this.rafLoop) {
      this.render()
      //
      if (this.isFirst && this.isPC) {
        this.fakeScroll.sizeUpdate()
      }
      this.isFirst = false
      this.animateID = requestAnimationFrame(() => {
        this.update()
      })
    }
  }

  animatePlay() {
    //
    if (!this.isIE11) {
      this.rafLoop = false
      this.animateID = requestAnimationFrame(() => {
        this.update()
      })
    }
  }

  animateStop() {
    if (!this.isIE11) {
      this.rafLoop = true
      cancelAnimationFrame(this.animateID)
    }
  }

  render() {
    if (!this.isIE11) {
      this.isPC
        ? this.isPalax && this.parallax.update(this.fakeScroll.position.y)
        : this.isPalax && this.parallax.update()
    }
  }
}

export default ScrollManager
