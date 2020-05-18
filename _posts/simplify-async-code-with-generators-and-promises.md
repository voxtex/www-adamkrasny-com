---
title: "Simplify async code with generators and promises"
date: "2015-05-13"
---

# Simplify async code with generators and promises

Asynchronous code is a necessary part of life when developing in JavaScript. Why not make it easy on yourself?

Start with promises. They reduce the need for callback functions and practically eliminate nested callbacks. If you aren’t already using them, you should be. My favorite library for promises is [Bluebird](https://github.com/petkaantonov/bluebird)

Then we have generators. They are a new feature introduced in ES6. You can [read more about them here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

Even when using promises, async code can become unwieldy. Take a look at the following code.

```javascript
getUser(id).then(function (user) {
  return getCompany(user.companyId).then(function (company) {
    return getUser(company.ceoId);
  });
});
```

Assume id is already set and that all functions return promises. The code will return the user object for the CEO of the original user’s company. Take a look at that same function using generators and [co](https://github.com/tj/co), a helper library.

```javascript
co(function* () {
  let user = yield getUser(id);
  let company = yield getCompany(user.companyId);
  return yield getUser(company.ceoId);
});
```

Not bad. Generators used with promises gives us code that is nearly identical to async/await. Much easier to follow and read.

If you’re using Bluebird, [coroutines provide the same functionality.](https://github.com/petkaantonov/bluebird/blob/master/API.md#promisecoroutinegeneratorfunction-generatorfunction—function)
