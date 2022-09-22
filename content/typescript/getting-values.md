---
title: Getting Values
---

We saw that we can get all of the keys of a type using `keyof`.

```ts
const executionStatuses = {
  Running: 'Running',
  TimedOut: 'Timed Out',
  Completed: 'Completed',
  Failed: 'Failed',
  ContinuedAsNew: 'Continued As New',
  Canceled: 'Canceled',
  Terminated: 'Terminated',
} as const;

type statusKey = keyof typeof executionStatuses;
```

What if we wanted to find all of the human-readable values?

```ts
type humanReadableKey = typeof executionStatuses[statusKeys];
```

This becomes:

```ts
type humanReadableKey =
  | 'Running'
  | 'Timed Out'
  | 'Completed'
  | 'Failed'
  | 'Continued As New'
  | 'Canceled'
  | 'Terminated';
```

Now, we get an accurately typed function with very little work on our part:

```js
const executionStatuses = {
  Running: 'Running',
  TimedOut: 'Timed Out',
  Completed: 'Completed',
  Failed: 'Failed',
  ContinuedAsNew: 'Continued As New',
  Canceled: 'Canceled',
  Terminated: 'Terminated',
} as const;

type statusKey = keyof typeof executionStatuses;
type humanReadableKey = (typeof executionStatuses)[statusKey];

const getLabelForStatus = (status: statusKey): humanReadableKey => {
    return executionStatuses[status]
}
```

Here is [a sandbox][completed] for the completed example.

[completed]: https://www.typescriptlang.org/play?#code/MYewdgzgLgBApgDzsArlAluAylAhlFCOCGAXhgG8AoGGAJRTDHTAHMAuGAcgaZda4AaGjAAq6ALZwAJgHk0nLuKnSY8qEJEBhEBIAOAGzhQZinfqMnpm2gDFc6I9MX3HMmzB1gMYFDICCEABycADuZuA+fqqBMCGhHlq4YMBwTmbJqU4eonAAThIs+KbcuQVFVpoAvjC4JKCQUADcVFRQAJ56cDDQ+IQA0nDtZDAA1kMgAGYwHV1T8EioGNh4BEQQLbPdABYoEsl0cLjSuABGRoPD5AAUW-OIyGiYYDh96wCUANq9a5cAui0qA1oDBWMYADJnNK2EB5V5rEbXH6ETjIiCXd6cXb7MCHY5nC5DMgAPkoIloeWMKDyYAWj2WL1WhGI3yZED+VCqQA
