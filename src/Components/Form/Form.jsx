import './Form.scss';
import React from 'react'
import { Input, Button } from '@material-ui/core';

export default function Form() {
  return (
    <form className='app__form'>
      <Input id="name" />
      <Input id="price" />
      <Button variant="outlined" color='primary'>save</Button>
    </form>
  )
}
