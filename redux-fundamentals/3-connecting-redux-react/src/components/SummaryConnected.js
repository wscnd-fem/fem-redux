import { connect } from 'react-redux';
import { Summary } from './Summary';

/**
 * subtotal
 * tipAmount
 * total
 */
const mapStateToProps = ({ items, tipPercentage }) => {
  const subtotal = items.reduce((stored, item) => {
    return (stored += item.price * item.quantity);
  }, 0);

  const tipAmount = subtotal * (tipPercentage / 100);
  const total = subtotal + tipAmount;
  return { subtotal, tipAmount, total };
};

export const SummaryConnected = connect(mapStateToProps)(Summary);
