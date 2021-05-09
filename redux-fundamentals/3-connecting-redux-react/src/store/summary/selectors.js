import { createSelector } from 'reselect';

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

export const selectSubTotal = createSelector([selectItems], (items) =>
  items.reduce((stored, item) => stored + item.price * item.quantity, 0)
);

export const selectTipAmmount = createSelector(
  [selectSubTotal, selectTipPercentage],
  (subTotal, tipPercentage) => subTotal * (tipPercentage / 100)
);

export const selectTotal = createSelector(
  [selectTipAmmount, selectSubTotal],
  (tipAmmount, subTotal) => subTotal + tipAmmount
);
