/**
 * 与えられたミリ秒待つ
 * @param sec
 * @return {Promise<any>}
 */
export function pause(sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000))
}
