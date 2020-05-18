---
title: "Start using ES6"
date: "2015-05-12"
---

# Start using ES6

JavaScript is the unavoidable language that everyone loves to hate. Unnecessary type coercion, lack of proper class constructs, and dynamic function context are just a few things that are, at best, an annoyance and, at worst, can cause hard to find bugs in your code.

What if I told you there was an easy way to fix most of this frustration?

EcmaScript 6 is the new standard that will drive JavaScript engines. The first update to the language since EcmaScript 5 was standardized in 2009, 6 years ago. That’s around the time of iOS 3 and Android 2.0.

https://babeljs.io/ is a tool that lets you transpile your ES6 code into ES5. This gives you access to all the awesome functionality that ES6 introduces. Generators, arrow functions, classes, template strings, destructuring, enhanced object literals, and modules are features that will improve your code and make coding more pleasant.

With node, I’ve found that using the require hook is the way to go. Since ES5 is valid ES6, you can add this to an existing code base and slowly start the migration.

In the browser, a compilation step will be needed before your code has been deployed. You can use the CLI or integrate with your preferred build tool.

Check out the official site for further documentation and STOP handicapping your JavaScript with ES5. Prepare yourself for the future and start enjoying JavaScript again.

https://babeljs.io/docs/using-babel
