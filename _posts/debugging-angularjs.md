---
title: "Debugging AngularJS"
date: "2015-10-12"
---

# Debugging AngularJS

Knowing how to debug your code is just as important as writing it.

The most obvious way to debug code is to use `debugger` statements in your JavaScript or just breakpoints through Chrome developer tools (or your favorite browser). This works great for fixing code that is executed in a controller, filter, or directive. The bigger problem is view logic that may not be in a controller or simply debugging why certain things aren’t working properly on the view.

One neat trick is to make use of `angular.element`. Check out the docs

[Angular Element](http://docs.angularjs.org/api/angular.element)

```javascript
angular.element()
```

An alias for jQuery, if it is available, otherwise it will use an angular specific jQuery lite implementation. Refer to the documentation for specific DOM functions available through jqLite because they can differ from jQuery quite a bit.

More importantly, check out the extended functions angular provides:

```javascript
controller(name)
```

Will retrieve the controller being used on this element. If no name is provided, it will be the controller specified by ngController, otherwise you can also retrieve a directive specific controller, such as ngModel.

```javascript
scope()
```

Retrieve the scope of the current element.

```javascript
inheritedData() || injector()
```

Are available as well. I don’t find myself using them often, but they
can be useful.

Let’s say you wanted to find the scope of an element with id ‘action-container’. Type something like this into the console.

```javascript
angular.element("#action-container").scope()
```

All of this stuff is great to know, but really I would recommend just downloading this Chrome extension

[AngularJS Batarang](https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk?hl=en)

If you open up the developer tools you will have an extra AngularJS tab. Explore the scope or view dependencies. You can even check performance!

Better yet, go to the standard elements tab. Click on any DOM element that is visible in the tree. On the right-hand side you see Computed Styles, CSS Rules, Breakpoints, etc. If you scroll all the way down you have an extra category ‘AngularJS Properties’. This will show you all properties on the scope of the selected element.
