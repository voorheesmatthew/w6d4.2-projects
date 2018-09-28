class DOMNodeCollection {
  constructor(arrayOfHTML) {
    this.array = arrayOfHTML;
  }
}

DOMNodeCollection.prototype.html = function(str) {
  if (str === undefined) {
    return this.array[0].innerHTML;
  }
  this.array.forEach(node => node.innerHTML = str);
};

DOMNodeCollection.prototype.empty = function(){
  this.array.forEach(node => node.innerHTML = "");
  this.array = [];
};

DOMNodeCollection.prototype.append = function(element){
  this.array.forEach(el => {
    if (typeof element === 'string') {
      el.innerHTML += element;
    } else if (element instanceof HTMLElement)
      el.innerHTML += element.outerHTML;
    else {
      element.array.forEach(el2 => {
        el.innerHTML += el2.outerHTML;
      });
    }
  });
};

DOMNodeCollection.prototype.children = function(){
  const resArr = this.array.map(node => node.children);
  return new DOMNodeCollection(resArr);
};

DOMNodeCollection.prototype.parent = function () {
  const resArr = this.array.map(node => node.parent);
  return new DOMNodeCollection(resArr);
};

DOMNodeCollection.prototype.attr = function (attribute, toAssign) {
  if (toAssign === undefined) {
    return this.array[0].attribute;
  } else {
    this.array[0].attribute = toAssign;
    return this.array[0].attribute;
  }
};

DOMNodeCollection.prototype.addClass = function (className) {
  this.array.forEach(el => {
    el.className += ` ${className}`;
  });
};

DOMNodeCollection.prototype.removeClass = function (className) {
  this.array.forEach(el => {
    el.className = el.className.replace(className, '');
  });
};

DOMNodeCollection.prototype.find = function (selector) {
  let collection = [];
  this.array.forEach(el => {
    collection = collection.concat(Array.from(el.querySelectorAll(selector)));
  });
  return new DOMNodeCollection(collection);
};

// DOMNodeCollection.prototype.on = function (trigger, callback) {
//   const onTrigger = `on${trigger}`;
//   this.array.forEach(el =>{
//     el.onTrigger = callback();
//   });
//   });
// };


module.exports = DOMNodeCollection;
