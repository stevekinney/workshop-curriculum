---
title: Functions Exercise
---

Can you add type annotations to the following JavaScript:

```js
type Quadrilateral = {
  width: number,
  height: number,
};

const createQuad = (width, height) => {
  return {
    width,
    height,
  };
};

const getArea = ({ width, height }) => width * height;

const createSquareFromArea = (area: number) => {
  const side = Math.sqrt(area);
  return {
    width: Math.sqrt(area),
    height: Math.sqrt(area),
  };
};
```

You can see a possible solution [here](https://www.typescriptlang.org/play?ssl=20&ssc=2&pln=1&pc=1#code/C4TwDgpgBAigrgQwCYCcCWAbBwIoRqAXigG8AoKSqAdzSWAAsAuKAOzgFsAjXAbgqoMIaAOYNgLdtz5kAvmTIBjAPasAzsCiKUEbBHjIiUABS16zNpx4oANFCGjxkq7gCULA6kx68BQgD5SAUodYDgUViCqaJo6RhtgmIcxYET5eSVVDSgRCGAAQR0EI2MSWPM7ZPEoWQ9ELywcX3dLaRQiQLNGKAAqe2EU-kz1TW1dHABlAEdEHQAxFGUOQt0ShCLnNpbPdEbcfA6oqlDwyPIYqi6LAFlsBgA6NSmUYGN13VcEi8oqiShbxiPZ6vd4IVxpORAA).
