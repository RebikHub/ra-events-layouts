import React from 'react'
import Iconswitch from './IconSwitch'

export default function Store({products}) {
  console.log(products);
  function onSwitch() {
    console.log('icons');
  }
  return (
    <Iconswitch icon={'view_list'} onSwitch={onSwitch()}/>
  )
}
