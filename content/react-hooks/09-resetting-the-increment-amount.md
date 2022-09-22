---
title: Solution, Resetting the Increment Amount
repostiory: https://github.com/stevekinney/react-hooks-counter
order: 8
---

You basically have two options here.

You could reset both:

```js
if (action.type === "RESET") {
  return { ...state, count: 0, incrementBy: 1 };
}
```

Or you could just use that handy `defaultState` object we had:

```js
if (action.type === "RESET") {
  return defaultState;
}
```
