---
title: Using Reducers
repostiory: https://github.com/stevekinney/react-hooks-counter
order: 2
---

`useState` is really just an abstraction around `useReducer`. If you've used Redux before, then a lot of this will sound pretty familiar. You have roughly three concepts that you need to wrap your head around.

- `state` can be any JavaScript value (string, number, object, array, etc).
- An `action` is a thing that happened. It's _usually_ a JavaScript object. But, I guess it doesn't have to be. But, it totally should be. Don't innovate here. No one needs it.
- A `reducer` is a JavaScript function that takes the current state of thw world and an action. It returns what the state should look like in light of whatever that new action that occured was.

### What do actions look like?

There are technically no rules, but the civilized among us tend to structure them as follows:

```js
const action = {
  type: "INCREMENT", // The name of the thing that happened.
  payload: 2, // Anything else we need to know to do our jobs.
};
```

### What does a reducer look like?

And then your reducer, might look something like this:

```js
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + action.payload;
  }

  return state;
};
```

You know what's super cool about all of this? It's just JavaScript. This means that you can test it super easily.
