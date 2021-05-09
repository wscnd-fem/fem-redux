import { connect } from 'react-redux';

import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';
import { makeSelectItemTotal } from '../store/items/selectors';
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

const makeMapStateToProps = () => {
  const memoizedProps = makeSelectItemTotal();
  const makeStateToProps = (state, props) => {
    const tmp = memoizedProps(state, props);
    // console.log('tmp', tmp);
    return {
      total: tmp
    };
  };
  return makeStateToProps;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  remove: () => dispatch(removeItem(ownProps.uuid)),
  updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
  updateQuantity: (quantity) =>
    dispatch(updateQuantity(ownProps.uuid, quantity))
});

export const MenuItemConnected = connect(
  makeMapStateToProps,
  mapDispatchToProps
)(MenuItem);
