---
title: Functions
sandbox: https://www.typescriptlang.org/play?#code/C4TwDgpgBAsghsAFgMQK4DsDGwCWB7dKAXigAo4AuKdVAWwCMIAnAGinqpoeYEpiA+anUZMA3AChxmAgGdgUOABNFVeEjRZcBYmQAebEHyKDdUANRQQE6ejlQZqesCZxsqhCgzZ8hEqX2WRiZQALSW1rLyijgAbjiKEO7qXlq+UABmKT56BnwA3lBMEMCoTISmAPSWUAC+ElKRULSoADa4YC0gOuScwsxsHELcTDy9w1AVAFRQACqIODJQC1BI0EUlZSvgEAB0UJNVxgr77PU2dhC6YAQQ6PJ+lEMiA2MiQbAeO9cA7uQDPGdGg5aN0dmCuCIZK9mABtAC6oyezAEUDy4igGMKxVKhAhzBkOyKilQmAgpD+7HecHMlIkdUk53kwIAggBzOA4NKkdI4JhyaGsKBgnZ4vkC+GI0UotGYrEbXF9PmEiDE0nkuD-FHUiz0Ng8vnAAHiekNWzyIqQBDdGJwFqoRL2Zyc1lQAA+SMFuFoEChHsRciYzul6Mx6xxUAAyk70KzSDa7RAeMrLcBSF6fUaagzGhaIAgAPJMAAieEcLWgfnj9qoAaD7tFbHTixIACZ-dGXfXFcHZTh0mRQJA8P2qxWiCQAOSiid8MObZptHAdEBx232xs4b0yI2yueEUfJvOppuZ7NmqCKUv0cvWtcO2sxt1+msdp9So4yzF9gfbYdQUfEOOUBToqM5yuGC7tJ0q4JmwbYSLu2KbAeuYIKQ8HGmedjpKWTA6JeZZkhhjJQC0trkWR+FXuWpATmRZEzvUmSaNkeAxMwLR4EoJaETB1bPh6EjMd42hsRxXGKDx15kqOL6BjG7byayQlZKJ7FMJx3HUdAfH3q+XbDIpdYeqiIYYt+aa-iOd6AZO06zkhhCQUu0GjnBO6ho5-53oeaEYVmpoXDgrKIPcUBiRpElSTRAAsRokfQwh0DoEWaZJ2m0YltCMZIg7QAAShAKZwNJABy3YkJ+GKjvm6RUKQ7yighnkpvVTYCu8D7KZh4h5VAAAScAyIVKY6FVWKtQOm4+h1KJdXSWHyJgRQIBAI1HiV5bleMlZ3h1VDrQgm0QNtIg9p58qmbKso1ekDWouByF3qItQsGZ12oce02+qK+SPfuPnAHgUZKQ1vlfVufBZrKWYBSRcDoHgqxMIdYW6VQg3DUVR4bluOhtnJQYfu9e7eQm4Npt9p6BfIPLsToy1Hmt2NHWViqkAArPFjQ8ukoDILEFYKIjyOo9ygvc+eOFMPzuE6AjSOIMwYsTjFOUJUoJWa-LItKyjLOphO9Ca4xQA
---

You have a few options when it comes to adding types to functions. The first way is to declare the signature of a function as a type outside of the function itself.

```ts
type MathFunction = (a: number, b: number) => number;

const add: MathFunction = (x, y) => x + y;
const subtract: MathFunction = (x, y) => x - y;
const divide: MathFunction = function (x, y) {
  return x / y;
};
```

This is obviously useful if you want to re-use the same function signature multiple times. In my personal experience, this happens way less frequently than you might think. Most of the time, I end up just including the type details in the function itself.

```ts
/* ------------------------------------- ⬇️ This is the return type. */
const multiply = (a: number, b: number): number => a * b;
```

Depending on your TypeScript settings, you can even omit the return type and as long as TypeScript can statically analyze your function. It will infer the return type based on your code.

