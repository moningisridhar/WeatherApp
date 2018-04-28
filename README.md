
* Building an app with AngularJS (of course!)
* Building an app based on the [OpenWeatherMap API](http://openweathermap.org/API/)
* Bootstrapping an AngularJS app: Basic modules and view definition, ng-app, ng-view
* Defining a controller for handling the weather data in $scope
* Defining a service for fetching weather data from openweathermap.com via JSONP
* Defining a custom directive for instantly embedding sort of "weather data day panel"
* Setting up unit and e2e-tests with karma/jasmine

weatherapp uses:

* [AngularJS v1.5.9](https://github.com/angular/angular.js)
* [angular-seed](https://github.com/angular/angular-seed)
* [iso-3166-country-codes-angular](https://github.com/BluePyth/iso-3166-country-codes-angular)
* [Bootstrap v3.0.0](https://github.com/twbs/bootstrap)


## Installation

### Clone repository and install dependencies

via git and npm:

```
$ git clone https://github.com/moningisridhar/WeatherApp.git [my-app-name]
$ cd [my-app-name]
$ npm install
```

### Run application via server

You can pick one of these options:

1. serve this repository with a webserver of-your-choice
2. having installed node.js, you can run a script starting a simple web server:

```
$ ./scripts/web-server.js
```

Then navigate your browser to `http://localhost:<port>/app/index.html` to see the app running in
your browser.

### Run tests

To run unit and end-2-end tests with karma/jasmine, call these scripts:

```
$ ./scripts/test.sh
$ ./scripts/e2e-test.sh
```
