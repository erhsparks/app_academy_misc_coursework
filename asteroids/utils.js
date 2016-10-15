const Utils = {
  inherits (childClass, parentClass) {
    function Surrogate() {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  },

  randomVect:
    [Math.ceil(Math.random() * 50), Math.ceil(Math.random() * 50)]
};


module.exports = Utils;
