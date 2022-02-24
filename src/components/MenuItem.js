import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function MenuItem(props) {
  return (
    <div className="menuitem">
      <div style={{backgroundImage: `url(${props.image})`}}></div>
      <h1>{props.name}</h1>
      <p><CurrencyRupeeIcon/> {props.price}</p>
    </div>
  )
}

export default MenuItem
