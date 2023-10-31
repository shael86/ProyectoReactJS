import React from 'react'
import Item from '../Item/Item'

const ItemList = () => {
return (
    <div className='row'>
        {
        Item.map(item=>
            <div className='col-md-3'
            key = {item.id}>

            <Item item={item}/>

            </div>
        )
        }
    </div>
    )
}

export default ItemList