import { connect } from 'react-redux';

import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';
import { MenuItem } from './MenuItem';

/**
 * updatePrice
 * updateQuantity
 * remove
 */
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     remove: () => dispatch(removeItem(ownProps.uuid))
//   };
// };
//
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    items: ownProps,
    total: ownProps.quantity * ownProps.price
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  remove: () => dispatch(removeItem(ownProps.uuid)),
  updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
  updateQuantity: (quantity) =>
    dispatch(updateQuantity(ownProps.uuid, quantity))
});

export const MenuItemConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
