import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from './action';

export const SetCounter = () => {
  const countFromStore = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const [count, setCount] = useState(countFromStore);

  useEffect(() => {
    setCount(countFromStore);
  }, [countFromStore]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(count));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
