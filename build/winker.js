System.register([], function($__export) {
  "use strict";
  var Winker;
  return {
    setters: [],
    execute: function() {
      Winker = $__export("Winker", (function() {
        var Winker = function Winker() {};
        return ($traceurRuntime.createClass)(Winker, {flash: function() {
            console.log('Flash winker');
          }}, {});
      }()));
    }
  };
});
