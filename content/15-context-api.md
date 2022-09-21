---
title: Context API
repostiory: https://github.com/stevekinney/react-hooks-form
order: 14
---

The Context API makes it easier to work with deeply nested props.

It revolves around using two different APIs.

- `useContext`
- `createContext`

We can start by creating a context:

```js
const ItemsContext = createContext([]);
```

`ItemsContext` has two different components. One of which we'll use implicitly and one that we'll use explicitly:

- `ItemsContext.Consumer`
- `ItemsContext.Provider`

By default the `Provider` will pass it's value down any child components. This is _kind of_ what we want. We also want to be able to modify that state—just like we've been doing. So, we need to make our own abstraction.

We can move all of our functionality in here as well:

```js
const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([
    { id: 1, name: 'iPod', packed: false },
    { id: 2, name: 'MacBook', packed: true },
    { id: 3, name: 'Paper Map', packed: false },
    { id: 4, name: 'Socks', packed: false },
  ]);

  const packedItems = items.filter((item) => {
    return item.packed;
  });

  const unpackedItems = items.filter((item) => {
    return !item.packed;
  });

  const addItem = (name) => {
    setItems((items) => [...items, { id: Date.now(), name, packed: false }]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) => {
        if (item.id !== id) return item;
        return { ...item, packed: !item.packed };
      }),
    );
  };

  return (
    <ItemsContext.Provider
      value={{
        packedItems,
        unpackedItems,
        addItem,
        removeItem,
        toggleItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
```

Notice how we're hiding stuff that isn't directly used (e.g. `items`, `setItems`).

We can now wrap it around our component in `index.js`:

```js
root.render(
  <React.StrictMode>
    <ItemsProvider>
      <Application />
    </ItemsProvider>
  </React.StrictMode>,
);
```

## Removing stuff we don't need

`application.jsx` now can pull in just what it needs:

```js
import { createContext, useContext, useState } from 'react';
import AddNewItem from './components/add-new-item';
import { ItemsContext } from './components/context';
import Items from './components/items';

export const Application = () => {
  const { packedItems, unpackedItems } = useContext(ItemsContext);

  return (
    <main className="flex flex-col mx-8 md:mx-auto my-8 gap-8 w-full lg:max-w-4xl items-start">
      <section className="border-8 border-pink-300 p-4 flex flex-col gap-8 shadow-pink-800 shadow-lg bg-white w-full">
        <AddNewItem />
      </section>
      <section className="border-8 border-pink-300 p-4 flex flex-col gap-8 shadow-pink-800 shadow-lg bg-white w-full">
        <Items items={unpackedItems} title="Unpacked Items" />
      </section>
      <section className="border-8 border-pink-300 p-4 flex flex-col gap-8 shadow-pink-800 shadow-lg bg-white w-full">
        <Items items={packedItems} title="Packed Items" />
      </section>
    </main>
  );
};

export default Application;
```

We can remove passing down the functions in `items.jsx` all together:

```js
export default ({ title, items = [] }) => {
  const [filter, setFilter] = useState('');

  const visibleItems = items.filter((item) =>
    item.name.toLowerCase().startsWith(filter.toLowerCase()),
  );

  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <input
          id="add-new-item"
          className="w-full"
          type="text"
          value={filter}
          placeholder="Filter…"
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>

      <h2 className="font-bold text-2xl">{title}</h2>
      <ul>
        {visibleItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};
```

`item.jsx` is similarly simplified:

```js
import { useContext } from 'react';
import { ItemsContext } from './context';

export default ({ name, packed, id }) => {
  const { toggleItem, removeItem } = useContext(ItemsContext);

  return (
    <li className="flex items-center gap-2 mb-2">
      <input
        type="checkbox"
        checked={packed}
        id={`item-${id}`}
        onChange={() => toggleItem(id)}
      />
      <label htmlFor={`item-${id}`}>{name}</label>
      <button className="small secondary" onClick={() => removeItem(id)}>
        Remove
      </button>
    </li>
  );
};
```

As is `add-new-items.jsx`:

```js
export default ({ onSubmit: handleSubmit }) => {
  const [value, setValue] = useState('');
  const { addItem } = useContext(ItemsContext);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addItem(value);
      }}
      className="flex flex-col gap-8"
    >
      <div className="flex gap-4 items-center">
        <label htmlFor="add-new-item" className="whitespace-nowrap">
          Add New Item
        </label>
        <input
          id="add-new-item"
          className="w-full"
          type="text"
          value={value}
          placeholder="New item…"
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div className="flex gap-4">
        <button className="w-full" disabled={!value}>
          Submit
        </button>
        <button
          className="secondary w-full"
          onClick={() => setValue('')}
          disabled={!value}
        >
          Clear
        </button>
      </div>
    </form>
  );
};
```
