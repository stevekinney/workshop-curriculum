---
title: Custom types using "is" and "as"
sandbox: https://www.typescriptlang.org/play?ssl=22&ssc=21&pln=20&pc=1#code/C4TwDgpgBAEhAeBhA9gG2QJygXigOwgDcIMBuAKHIGNk8BnYKOiYAIQEMqBrAcw2QCueACY4oAChroMALlgIU0gJQ4AfFADeUAPQAqKAHcAFu2BESUXdqgBfSjXqMjCtJgCi8MBgh06AS1oxbQBicXEAbQAGAFoATnZogDMAQWiAMQBdDQAmGyUNAGYAGgAWGwAfCJj4pNTM-OKypW0KaloGKD86OCRXLFxJPrkGDD88HiU5KUxOunle6TVNcihVzsSJZwX3T29fALwAOjMGQeUVb2ABDDwoYAwBCAo1qEvr28T2VGYKO3JtazMNicXj8ITCcQAcmCkVhkKUrQcHQARqgQWJobDIpDWn4NuIuj1FJhxKiQUoVBoVmsgRxuHxBCJSWjuEpyH8kYxUY8MTDImlIVB2HMiX1WrSQQzwczHgigA
---

## Manually taking control of our own types

Sometimes, we need to programmatically figure out if something is a valid type.

Let's say we _need_ to make sure something is a Hex code. We actually _can't_ do this:

```ts
type Hex =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F';

type HexColor = `#${Hex}${Hex}${Hex}${Hex}${Hex}${Hex}`;
// Expression produces a union type that is too complex to represent.
```

So, we could start out with a value that doesn't ever make sense that we want to have a strong hand in validating ourselves.

```ts
type HexColor = never;

const setBackground = (color: HexColor) => {
  /* whatever */
};

const hexColorExpression = /#(([0-9a-fA-F]{2}){3,4}|([0-9a-fA-F]){3,4})/;

const isHexColor = (color: string): color is HexColor => {
  if (hexColorExpression.test(color)) return true;
  return false;
};

setBackground('#000'); // This will upset TypeScript.

const black = '#000';

if (isHexColor(black)) {
  setBackground(black);
}
```

If you're confident you've created a valid color, you can use `as`.

```ts
const blue = '#00F' as HexColor;

setBackground(blue);
```

## A more practical example (and an exercise)

The time that I find myself using this the most is where I am not in control of the data structure that I'm receiving. Most often, this comes from API requests. What I'll do is create some functions to validate what kind of object that I'm working with.

- Visit [this sandbox][exercise] and see if you can deal with the error.
- This is a [possible solution][solution].

## Real world example

In our code base, we have [a set of utilities][example] to help us figure our what kind of thing we're working with.

[exercise]: https://www.typescriptlang.org/play?ssl=40&ssc=4&pln=1&pc=1#code/C4TwDgpgBAgmCWBRATsg9sqBeKBvAUFEVAM7ACGwAriQPwBcUAdlQLYBGEyA3IcV+mSMyyeEwDmvAL758oSFABCAGzTiACmjIAlCCTBomJaDgLEoBsozPniweMGURhwURN63i7NABMQLt0k+IhkZfABjQzIocQhgADF0Vjh4bChyEhAmcKgACggmHwMxYACxcQBKRnUk+GMAHhSUQSgAHyVVDS1gXX0oiAA+bCGbIlcQPGDbSKNgKGQ9AyMTdIB3cgcoADM48IALfMLipmAKj08oeC28gEIFvuWAOjQAawr5uKpkJkmL2zJKDRGPclsZHgDqCQADRTP4CDDAxb9cEUSEAFQgAA9gLDiDI-jNogArEiGNIg5Ekwy5M64ogLajfKBUpjnEJQcKUfZ5eFCKBUJgvJhoVZMd6jWxXHmoDCXWbkbIQNDXZoYcV02wMr4-CV-cy8xi8x6sPQkcixDXmfEXa2eLVM3UXA1QADkAGU0CbgHtylB2OQfFA9uQwJAmBAfC6NbaoKFeBEonMFoUuGlcpZSh01JodEjlu8sCMpoS0E5Hp1091aWFCUm88Y0rEEkkUrkXQB6DMkdsARgATABmF0VR7egqV6KF37EZM+LgT074KRnIA
[solution]: https://www.typescriptlang.org/play?#code/C4TwDgpgBAgmCWBRATsg9sqBeKBvAUFEVAM7ACGwAriQPwBcUAdlQLYBGEyA3IcV+mSMyyeEwDmvAL758oSFABCAGzTiACmjIAlCCTBomJaDgLEoBsozPniweMGURhwURN63i7NABMQLt0k+IhkZfABjQzIocQhgADF0Vjh4bChyEhAmcKgACggmHwMxYACxcQBKRnUk+GMAHhSUQSgAHyVVDS1gXX0oiAA+bCGbIlcQPGDbSKNgKGQ9AyMTdIB3cgcoADM48IALfMLipmAKj08oeC28gEIFvuWAOjQAawr5uKpkJkmL2zJKDRGPclsZHgDqCQADRTP4CDDAxb9cEUSEAFQgAA9gLDiDI-jNogArEiGNIg5Ekwy5M64ogLajfKBUpjnEJQcKUfZ5eFCKBUJgvJhoVZMd6jWxXHmoDCXWbkbIQNDXZoYcV02wMr4-CV-cy8xi8x6sPQkcixDXmfEXa2eLVM3UXA1QADkAGU0CbgHtylB2OQfFA9uQwJAmBAfC6NbaoKFeBEonMFoUuGlcpZSh01JodEjlu8sCMpoS0E5Hp1091aWFCXM6ips900xTloxdJFkD56gqQFD0kwQAMqh8HsZLiQs11c6OTEXzFLcnc88Z3vafltyMpjGzLtdcvIldcW2OblgcC60OwiRBwsAXavPkyN1uIDuF0uZ48Mw-GevN9upjXKBXCoV98BrRMR1BFZYgSJIUlyF0AHoMxIJCAEYACYAGZ70eb0CkraJC1+YgF3rToc2AIjTgfFNkBoipwLOIA
[example]: https://github.com/temporalio/ui/blob/main/src/lib/utilities/is.ts
