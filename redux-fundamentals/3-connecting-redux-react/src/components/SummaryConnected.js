import { connect } from 'react-redux';
import { Summary } from './Summary';
import {
  selectSubTotal,
  selectTipAmmount,
  selectTotal
} from '../store/summary/selectors';

/**
 * subtotal
 * tipAmount
 * total
 */
const mapStateToProps = (state) => {
  return {
    subtotal: selectSubTotal(state),
    tipAmount: selectTipAmmount(state),
    total: selectTotal(state)
  };
};

export const SummaryConnected = connect(mapStateToProps)(Summary);
