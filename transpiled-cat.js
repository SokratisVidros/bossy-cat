export var Cat = (function(){"use strict";var PRS$0 = (function(o,t){o["__proto__"]={"a":t};return o["a"]===t})({},{});var DP$0 = Object.defineProperty;var GOPD$0 = Object.getOwnPropertyDescriptor;var MIXIN$0 = function(t,s){for(var p in s){if(s.hasOwnProperty(p)){DP$0(t,p,GOPD$0(s,p));}}return t};var proto$0={};

  function Cat() {var name = arguments[0];if(name === void 0)name = 'Simon';
    this.name = name
  }DP$0(Cat,"prototype",{"configurable":false,"enumerable":false,"writable":false});

  proto$0.meow = function() {
    'MROW'
  };

  proto$0.destroyTheHouse = function() {
    window['Object'] = undefined
  };

  proto$0.eat = function() {
    'nom nom nom'
  };

  proto$0.sleep = function(callback) {
    setTimeout(callback, 1000)
  };
MIXIN$0(Cat.prototype,proto$0);proto$0=void 0;return Cat;})();