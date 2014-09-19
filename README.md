## di.js demo using jspm and SystemJS

This readme describes how to set up your working space in order to run the demo application.

The demo application uses Angulars [di.js](https://github.com/angular/di.js) for dependency injection together with SystemJS as module loader. Additionally [jspm](https://github.com/jspm/jspm-cli) gets used for fetching all required dependencies.


### Installation

```bash
# Install all the the dev dependencies
npm install

# If you wanna use "grunt" commands, install also:
npm install -g grunt

# Install all required packages via jspm
jspm install
```


### Build the demo (optional)

Build the demo via the following command. This is optional as the demo is already prebuild.

```bash
grunt build
```


### Running the demo

The following command will start a simple webserver which is available under the URL http://localhost:9001
Open this URL in your browser to see the demo.

```bash
grunt serve
```

In the debug console of your browser you should see then the following output:

```
"Unlocking the car..."
"Unlocking all doors"
"Flash winker"
"Car is unlocked"
```


###Caveats

- Currently its required to transpile the source code as annotations aren't yet supported by the traceur runtime.
- Normally you wouldn't check in the build folder but I think in case of the demo it helps to understand how the result will look like.
