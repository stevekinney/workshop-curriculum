---
title: Reducers with Multiple Values
repostiory: https://github.com/stevekinney/react-hooks-counter
order: 4
---

`useReducer` becomes a little more interesting when you need to juggle multiple values in order to figure out what to do. So, let's get that `IncrementBy` component working.

**Steve's Rule That No One Asked For**: The moment you find yourself using more than two `useStates` or writing weird functions thate are juggling more than one piece of state, then it's probably time to look at `useReducer`.

Now we have to things we need to keep track of:

- The current `count`
- How much we should `incrementBy` when incrementing or decrementing.

As such, the state in our reducer might look like this:

```js
const defaultState = {
  count: 0,
  incrementAmount: 1,
};
```

And we could start by doing something like this:

```js
const defaultState = {
  count: 0,
  incrementAmount: 1,
};

const reducer = (state = defaultState, action) => {
  if (action === "INCREMENT") {
    return { ...state, count: state.count + state.incrementAmount };
  }

  if (action === "DECREMENT") {
    return { ...state, count: state.count - state.incrementAmount };
  }

  if (action === "RESET") {
    return { ...state, count: 0 };
  }

  return state;
};

export const Application = () => {
  const [{ count, incrementAmount }, dispatch] = useReducer(
    reducer,
    defaultState
  );

  return (
    <main className="m-auto mx-8 my-8 flex flex-col gap-4 border-8 border-pink-300 p-4">
      {/* Omitted for brevity… */}
      <IncrementBy amount={incrementAmount} />
      <SetToValue />
    </main>
  );
};
```

This should basically have the same effect as our previous iteraction, but we're setting ourselves up for great things.
