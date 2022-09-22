---
title: Utility Types (Solution)
---

You can find the solution [here](https://codesandbox.io/s/fun-with-utility-types-solution-x0i28?file=/src/Application.tsx).

## Solution

We can start by making a type that omits `accountId`.

```ts
type UserProps = Omit<UserModel, 'accountId'>;
```

If we hover over it, we'll see:

```ts
type UserProps = {
  displayName: string;
  isVerified: boolean;
};
```

Boom. That did the trick. Alternatively, we could do something like this:

```ts
type AlternateUserProps = Pick<UserModel, 'displayName' | 'isVerified'>;
```

Same result.

### Copying Props

We can create a type for props out of the prop type of another component—even if we don't have direct access to the type itself.

```tsx
React.ComponentProps<typeof CurrentUser>;
```

[completed]: https://codesandbox.io/s/fun-with-utility-types-solution-x0i28?file=/src/Application.tsx

## Where Are We Now?

- `examples/30-utility-types-solution`
- `projects/utility-types-exercise` on the `utility-types-solution` branch
- [CodeSandbox][completed]
