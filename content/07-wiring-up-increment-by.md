---
title: Wiring Up Increment By
repostiory: https://github.com/stevekinney/react-hooks-counter
order: 6
---

We can add thhe following logic to our reducer:

```js
if (action.type === 'SET_INCREMENT_AMOUNT') {
  return { ...state, incrementAmount: Number(action.payload) };
}
```

And it'll definitely do the trick if we send it an action that looks something like this:

```js
dispatch({
  type: 'SET_INCREMENT_AMOUNT',
  payload: 5,
});
```

Let's take the easy road and hand `IncrementBy` a reference to `dispatch` for now.

```js
<IncrementBy amount={incrementAmount} dispatch={dispatch} />
```

In `components/increment-by`, we'll do the following:

```js
const IncrementBy = ({ amount, dispatch }) => {
  return (
    <section className="flex gap-2 items-center justify-center">
      <label className="whitespace-nowrap" htmlFor="increment-by">
        Increment By
      </label>
      <input
        id="increment-by"
        className="w-full"
        type="number"
        placeholder="Increment by…"
        value={amount}
        onChange={(event) => {
          /* 👀 LOOK HERE 👀 */
          dispatch({
            type: 'SET_INCREMENT_AMOUNT',
            payload: event.target.value,
          });
        }}
      />
    </section>
  );
};
```

And it should work as expected. Albeit, it could use some refactoring.
