---
title: Getting object keys with `keyof`
---

The `keyof` operator gets the keys from a given object type.

```ts
type Person = {
  firstName: string;
  lastName: string;
};

type PersonKeys = keyof Person; // 'firstName' | 'lastName'

const first: PersonKeys = 'firstName';
const last: PersonKeys = 'lastName';
```

## Quick exercise

[Using this sandbox][exercise], can you address the error? If TypeScript could be confident that `key` was in a `Person` object, then it would be okay with this code.

```ts
const get = (person: Person, key: string): string => {
  return person[key];
};
```

You can peek at a solution [here][solution].

[exercise]: https://www.typescriptlang.org/play?ssl=13&ssc=2&pln=11&pc=1#code/C4TwDgpgBAChBOBnA9gOygXigbwFBQKgDMBLJYAOQEMBbCALikWHhNQHMBufQgGyubU6jZqw7cAvrlyhIsBClQBpCCESYoAa1XIi8pGm64AxmmbEyzRnAPLV6rAHJS5IREfdTqc-yv7FKmoajr6UtO5GXubsEMAaABSQttYKaAA0WqoiLGzsAJTZYuyYAHw4PATwsQCu8OhJigDa2iAAupJAA
[solution]: https://www.typescriptlang.org/play?#code/C4TwDgpgBAChBOBnA9gOygXigbwFBQKgDMBLJYAOQEMBbCALikWHhNQHMBufQgGyubU6jZqw7cAvrlyhIsBClQBpCCESYoAa1XIi8pGm64AxmmbEyzRnAPLV6rAHJS5IREfdTqc-yv7FKmoajr6UtO5GXubsEMAaABSQttYKaAA0WqqM2iC6-mgAlCIsbOyYAHw4PATwsQCu8OhJigDaOQC6kkA

## Using generics

We can make this even better by using generics.

```ts
const get = <T>(obj: T, key: keyof T) => {
  return obj[key];
};
```

The only issue is that TypeScript isn't totally sure of the return type.

```ts
const person: Person = {
  firstName: 'John',
  lastName: 'Frusciante',
  age: 52,
};

const age = get(person, 'age');
// const age: string | number
```

That's not great. But, we can help TypeScript reason about this. Here is [an example in a sandbox][example].

```ts
const get = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const person: Person = {
  firstName: 'John',
  lastName: 'Frusciante',
  age: 52,
};

const age = get(person, 'age');
```

[example]: https://www.typescriptlang.org/play?ssl=22&ssc=32&pln=12&pc=1#code/C4TwDgpgBAChBOBnA9gOygXigbwFBQKgDMBLJYAOQEMBbCALikWHhNQHMBufQgGyubU6jZqw7dCUKuwZRUAVxoAjBNwC+uXKEiwEKVAGkIIRJigBrY8iK6kabrgDGaZsTLNGcO4eOmsAclJyIQh-bmdUV34PW30jEzN-aMpaUIcI1xlgMwAeABUAGigDKAgAD2AIVAATU0sQayg8gD4ACmQlACtGQotjRgMASh6AbQMAXQIMZpweAngIYHl4dA7Okfrx9U0M7MhvTz00MzxJIMFUxn8AKWQAC1R-ArmoZJCrgDF4eURHEipUJUni9pLIAKwAJlwGicLmyoLMWVa+30RX8oP8g04QA

## Working with arrays

In JavaScript, arrays are just object withs numbers as keys. So, our previous function will work just fine:

```ts
const numbers = [1, 2, 3];

const number = get(numbers, 1);
// const number: number
```
