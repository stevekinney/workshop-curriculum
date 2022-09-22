---
title: 'Utility Types (Exercise)'
---

We'll start with the following code in [this sandbox](https://codesandbox.io/s/fun-with-utility-types-2lmj2?file=/src/Application.tsx).

## Your Mission

We're going to try two things here.

- We want to make it so that the CurrentUser component accepts all
  of the properties from the `UserModel` except for `accountId`.
- We want the Friend component to read the properties from the
  CurrentUser component and use the same props. (I know it's contrived,
  but see if you can do it without reusing the same type.)
