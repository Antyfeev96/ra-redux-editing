import { ListItem, ListItemIcon, ListItemText, IconButton } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import React from "react";

export default function Item() {
  return (
    <ListItem>
      <ListItemIcon>
        <CheckIcon />
      </ListItemIcon>
      <ListItemText>Tovar</ListItemText>
      <ListItemText>Price</ListItemText>
      <IconButton aria-label="edit">
        <EditIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
