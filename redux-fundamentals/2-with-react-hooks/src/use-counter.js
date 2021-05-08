import { useActions } from './use-actions';
import { set, increment, decrement } from './action';
import { useSelector } from 'react-redux';

export const useCounter = () => {
  const actions = useActions({ set, increment, decrement });

  const count = useSelector((state) => state.count);

  return [count, actions];
};
