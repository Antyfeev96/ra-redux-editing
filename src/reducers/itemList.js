import { nanoid } from "nanoid";
import { ADD_ITEM, REMOVE_ITEM, SAVE_EDITED_ITEM } from "../actions/actionTypes";

const initialState = [
  { id: nanoid(), name: "Замена стекла", price: 21000 },
  { id: nanoid(), name: "Замена дисплея", price: 25000 },
];

export default function itemListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price: Number(price) }];
    case REMOVE_ITEM:
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    case SAVE_EDITED_ITEM:
      console.log(action.payload);
      const editedName = action.payload.name;
      const editedPrice = action.payload.price;
      const editedId = action.payload.editedId;
      state = state.map(item => {
        if (item.id === editedId) {
          item.name = editedName;
          item.price = editedPrice;
        }
        return item;
      })
      return state;
    default:
      return state;
  }
}
