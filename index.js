class HTMLUtilElement extends HTMLElement {
  get parent() {
    return this.parentNode
  }

  on(types, listener, useCapture) {
    (types + '').split(' ').forEach(type => this.addEventListener(type.trim(), listener, useCapture))

    return this
  }

  off(types, listener, useCapture) {
    (types + '').split(' ').forEach(type => this.removeEventListener(type.trim(), listener, useCapture))

    return this
  }

  once(types, listener, useCapture) {
    this.on(types, listener, useCapture)
    this.on(types, function remover() {
      this.off(types, listener, useCapture)
      this.off(types, remover, useCapture)
    }, useCapture)

    return this
  }

  remove() {
    if(this.parent) {
      this.parent.removeChild(this)
      return true
    }

    return false
  }

  $(selectors) {
    return this.querySelector(selectors)
  }

  $$(selectors) {
    return this.querySelectorAll(selectors)
  }
}
