---
title: Refactoring to a Reducer
repostiory: https://github.com/stevekinney/react-hooks-counter
order: 3
---

Yea, this component is still dumbly simple. But, it's a good place to get started—and then we'll tie it into something a little more real.

There are a bunch of ways that we could do this, but let's start dumbly-simple.

```js
const reducer = (state = 0, action) => {
  if (action === 'INCREMENT') return increment(state);
  if (action === 'DECREMENT') return decrement(state);
  if (action === 'RESET') return 0;
  return state;
};
```

And then in your component:

```js
<button className="w-full" onClick={() => dispatch('DECREMENT')}>
          Decrement
</button>
<button className="w-full" onClick={() => dispatch('RESET')}>
  Reset
</button>
<button className="w-full" onClick={() => dispatch('INCREMENT')}>
  Increment
</button>
```

This isn't much different than what we had with `useState`, but this also gives us the groundwork for some interesting ideas.
