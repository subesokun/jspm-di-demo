System.register([], function($__export) {
  "use strict";
  var DoorSystem;
  return {
    setters: [],
    execute: function() {
      DoorSystem = $__export("DoorSystem", (function() {
        var DoorSystem = function DoorSystem() {};
        return ($traceurRuntime.createClass)(DoorSystem, {unlock: function() {
            console.log('Unlocking all doors');
          }}, {});
      }()));
    }
  };
});
