import { List } from '@material-ui/core'
import React from 'react'
import Item from '../ListItem/ListItem'

export default function ListTasks() {
  return (
    <List className="app__list">
      <Item/>
    </List>
  )
}
