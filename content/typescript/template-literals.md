---
title: Type Template Literals
---

Start with [this sandbox](https://www.typescriptlang.org/play?jsx=1&ssl=14&ssc=1&pln=15&pc=1#code/C4TwDgpgBAwgFgQwE4IMbAkmAbBBnPKAXigHIB3ZJAeyVKgB8ywFcATASwDt6mKOAXsja8yqbJg6pSAbgBQc0JCgAZBOXgJqhEqVzkAZgFdso0lwhHgKU4zGJqwKbMXhoAcWrU2AUQBuHNjEZADmXiJ25pbWrGYQAabyrsqaKOiYwQDeclBQXAgAthAAXFB41twh8rlgNAYQBBzUXKWpaBhYuATVUKwcIVxFXMCl5UiVMlAA9FNQAOrQlMNQwNRQqIgh0MBwHHgAhHIAvgqozeVlGH4lsIhpHVk5eYU3pADKVxCkADRPtdT1RrNUr8IRIES-XJ9AZDEb2LROVAAWjC3h+xxkQA).

## Initial State

```ts
type CharacterClass = 'warror' | 'paladin' | 'wizard' | 'cleric';

type LawChaos = 'lawful' | 'neutral' | 'chaotic';
type GoodEvil = 'good' | 'neutral' | 'evil';

type Character = {
  name: string;
  profession: CharacterClass;
  alignment: string; // We want to chage this!
};

const steve: Character = {
  name: 'Steve',
  profession: 'wizard',
  alignment: 'chaotic-good',
};
```

## Solution

```ts
type CharacterClass = 'warror' | 'paladin' | 'wizard' | 'cleric';

type LawChaos = 'lawful' | 'neutral' | 'chaotic';
type GoodEvil = 'good' | 'neutral' | 'evil';

type Alignment = `${LawChaos}-${GoodEvil}`;

type Character = {
  name: string;
  profession: CharacterClass;
  alignment: Alignment;
};

const steve: Character = {
  name: 'Steve',
  profession: 'wizard',
  alignment: 'chaotic-good',
};
```

