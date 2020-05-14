---
title: 'Angular and Slim'
date: '2013-12-10T00:00:00.000Z'
---

# Angular and Slim

Another layer of abstraction? Why not. In comes Slim, a lightweight
templating engine.

http://slim-lang.com/

Slim saves you a bit of hassle when you’re writing HTML. IDs and classes
are much easier to identify and assign, attributes are defined
identically to HTML, no more closing tags, and a lot of miscellaneous
utility.

```markup
#item-ctn
  .list-item ng-repeat='i in items'
    h1() {{i.name}}
    span.timestamp() {{i.timestamp}}
```

vs

```html
<div id="item-ctn">
  <div class="list-item" ng-repeat="i in items">
    <h1>{{i.name}}</h1>
    <span class="timestamp">{{i.timestamp}}</span>
  </div>
</div>
```

If you use grunt for your build workflow this task will come in handy.

https://github.com/matsumos/grunt-slim