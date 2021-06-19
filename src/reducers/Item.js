import { EDIT_ITEM, CHANGE_ITEM_FIELD, CHANGE_EDITED_ID } from'../actions/actionTypes'

const initialState = { name: '', price: '', editedId: null };

export default function addItemReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_ITEM_FIELD:
      const { name, value } = action.payload;
      return {...state, [name]: value};
    case EDIT_ITEM:
      const { price } = action.payload;
      const newName = action.payload.name;
      return {...state, name: newName, price };
    case CHANGE_EDITED_ID:
      const { editedId } = action.payload;
      return {...state, editedId };
    default: return state;
  }
}