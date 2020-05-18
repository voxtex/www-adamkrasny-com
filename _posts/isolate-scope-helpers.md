---
title: "Isolate Scope Helpers"
date: "2013-09-10"
---

# Isolate Scope Helpers

_Author’s note - This has changed in Angular 1.2. Directives with isolated scopes will only share this isolated scope with other directives that explicitly request it. It will no longer impact regular directives._

Isolate scope is a concept which can be really useful. If a directive ever needs to create or manipulate it’s own variables that it will use in a template, you want it to have an isolated scope. Also the ‘@’, ‘&’, and ‘=’ shortcuts seem like they could be really easy shortcuts to reading attributes into a directive. Knowing all of this, I still find myself rarely using them and I’ll tell you why.

Anybody developing with AngularJS needs to be familiar with scope prototypical inheritance. Read about it [here](https://github.com/angular/angular.js/wiki/Understanding-Scopes). There is one key point I would like to highlight:

scope: { … } - the directive creates a new isolate/isolated scope. It does not prototypically inherit. This is usually your best choice when creating reusable components, since the directive cannot accidentally read or modify the parent scope.

Isolated scopes inside of directives do NOT prototypically inherit from parent scopes. Keep in mind this is only when defining a scope using an object. Using scope: true will still give you an isolated scope with inheritance. So this case specifically targets situations where you might use ‘@’, ‘&’, or ‘=’.

Why is this important? Let’s say we’re creating a tooltip directive that wants to grab the contents of its own interpolated attribute to display inside of the tooltip. Ignore which tooltip library we might use and just assume it’s a simple method call. This kind of directive might be defined like so:

```javascript
app.directive("tooltip", function () {
  return {
    scope: {
      tooltip: "@",
    },
    link: function (scope, elem, attrs) {
      elem.tooltip(scope.tooltip);
    },
  };
});
```

html

```javascript
<input type='text' tooltip='{{property}}'>
```

Our isolated scope will have the value of the interpolated attribute, so the tooltip will display the value of property. Looks good right? Well some Angular guys will point out the obvious. We are passing the string value into the tooltip, so it will never update. I should be using an HTML template here with transclusion so the value stays updated, but that’s outside the scope of this post.

The real issue comes in when you suddenly want to use an ng-model on this input element.

```javascript
<input type='text' tooltip='{{property}}' ng-model='model'>
```

If model was defined on the same scope as property, this would no longer work. Why? Because NgModel is now binding through the isolated scope and it is expecting model to be defined on it. All directives on the same DOM element will share an isolate scope if one is defined on any directive applied. To fix this you would do

```javascript
<input type='text' tooltip='{{property}}' ng-model='$parent.model'>
```

But this is already turning bad. Why should my directive affect other directives? If somebody wanted to use my directive they would have to be aware of this potential issue. It is very unfriendly.

Because of this, I’ve leaned towards completely avoiding using the isolate scope shortcuts to retrieve attribute values. Instead, make use of the following:

```javascript
scope.$eval() // evaluates the expression on the scope and returns the result

$parse() // built in Angular service which can parse an expression that can later be invoked with any scope and custom locals. also gives access to model setters.

scope.$watch() // watches an expression on the scope for changes, provides a callback with new and old values

attrs.$observe() // watches an attribute which contains an interpolated value, provides a callback with the value
```

We can rewrite the directive without isolate scope

```javascript
app.directive("tooltip", function () {
  return {
    link: function (scope, elem, attrs) {
      attrs.$observe("tooltip", function (val) {
        elem.tooltip(val);
      });
    },
  };
});
```

Now our tooltip will update when the interpolated value changes and we no longer need to isolate scope which will inadvertently affect other directives.

So what’s the lesson here? Isolate scope with attribute helpers is useful when building directives that will utilize their own template since they are generally self contained. Outside of this use case, it might be better to avoid using isolate scope.

I will try to get some examples along with my posts to make it easier to understand.
