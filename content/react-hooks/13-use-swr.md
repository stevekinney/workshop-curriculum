---
title: Stale While Revalidate
repostiory: https://github.com/stevekinney/react-hooks-form
order: 12
---

Our friends at [Vercel](https://vercel.com) have a super cool library for making a lot of this easier called [`useSWR`](https://swr.vercel.app/docs/getting-started). SWR stands for `stale-while-revalidate`.

We do need to define a fetcher:

```js
const fetcher = (...args) =>
  fetch(...args).then(async (response) => {
    if (response.ok) {
      return response.json();
    } else {
      const { error } = await response.json();
      throw new Error(error);
    }
  });
```

And then we can replace our `useEffect` with `useSWR`.

```js
const { data, error } = useSWR(toURL(searchTerm), fetcher);
const loading = !data && !error;
```
