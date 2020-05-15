---
title: "$event, where does it come from?"
date: "2013-09-29T00:00:00.000Z"
---

# $event, where does it come from?

ngClick, ngMousedown, ngMouseup, and every directive event handler in Angular provide the $event parameter in callbacks. I will show you how to do this with your own directives.

Angular provides an extremely useful service known as $parse. Take a look at the documentation here:

[ngParse](http://docs.angularjs.org/api/ng.%24parse)

So it looks like we can take any Angular expression, convert it to a function, and invoke it in the context of a specific scope and using locals we define. Perfect. Let’s see how we can utilize this when creating a directive for drag and drop.

```javascript
app.directive("drag", [
  "$parse",
  function ($parse) {
    return function (scope, elem, attrs) {
      var cb = $parse(attrs.drag);

      elem.on("dragstart", function (e) {
        scope.$apply(function () {
          cb(scope, { $event: e });
        });
      });
    };
  },
]);
```

Couple of things to note. I protected against minification by using the array syntax to import the $parse service into my directive. This code is integrating with jQuery (notice elem.on).

Otherwise this code is really straightforward. We use $parse to parse the drag attribute on the element. In our case the HTML might look something like this:

```javascript
<div drag="onDrag($event)">Drag Me!</div>
```

Since the drag attribute is a function the result of the $parse call will be a function that can be invoked with a scope and optional locals. In our case we are invoking it with the scope of the directive and we are then supplying a custom local which is the event arguments from the event invocation.

Finally, we probably want to wrap the callback in a `scope.$apply`. While I won’t get into this too much it will essentially run the code within an Angular digest cycle which allows Angular to do it’s thing (model watches, etc.)

So our event handler would look like this

```javascript
$scope.onDrag = function (e) {
  // Do something here!
};
```

And you’re done!