```ts
const exponent = (a: number, b: number) => Math.pow(a, b);
/* TypeScript infers: const exponent: (a: number, b: number) => number */
```

That said, I prefer to be explicit about the return type because—if I am—TypeScript will warn me about mistakes I make in the implementation of my code if I accidentally create a case where I _don't_ return the type that I'm expecting.

### Rest parameters

You can type rest arguments by assuming they're an array.

```ts
const sum = (...numbers: number[]): number => {
  return numbers.reduce((a, b) => a + b);
};
```

The cool part here is that you'll notice that I didn't have to provide any type information on that callback to `reduce`. TypeScript was able to infer it from `numbers`.

You can also combine using rest parameters and regular ol' parameters:

```ts
const sumAgain = (first: number, ...numbers: number[]): number => {
  return numbers.reduce((a, b) => a + b, first);
};
```

## Type guards

Things get a little trickier if it's not easy for TypeScript to infer what's going on.

```ts
const repeat = (value: string | number, times: number): string => {
  return value.repeat(times);
};
```

TypeScript is upset with us because it doesn't know if `value` has a `repeat` method or not.

You have a few options here. You _could_ coerce it into the type you expect.

```ts
const repeat = (value: string | number, times: number): string => {
  return String(value).repeat(times);
};
```

Or, you could check to see if it's one of the types you expect:

```ts
const double = (value: string | number): string => {
  if (typeof value === 'number') return multiply(value, 2).toString();
  return value.repeat(2);
};
```

Since `value` can only be a number or a string and you checked to see if it was a number, TypeScript can deduce that if it's not a number then it's a string.

## Default arguments

If we provide a default argument, then TypeScript will just use that information to infer the type and we can just skip the type annotation completely.

```ts
const repeatOrDouble = (value: string | number, times = 2): string | number => {
  if (typeof value === 'number') return multiply(value, times);
  return value.repeat(times);
};
```

Since `times` is assigned to `2`, TypeScript will assume that it's supposed to be a number and enforce it appropriately.

## Object destructuring

Sometimes, you want to take an object as a parameter and destructure the properties as arguments. This is super common, for example when using React. You often want to take the `props` object and pull out the various props that you're looking for.

You have a few options here. You could do it inline.

```js
const getArea = ({ width, height }: { width: number, height: number }) =>
  width * height;
```

You could define a type:

```js
type Quadrilateral = {
  width: number,
  height: number,
};

const getArea = ({ width, height }: Quadrilateral) => width * height;
```

## A first dip into function overloads

Let's say we have a function where you can take one of a few types and then return one of a few types based on that original type. Sometimes, you're going to need to give TypeScript a little bit of help. For example, let's look at this function:

```ts
const double = (value: string | number): string | number => {
  if (typeof value === 'number') return multiply(value, 2);
  return value.repeat(2);
};

const four = double(4); // const four: string | number
const lala = double('lala'); // const lala = double('lala');
```

But, if we look at that function, it's clear that if we give it a number, then we should get a number; if we give it a string, we should get a string. But, in order for TypeScript to know that, we have to give it additional information:

This is kind of annoying because it means that we would need to disambiguate whether or not this is a string or a number every time we used the value. But, it turns out that we can make our lives a bit easier.

```ts
function overloadDouble(value: number): number;
function overloadDouble(value: string): string;
function overloadDouble(value: string | number): string | number {
  if (typeof value === 'number') return multiply(value, 2);
  return value.repeat(2);
}

// function overloadDouble(value: number): number (+1 overload)
const eight = overloadDouble(4); // const eight: number

// function overloadDouble(value: string): string (+1 overload)
const bumbum = overloadDouble('bum'); // const bumbum: string
```

The catch here is that we _need_ to have a function that can handle every permutation.

## Just matching against what you care about

Here is the thing about checking to see if sometihng is a string before we call `repeat`. We don't _actually_ care if it's a string. What we care about is that it has a `repeat` method before we call that afformentioned `repeat` method. And—yea—strings have a repeat method.

