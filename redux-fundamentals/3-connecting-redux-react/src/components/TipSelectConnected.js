import { connect } from 'react-redux';
import TipSelect from './TipSelect';
import { updateTip } from '../store/tip-percentage/actions';

const mapStateToProps = (state) => {
  return {
    tipPercentage: state.tipPercentage
  };
};

const mapDispatchToProps = {
  updateTip
};

export const TipSelectConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(TipSelect);
