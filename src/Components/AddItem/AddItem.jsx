import React from 'react'
import PropTypes from 'prop-types'
import './AddItem.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, changeItemField, saveEditedItem, changeEditedId } from '../../actions/actionCreators';

export default function AddItem () {
  const item = useSelector(state => state.itemAdd);
  console.log(item);
  const dispatch = useDispatch();

  const clearInputs = () => {
    dispatch(changeItemField('name', ''));
    dispatch(changeItemField('price', ''));
  }

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch(changeItemField(name, value));
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addItem(item.name, item.price));
    clearInputs();
  }

  const handleUpdate = event => {
    event.preventDefault()
    dispatch(saveEditedItem(item.name, item.price, item.editedId));
    dispatch(changeEditedId(null));
    clearInputs();
  }

  const handleCancel = () => {
    dispatch(changeEditedId(null));
    clearInputs();
  }

  return(
    <form className="form" onSubmit={item.editedId !== null ? handleUpdate : handleSubmit}>
      <input className="form__name" name='name' onChange={handleChange} value={item.name}/>
      <input className="form__price" name='price' onChange={handleChange} value={item.price}/>
      {item.editedId !== null ? 
        <button className="form__cancel" onClick={handleCancel} type='button'>Cancel</button> : null}
      <button className="form__button" type='submit'>Save</button>
    </form>
  )
}