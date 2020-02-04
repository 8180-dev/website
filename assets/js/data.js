import { debounce } from 'throttle-debounce'

let _scrollY = 0

/**
 * ページデータ
 * @type {{spW: number, tabW: number, pcW: number, wideScreenW: number, fullHdW: number, scrollTop: number, scrollLeft: number, init(): void, transitionEnd: string, animationEnd: string}}
 */
const DATA = {
  scrollTop: 0,
  scrollLeft: 0,
  scrollTopEase: 0,

  init() {
    const self = this
    const layoutEl = document.getElementById('__layout')

    self.winW = window.innerWidth
    self.winH = window.innerHeight
    self.pageH = document.documentElement.scrollHeight
    self.contentH = layoutEl.outerHeight

    const resize = () => {
      self.winW = window.innerWidth
      self.winH = window.innerHeight
      self.pageH = document.documentElement.scrollHeight
      self.contentH = layoutEl.outerHeight
    }
    resize()

    window.addEventListener(
      'resize',
      debounce(30 / 1000, () => {
        resize()
      }),
      false,
    )

    layoutEl &&
      layoutEl.addEventListener(
        'resize',
        debounce(30 / 1000, () => {
          resize()
        }),
        false,
      )

    const scroll = () => {
      self.scrollTop = window.pageYOffset
      //
      _scrollY += (window.pageYOffset - _scrollY) * 0.1
      self.scrollTopEase = _scrollY

      requestAnimationFrame(scroll)
    }
    scroll()

    self.mouse = {
      x: 0,
      y: 0,
    }
    const getMousePosition = e => {
      self.mouse.x = e.clientX
      self.mouse.y = e.clientY
    }
    window.addEventListener('mousemove', getMousePosition)

    //    window.addEventListener('scroll', throttle(60, () => {
    //      scroll();
    //    }), false)
  },
}

export default DATA
