---
title: Solution, Setting the Count Manually
repostiory: https://github.com/stevekinney/react-hooks-counter
order: 9
---

Your solution might look something like this:

```jsx
import { useState } from 'react';

const SetToValue = ({ dispatch }) => {
  const [newCount, setNewCount] = useState(0);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: 'SET_COUNT',
          payload: newCount,
        });
      }}
      className="flex flex-col gap-2"
    >
      <div className="flex gap-2 items-center justify-center">
        <label htmlFor="set-count" className="whitespace-nowrap">
          Set To
        </label>
        <input
          id="set-count"
          className="w-full"
          type="number"
          placeholder="Value"
          value={newCount}
          onChange={(e) => setNewCount(e.target.value)}
        />
      </div>
      <button className="w-full">Submit</button>
    </form>
  );
};

export default SetToValue;
```
