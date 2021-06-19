import React from 'react'
import PropTypes from 'prop-types'
import './ItemsList.scss';
import { useSelector, useDispatch } from'react-redux'
import { removeItem, editItem, changeEditedId } from '../../actions/actionCreators';

export default function ItemsList() {
  const items = useSelector(state => state.itemList);
  const item = useSelector(state => state.itemAdd);
  const dispatch = useDispatch();

  const handleEdit = (name, price, id) => {
    dispatch(editItem(name, price));
    dispatch(changeEditedId(id))
  }

  const handleRemove = id => {
    dispatch(removeItem(id));
  }

  return(
    <ul className="list">
      {items.map(item => 
        <li className="item" key={item.id}>
        {item.name} {item.price}<span>₽</span> 
        <button onClick={() => handleEdit(item.name, item.price, item.id)}>✎</button>
        <button onClick={() => handleRemove(item.id)}>✕</button>
        </li>)}
    </ul>
  )
}