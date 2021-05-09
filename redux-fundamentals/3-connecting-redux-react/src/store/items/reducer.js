import {
  ITEM_REMOVED,
  NEW_ITEM_ADDED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED
} from './actions';
let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast Barbecue', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Hammer Time!', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === NEW_ITEM_ADDED) {
    const item = {
      uuid: id++,
      quantity: 1,
      ...action.payload
    };

    return [...state, item];
  }
  if (action.type === ITEM_REMOVED) {
    const foundItem = state.reduce(
      (stored, current) => {
        current.uuid === action.payload.uuid
          ? stored[0].push(current)
          : stored[1].push(current);
        return stored;
      },
      [[], []]
    );
    console.log('removed item:', foundItem[0]);
    return [...foundItem[1]];
  }
  if (action.type === ITEM_PRICE_UPDATED) {
    const itemToUpdate = { ...action.payload };

    return state.map((item) => {
      if (item.uuid === itemToUpdate.uuid) {
        const newItem = { ...item, price: itemToUpdate.price };
        return newItem;
      }
      return item;
    });
  }
  if (action.type === ITEM_QUANTITY_UPDATED) {
    const itemToUpdate = { ...action.payload };

    return state.map((item) => {
      if (item.uuid === itemToUpdate.uuid) {
        const newItem = { ...item, quantity: itemToUpdate.quantity };
        return newItem;
      }
      return item;
    });
  }

  return state;
};

export default reducer;
