/**
 * global breakpoint setting
 * assets/sass/foundation/variable/_breakpoint.scss
 */
export const BreakPoints = {
  tablet: 768,
  desktop: 1024,
  widescreen: 1200,
  fullhd: 1680,
}

/**
 *
 * @returns {boolean}
 * @constructor
 */
export const IsMobile = () => {
  return window.innerWidth < 1024
}

/**
 *
 * @returns {boolean}
 * @constructor
 */
export const IsFull = () => {
  return window.innerWidth >= 1680
}
