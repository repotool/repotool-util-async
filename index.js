'use strict'

const resolveHooks = (hooks) => {
  return Promise.all(hooks.map(hook => {
    if (typeof hook === 'function') {
      return hook()
    } else {
      return Promise.resolve(hook)
    }
  }))
}

Object.assign(exports, {
  resolveHooks
})
