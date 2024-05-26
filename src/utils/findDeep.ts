export function findDeep<T>(obj: T | T[], key: keyof T, value: T[keyof T]): T | undefined {
  if (Array.isArray(obj)) {
    for (const item of obj) {
      const result = findDeep(item, key, value)
      if (result !== undefined) {
        return result
      }
    }
  } else if (typeof obj === 'object' && obj !== null) {
    console.log(obj, key, value)
    if (obj[key] === value) {
      return obj
    }

    for (const prop in obj) {
      if (Object.hasOwnProperty.call(obj, prop)) {
        const result = findDeep(obj[prop] as T, key, value)
        if (result !== undefined) {
          return result
        }
      }
    }
  }

  return undefined
}
