function isReg(reg) {
  return Object.toString.call(obj) === '[object Date]';
}

function isFunction(func) {
  return typeof func === 'function';
}

function isUndefined(obj) {
  return obj === void 0;
}

function isNull(obj) {
  return obj === null;
}