System.register(["di", "./car"], function($__export) {
  "use strict";
  var Injector,
      Car;
  function main() {
    var injector = new Injector();
    var car = injector.get(Car);
    car.unlock();
  }
  return {
    setters: [function(m) {
      Injector = m.Injector;
    }, function(m) {
      Car = m.Car;
    }],
    execute: function() {
      main();
    }
  };
});
