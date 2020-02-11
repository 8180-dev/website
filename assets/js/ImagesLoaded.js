/**
 *
 * @param src {string}
 * @constructor
 */
/**
 *
 * @param src
 * @returns {Promise<HTMLImageElement>}
 * @constructor
 */
export const LoadImage = src => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = e => reject(e)
    img.src = src
  })
}
/**
 *
 * @param array {string[]} image path
 * @constructor
 */
export const LoadImages = async array => {
  const images = await Promise.all(
    array.map(async string => {
      const img = await LoadImage(string)
      return img
    }),
  )
  return images
}

/**
 * sample code
 *
 * const loadImages = await ImagesMulchLoad(imagesArray)
 * console.log('🖼 ', loadImages)
 */
