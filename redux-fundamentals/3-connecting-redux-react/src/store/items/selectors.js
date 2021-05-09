import { createSelector } from 'reselect';

export const getItem = (state) => state.items;
export const propsId = (state, props) => props.uuid;

export const makeSelectItemTotal = () => {
  return createSelector([getItem, propsId], (item, uuid) => {
    const filtered = item.find((item) => item.uuid === uuid);
    //  console.log('ran item price', filtered);
    return filtered.price * filtered.quantity;
  });
};
