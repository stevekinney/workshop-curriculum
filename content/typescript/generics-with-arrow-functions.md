---
title: Generics with Arrow Functions
---

## Use With Arrow Functions

You need a weird comma.

```ts
const createNode = <T>(value: T): Link<T> => ({ value });

const addNext = <T>(node: Link<T>, value: T): Link<T> => {
  node.next = createNode(value);
  return node;
};

const createNodeAndNext = <T>(first: T, second: T) => {
  const firstNode = createNode(first);
  firstNode.next = createNode(second);
  return firstNode;
};

const createNodeAndNextTapped = <T>(first: T, second: T): Link<T> =>
  tap(createNode(first), (node) => addNext(node, second));

const node = createNode(4);
const nextNode = addNext(node, 5);
const twoNodes = createNodeAndNextTapped(1, 2);
const twoMoreNodes = createNodeAndNext(4, 5);
```
