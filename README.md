# html-util-element

Provides a html custom element which includes some useful shorcuts and utilitaries.

## Install

```bash
npm install html-util-element
```

## Usage
```html
<script src="node_modules/html-util-element/index.js"></script>
```

then

```javascript
class MyCustomElement extends HTMLUtilElement {

}

customElements.define('my-custom-element', MyCustomElement)
```

finally

```html
<my-custom-element>
  I'm full of utils.
</my-custom-element>
```

## Utils

### Properties

#### `parent`

Alias of [`parentNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode).

### Methods

#### `on(types, listener, useCapture)`

Behaves the same as [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) except that you can specify multiple event types separated by a space in the first parameter.

Returns `this`

```javascript
element.on('click scroll', event => alert('You clicked or scrolled.'))
```

#### `off(types, listener, useCapture)`

Behaves the same as [`removeEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) except that you can specify multiple event types separated by a space in the first parameter.

Returns `this`

```javascript
element.on('click scroll', function clickedOrScrolled(event) {
  alert('You clicked or scrolled.')
})

element.off('click scroll', clickedOrScrolled)
```

#### `once(types, listener, useCapture)`

Behaves the same as the `on` method except that the listener you provide will
be called once.

Returns `this`

```javascript
element.once('click scroll', event => {
  alert('You clicked or scrolled, I\'ll never say again.')
})
```

#### `remove()`

Removes the element from its parent node if it exists.

Returns `true` if the element has been removed, `false` in the other case.

```javascript
if(element.remove()) {
  alert('I\'ve been removed!')
}
else {
  alert('I wasn\'t in the DOM anyway.')
}

```
