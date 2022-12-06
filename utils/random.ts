/**
 * 入参: 对象
 * 出参: 对象中随机键的值
 * @param  {T} obj
 */
export const getRandomValueFromObject = <T extends object, K extends keyof T>(
  obj: T
): T[K] => {
  const objectKeysArray = Object.keys(obj)
  const key = objectKeysArray[
    Math.floor(Math.random() * objectKeysArray.length)
  ] as K
  return obj[key]
}
