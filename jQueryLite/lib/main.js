const DOMNodeCollection = require('./dom_node_collection.js');

function $l(selector) {
  if (selector instanceof HTMLElement ) {
    const arr = Array.from(selector);
    const collection = new DOMNodeCollection(arr);
    return collection;
  }
  const nodeList = document.querySelectorAll(selector);
  const array = Array.from(nodeList);
  return new DOMNodeCollection(array);
}

window.$l = $l;
