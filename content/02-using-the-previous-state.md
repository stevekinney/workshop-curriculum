---
title: Using the Previous State
repostiory: https://github.com/stevekinney/react-hooks-counter
order: 1
---

If you use `setCount` and provide it a value, it will update the state to that value. There aren't really any big surprises here. But, since all of this has to happen inside of the component. It could be somewhat difficult to test.

You know what's really easy to test? Regular ol' JavaScript functiuons.

What if we had something like this:

```js
const decrement = (n) => n - 1;
const increment = (n) => n + 1;
```

You could easily test these somewhere.

Your first instinct, might be to do something like this:

```jsx
<button className="w-full" onClick={() => setCount(decrement(count))}>
  Decrement
</button>
```

And, that'll work. But, it's even simpler than that. The updater function that comes out of `useState` can actually take a function and will pass in the previous state to that function.

This means that all of the following are the same:

```jsx
setCount(count + 1);
setCount((n) => n + 1);
setCount(increment);
```

We can update our component as follows:

```jsx
<button className="w-full" onClick={() => setCount(decrement)}>
  Decrement
</button>
<button className="w-full" onClick={() => setCount(0)}>
  Reset
</button>
<button className="w-full" onClick={() => setCount(increment)}>
  Increment
</button>
```

If you wanted to be real fancy, I guess you could create `reset` function, but that seems like a bit much—even for this contrived example.
