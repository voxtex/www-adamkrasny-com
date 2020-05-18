---
title: "Protecting Against Minification"
date: "2013-08-08"
---

# Protecting Against Minification

AngularJS is an interesting beast. The official documentation can be severely lacking. Trying to find answers or examples on the internet frequently turns into a hassle.

Something that I feel that should be covered is ensuring that your Angular code is protected from minification. When using Rails asset pipeline, for example, your JavaScript will be minified by default. This will actually break Angular code unless you explicitly protect against it. A lot of times you won’t even realize there is an issue until you deploy in production.

Assuming we have our application module defined

```javascript
var app = angular.module("application");
```

this is how you sometimes find controllers defined in examples

```javascript
app.controller("sampleCtrl", function ($scope) {});
```

but this will break when minified. AngularJS will internally look at the name of the parameter defined, in this case $scope, to inject the appropriate dependencies. What if the variable name is altered by the minification process?

Explicitly define the order of your dependencies using an array instead

```javascript
app.controller("sampleCtrl", ["$scope", function ($scope) {}]);
```

Slightly more verbose but I consider this best practice and use it in all of my code. The same syntax can be used when defining directives and factories.
