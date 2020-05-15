---
title: "AngularJS: Simple, reusable directives"
date: "2014-04-24T00:00:00.000Z"
---

# AngularJS: Simple, reusable directives

Directives in Angular give you the power to do a lot. Sometimes, you need to do a lot. Most of the time you just need something simple that will get the job done. Here are a few examples of reusable directives that do only what they need to do.

First, a directive that can be applied to a button group. Keep in mind this isn’t restricted to a button group, and if you think creatively, it can come be applied in a lot of places.

```javascript
mod.directive("radioValue", function () {
  return {
    restrict: "A",
    require: "^ngModel",
    scope: {
      radioValue: "=",
    },
    link: function (scope, elem, attrs, ngModelCtrl) {
      elem.on("click", function () {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(scope.radioValue);
        });
      });
      scope.$watch(
        function () {
          return ngModelCtrl.$modelValue;
        },
        function (newVal) {
          elem.toggleClass("selected", newVal === scope.radioValue);
        },
      );
    },
  };
});
```

Not impressed? You don’t have to be. Keep it simple. Here’s an example of how this directive would be used.

```javascript
<div class='btn-group' ng-model='ctrl.animal'>
    <div class='btn' radio-value='"Dog"'>Dog</div>
    <div class='btn' radio-value='"Cat"'>Cat</div>
    <div class='btn' radio-value='"Pig"'>Pig</div>
</div>
```

Full demo: http://jsfiddle.net/xQCRB/2/

The beauty of the directive, to me, is that we take advantage of an existing controller and the directive’s ability to require parent controllers to provide mutually exclusive selection on a model value.

Here’s one more simple directive and how it can be used. It’s actually quite similar.

```javascript
app.directive("setValueOnClick", function () {
  return {
    restrict: "A",
    require: "^ngModel",
    scope: {
      setValueOnClick: "=",
    },
    link: function (scope, elem, attrs, ngModelCtrl) {
      elem.on("click", function () {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(scope.setValueOnClick);
        });
      });
    },
  };
});
```

And it’s usage

```javascript
<div ng-controller="Controller as ctrl">
    <div ng-model="ctrl.number">
    <div class="number" ng-repeat="num in ctrl.numbers" set-value-on-click="num">{{num}}</div>
    </div>
    <h2>{{ctrl.number}}</h2>
</div>
```

Working example: http://jsfiddle.net/NsUvV/1/

The latter directive can be used in dropdown menus and several other places. It saves us the trouble of adding a controller callback, and can be applied to any DOM element quite easily. It is especially useful within `ng-repeat` to easily set the value to a property of a repeated element.

You could also alter it to have an `ng-model` on each repeated element, removing the need to use `ng-model` on the parent.

And that’s it, really. I just wanted to show how a lot of times simple solutions are all we need. You can go grab Bootstrap, Foundation, or any custom CSS, and easily build a dropdown menu or button group, then apply a few attributes to have a fully functional control.

The implementations above are not optimal and are intended for easy consumption. By utilizing `$parse` and making assumptions that the value we are assigning won’t change, we can save a few watch expressions. For the radioValue directive you could refactor away the watching of the model value as well with a little work. These micro-optimizations are nice, but if your web application gets to a point where they are necessary, you probably have too much going on. I like to keep the code clean and readable whenever possible (even at the cost of a bit of performance).

For an optimized and more advanced implementation I recommend taking a look at some of the directives in [AngularStrap](https://mgcrea.github.io/angular-strap/). Here is the source for their button directives.

https://github.com/mgcrea/angular-strap/blob/master/src/button/button.js

Where `bsRadioGroup` and `bsRadio` would be the radio buttons.
