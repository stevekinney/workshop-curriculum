---
title: Rethinking Our Actions
repostiory: https://github.com/stevekinney/react-hooks-counter
order: 5
---

`INCREMENT`, `DECREMENT`, and `RESET` didn't require any additional information. So, we just cheated by using strings for the action names. But, when we want to set the amount that we should be incrementing and decrementing by, we're probably going to need to tell it _what_ we want to set that value you to. That's where that `payload` property comes in handy.

But, it'd be wierd (and annoying) to have strings for some kinds of actions and objects for the rest. So, let's just do this. Let's grow up and refactor our code accordingly.

We could do something like this:

```js
<button onClick={() => dispatch({ type: 'DECREMENT' })}>
  Decrement
</button>
<button onClick={() => dispatch({ type: 'RESET' })}>
  Reset
</button>
<button onClick={() => dispatch({ type: 'INCREMENT' })}>
  Increment
</button>
```

And then we could update our reducer accordingly:

```js
const reducer = (state = defaultState, action) => {
  if (action.type === 'INCREMENT') {
    return { ...state, count: state.count + state.incrementAmount };
  }

  if (action.type === 'DECREMENT') {
    return { ...state, count: state.count - state.incrementAmount };
  }

  if (action.type === 'RESET') {
    return { ...state, count: 0 };
  }

  return state;
};
```

**TL;DR**: We're just replacing those strings with objects where the string is now the value of the `type` property.
