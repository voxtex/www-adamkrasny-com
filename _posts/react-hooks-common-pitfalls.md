---
title: "React Hooks - Common Pitfalls"
date: "2020-05-17"
draft: true
---

# React Hooks - Common Pitfalls

Hooks are a powerful new paradigm in React that open up a world of possibilities. I believe they are one of the best things to happen to React in quite a while. Encapsulating and sharing business logic and state in a clean, reusable way? Sign me up.

Unfortunately, as with anything new and powerful, it is also easy for beginners to misuse hooks in ways that make code more difficult to understand. I'm going to do my best to cover a few of the common pitfalls I have personally experienced or seen.


## useEffect

reacting to prop/variable changes (and possibly setting state or side effects!) instead of using callbacks or computing properties ($scope.watch!)

