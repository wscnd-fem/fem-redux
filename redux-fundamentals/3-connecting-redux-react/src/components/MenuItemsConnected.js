import { connect } from 'react-redux';
import { MenuItems } from './MenuItems';

const mapStateToProps = ({ items }) => {
  return {
    items
  };
};

export const MenuItemsConnected = connect(mapStateToProps)(MenuItems);
