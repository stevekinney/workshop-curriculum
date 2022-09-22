---
title: Fetching from an API
repostiory: https://github.com/stevekinney/react-hooks-autocomplete
order: 11
---

`useEffect` is typically used for side effects—hence the time. The most common side effect is fetching data from an API.

One way that we could do that would be as follows:

```js
useEffect(() => {
  fetch(toURL(searchTerm))
    .then(async (response) => {
      if (response.ok) {
        const { pokemon } = await response.json();
        return setPokemon(pokemon);
      } else {
        const { error } = await response.json();
        return setError(error);
      }
    })
    .catch((error) => setError(JSON.stringify(error)));
}, [searchTerm, setError, setPokemon]);
```
