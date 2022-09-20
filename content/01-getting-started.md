---
title: Getting Started
repostiory: https://github.com/stevekinney/react-hooks-counter
order: 0
---

## Getting set up

We're going to use the following repositories. You might want to download them and install the dependencies now.

- [react-hooks-counter](https://github.com/stevekinney/react-hooks-counter)
- [react-hooks-form](https://github.com/stevekinney/react-hooks-form)
- [react-hooks-autocomplete](https://github.com/stevekinney/react-hooks-autocomplete)
- [react-hooks-todo](https://github.com/stevekinney/react-hooks-todo)

### Create a CodeSandbox account

You _should_ be able to just log in with your Github account, but just in case—take a moment to set up an account with [CodeSandbox](https://codesandbox.io).

## The basics

Right now, this application doesn't really do anything. There is a hard-coded `count` and everything else is static.

Let's look at `application.jsx` and get it wired up with some basic state management.

Some quick notes:

- `IncrementBy` and `SetToValue` are broken out right now because I don't want to look at them right now. We'll look at them later.
- None of the buttons are wired up to do anything. There isn't even any state management in place.

### Implementing some basic state with `useState`

The first step is to swap out that hard-coded `count` with some state.

```jsx
const [count, setCount] = useState(0);
```

The reason that we return an array here is because we want to be able to have control over what we name these two things: the current value of the state and a function that lets us update it. We're going to call them `count` and `setCount`, respectively.

Now, theoretically, we've updated the component to use `count` as a value we're storing in state, but with no real way to update it, it doesn't _really_ matter.

We can update them as follows:

```jsx
<button className="w-full" onClick={() => setCount(count - 1)}>
  Decrement
</button>
<button className="w-full" onClick={() => setCount(0)}>
  Reset
</button>
<button className="w-full" onClick={() => setCount(count + 1)}>
  Increment
</button>
```

That works about as well as we might expect. We've haven't exactly blazed any new trails here, but at the very least, we got our sea legs.
