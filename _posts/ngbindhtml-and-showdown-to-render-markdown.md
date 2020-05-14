---
title: 'ngBindHtml and Showdown to render markdown'
date: '2013-10-25T00:00:00.000Z'
---

# ngBindHtml and Showdown to Render Markdown

An easy way to store formatted text content without having to worry about storing HTML is by using Markdown. Markdown allows you to add headers, links, code blocks, and all other necessary formatting to a string without using any kind of special characters.

[Markdown](https://en.wikipedia.org/wiki/Markdown)

This kind of content is easily stored in a database as a string. Retrieving it is a breeze as well. So what’s left? Rendering it on the client.

[Showdown](https://github.com/coreyti/showdown)

Showdown is a Markdown parser (is that what it’s called?). It can take a
Markdown string and process it into an HTML string. We can assign the
value on our controller since we need to mark it as trusted first.

```javascript
$scope.markdownHtml = $sce.trustAsHtml(new Showdown.converter().makeHtml(md);
```

A few important points in this code sample.

```javascript
new Showdown.converter().makeHtml() // This will take your Markdown string and return an HTML string.

$sce // A service that provides Strict Contextual Escaping.
```

Read more about it in the API.

[$sce](http://docs.angularjs.org/api/ng.%24sce)

We need to utilize $sce to let Angular know that the HTML string we are binding to the view is safe. By calling `trustAsHtml` we are saying that we know the string is sanitized and it is safe to render.

Now we can easily bind to the view

```markup
div ng-bind-html='markdownHtml'
```

markdownHtml is the string value on the scope.