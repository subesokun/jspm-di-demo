System.register(["di", "./doorsystem", "./winker"], function($__export) {
  "use strict";
  var Inject,
      DoorSystem,
      Winker,
      Car;
  return {
    setters: [function(m) {
      Inject = m.Inject;
    }, function(m) {
      DoorSystem = m.DoorSystem;
    }, function(m) {
      Winker = m.Winker;
    }],
    execute: function() {
      Car = $__export("Car", (function() {
        var Car = function Car(doorSystem, winker) {
          this.doorSystem = doorSystem;
          this.winker = winker;
        };
        return ($traceurRuntime.createClass)(Car, {unlock: function() {
            console.log('Unlocking the car...');
            this.doorSystem.unlock();
            this.winker.flash();
            console.log('Car is unlocked');
          }}, {});
      }()));
      Car.annotations = [new Inject(DoorSystem, Winker)];
    }
  };
});
