import produce from 'immer';
import {
  ITEM_REMOVED,
  NEW_ITEM_ADDED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED
} from './actions';
let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast Barbecue', price: 100, quantity: 1 },
  { uuid: id++, name: 'Vegan Hammer Time!', price: 150, quantity: 2 },
  { uuid: id++, name: 'Tofu  Barbecue', price: 100, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  // if (action.type === NEW_ITEM_ADDED) {
  //   const item = {
  //     uuid: id++,
  //     quantity: 1,
  //     ...action.payload
  //   };

  //   return [...state, item];
  // }

  if (action.type === NEW_ITEM_ADDED) {
    return produce(state, (draftState) => {
      const item = { uuid: id++, quantity: 1, ...action.payload };
      draftState.push(item);
      // console.log('Added', item);
    });
  }

  // if (action.type === ITEM_REMOVED) {
  //   const foundItem = state.reduce(
  //     (stored, current) => {
  //       current.uuid === action.payload.uuid
  //         ? stored[0].push(current)
  //         : stored[1].push(current);
  //       return stored;
  //     },
  //     [[], []]
  //   );
  //   console.log('removed item:', foundItem[0]);
  //   return [...foundItem[1]];
  // }

  if (action.type === ITEM_REMOVED) {
    return produce(state, (draftState) => {
      const foundItemIndex = draftState.findIndex(
        (item) => item.uuid === action.payload.uuid
      );
      draftState.splice(foundItemIndex, 1);
      // console.log('Removed', state[foundItemIndex]);
    });
  }

  // if (action.type === ITEM_PRICE_UPDATED) {
  //   const itemToUpdate = { ...action.payload };
  //   return state.map((item) => {
  //     if (item.uuid === itemToUpdate.uuid) {
  //       const newItem = { ...item, price: itemToUpdate.price };
  //       return newItem;
  //     }
  //     return item;
  //   });
  // }

  if (action.type === ITEM_PRICE_UPDATED) {
    return produce(state, (draftState) => {
      const foundItemIndex = draftState.findIndex(
        (item) => item.uuid === action.payload.uuid
      );

      draftState[foundItemIndex].price = action.payload.price;
      // console.log( 'Updated Price', state[foundItemIndex], ':', action.payload.price);
    });
  }

  // if (action.type === ITEM_QUANTITY_UPDATED) {
  //   const itemToUpdate = { ...action.payload };

  //   return state.map((item) => {
  //     if (item.uuid === itemToUpdate.uuid) {
  //       const newItem = { ...item, quantity: itemToUpdate.quantity };
  //       return newItem;
  //     }
  //     return item;
  //   });
  // }

  if (action.type === ITEM_QUANTITY_UPDATED) {
    return produce(state, (draftState) => {
      const foundItemIndex = draftState.findIndex(
        (item) => item.uuid === action.payload.uuid
      );
      draftState[foundItemIndex].quantity = action.payload.quantity;
    });
  }
  return state;
};

export default reducer;
