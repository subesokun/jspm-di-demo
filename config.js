System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "depCache": {
    "github:angular/di.js@master/util": [],
    "github:angular/di.js@master/profiler": [
      "github:angular/di.js@master/util"
    ],
    "github:angular/di.js@master/providers": [
      "github:angular/di.js@master/annotations",
      "github:angular/di.js@master/util"
    ],
    "build/doorsystem": [],
    "build/winker": [],
    "github:angular/di.js@master/annotations": [
      "github:angular/di.js@master/util"
    ],
    "build/car": [
      "github:angular/di.js@master",
      "build/doorsystem",
      "build/winker"
    ],
    "github:angular/di.js@master/injector": [
      "github:angular/di.js@master/annotations",
      "github:angular/di.js@master/util",
      "github:angular/di.js@master/profiler",
      "github:angular/di.js@master/providers"
    ],
    "github:angular/di.js@master": [
      "github:angular/di.js@master/injector",
      "github:angular/di.js@master/annotations"
    ],
    "build/main": [
      "github:angular/di.js@master",
      "build/car"
    ]
  }
});

System.config({
  "map": {
    "di": "github:angular/di.js@master"
  }
});

System.config({
  "versions": {
    "github:angular/di.js": "master"
  }
});

