---
title: Bringing type assertions together
---

Let's say we want to have a type that represents a set of operators.

```ts
type ComparisonOperator =
  | '='
  | '>'
  | '<'
  | '!'
  | '>='
  | '<='
  | '=='
  | '!='
  | '==='
  | '!==';
```

But, what if we were parsing a SQL string and wanted to see if a given chunk of the string was one of these operator?

```ts
const operators = ['=', '>', '<', '!', '>=', '<=', '==', '!=', '===', '!=='];

export const isOperator = (x: unknown): x is ComparisonOperator => {
  if (typeof x !== 'string') return false;
  x = x.toLocaleLowerCase();

  for (const operator of operators) {
    if (x === operator) return true;
  }

  return false;
};
```

The only problem is that we'd have to update two different data structures in order to keep this in sync—the type and the array of the valid operators. ([Sandbox][basic])

[basic]: https://www.typescriptlang.org/play?#code/C4TwDgpgBAwg9gWzAQwE4EsDOcB2B5SVZYOVKAXgCgooAfKAcnIersYD4Wb6GAeLtgwCEAnu2asevCd0bkZgoQp7zljJcwDclSgGNcmYFDiFipTAC5YiFBmz5TJVAG0AuhSjPWTBgBpvnP40fH7eIkEczBF8Ud7yocFKCXLx0RqhrtqUEAAeYKRG+jiGUFgEEEROHgAUOVYArjgA1jhwAO44AJRWOaWY1khoWLjllaQU7FAA3qzoAGZQ1aCQcAu9GoyGGDgA5gydUKgQwPWoOFBzyAA2mBDaNL3kUDkAdCQAMnC61xCfbRUwZC3aqdLI0ObjapFEomCpmMirYyOcwHGY0GjzRaPeRIuFOA5HE5nKDAVD1O6sAC+OhohNO50uNwplM0QA

It would be cool if we could derive the type from what was in the array (or vice versa, but one of them is more possible than the other). The problem is that arrays are mutable and could change over time.

For example, if we looked at `operators`, we'd see that the type is as follows:

```js
const operators: string[];
```

And so we did the following, it would _not_ be super helpful:

```js
type Operator = (typeof operators)[number];
// type Operator = string
```

That's not great. But, what we told TypeScript that `operators` array will never change and is set in stone?

```js
const operators = [
  '=',
  '>',
  '<',
  '!',
  '>=',
  '<=',
  '==',
  '!=',
  '===',
  '!==',
] as const // This is new!;
```

Now, the type of operators is inferred as:

```js
const operators: readonly ["=", ">", "<", "!", ">=", "<=", "==", "!=", "===", "!=="];
```

Which makes our new derived type a little more helpful:

```ts
type Operators = typeof operators[number];
// type Operators = "=" | ">" | "<" | "!" | ">=" | "<=" | "==" | "!=" | "===" | "!=="
```

Now, whenever we add something to the `operators` array, our type is automatically updated.
