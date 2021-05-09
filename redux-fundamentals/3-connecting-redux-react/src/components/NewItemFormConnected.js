import { connect } from 'react-redux';
import { NewItemForm } from './NewItemForm';
import { addNewItem } from '../store/items/actions';

export const NewItemFormContainer = {};

const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItem(name, price)
};

export const NewItemFormConnected =  connect(null, mapDispatchToProps)(NewItemForm);
