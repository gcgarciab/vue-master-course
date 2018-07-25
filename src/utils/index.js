const countObjectProperties = obj => {
  if (typeof Obj === 'object') {
    return Object.keys(obj).length
  }
  return 0
}

export {
  countObjectProperties
}