```ts
type RepeatableNumber = {
  valueOf: () => number;
  repeat: (times: number) => string;
};

type HasRepeat = {
  repeat: (times: number) => string;
};

const createRepeatableNumber = (value: number): RepeatableNumber => {
  return {
    valueOf() {
      return value;
    },
    repeat(times: number) {
      return value.toString().repeat(times);
    },
  };
};

const anotherRepeat = (value: HasRepeat, times = 2): string => {
  return value.repeat(times);
};

const five = createRepeatableNumber(5); // const five: RepeatableNumber
const fiftyFive = anotherRepeat(five); // const fiftyFive: string
const fortyFour = anotherRepeat('4'); // const fortyFour: string
const badabada = anotherRepeat('bada'); // const badabada: string
```

Now, we can avoid all of these checks and conditionals. If it has the method we're looking for, then we can use it. TypeScript is willing to be super flexible and work with us.

You can find everything we covered in this section [here](https://www.typescriptlang.org/play?#code/C4TwDgpgBAsghsAFgMQK4DsDGwCWB7dKAXigAo4AuKdVAWwCMIAnAGinqpoeYEpiA+anUZMA3AChxmAgGdgUOABNFVeEjRZcBYmQAebEHyKDdUANRQQE6ejlQZqesCZxsqhCgzZ8hEqX2WRiZQALSW1rLyijgAbjiKEO7qXlq+UABmKT56BnwA3lBMEMCoTISmAPSWUAC+ElKRULSoADa4YC0gOuScwsxsHELcTDy9w1AVAFRQACqIODJQC1BI0EUlZSvgEAB0UJNVxgr77PU2dhC6YAQQ6PJ+lEMiA2MiQbAeO9cA7uQDPGdGg5aN0dmCuCIZK9mABtAC6oyezAEUDy4igGMKxVKhAhzBkOyKilQmAgpD+7HecHMlIkdUk53kwIAggBzOA4NKkdI4JhyaGsKBgnZ4vkC+GI0UotGYrEbXF9PmEiDE0nkuD-FHUiz0Ng8vnAAHiekNWzyIqQBDdGJwFqoRL2Zyc1lQAA+SMFuFoEChHsRciYzul6Mx6xxUAAyk70KzSDa7RAeMrLcBSF6fUaagzGhaIAgAPJMAAieEcLWgfnj9qoAaD7tFbHTixIACZ-dGXfXFcHZTh0mRQJA8P2qxWiCQAOSiid8MObZptHAdEBx232xs4b0yI2yueEUfJvOppuZ7NmqCKUv0cvWtcO2sxt1+msdp9So4yzF9gfbYdQUfEOOUBToqM5yuGC7tJ0q4JmwbYSLu2KbAeuYIKQ8HGmedjpKWTA6JeZZkhhjJQC0trkWR+FXuWpATmRZEzvUmSaNkeAxMwLR4EoJaETB1bPh6EjMd42hsRxXGKDx15kqOL6BjG7byayQlZKJ7FMJx3HUdAfH3q+XbDIpdYeqiIYYt+aa-iOd6AZO06zkhhCQUu0GjnBO6ho5-53oeaEYVmpoXDgrKIPcUBiRpElSTRAAsRokfQwh0DoEWaZJ2m0YltCMZIg7QAAShAKZwNJABy3YkJ+GKjvm6RUKQ7yighnkpvVTYCu8D7KZh4h5VAAAScAyIVKY6FVWKtQOm4+h1KJdXSWHyJgRQIBAI1HiV5bleMlZ3h1VDrQgm0QNtIg9p58qmbKso1ekDWouByF3qItQsGZ12oce02+qK+SPfuPnAHgUZKQ1vlfVufBZrKWYBSRcDoHgqxMIdYW6VQg3DUVR4bluOhtnJQYfu9e7eQm4Npt9p6BfIPLsToy1Hmt2NHWViqkAArPFjQ8ukoDILEFYKIjyOo9ygvc+eOFMPzuE6AjSOIMwYsTjFOUJUoJWa-LItKyjLOphO9Ca4xQA).
