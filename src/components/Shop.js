import React from 'react'
import Item from './Item'

const Shop = (props) => {

    return (
        <div className="shopDiv">
            <h2>Call or email for a list of open box/demo items!</h2>
            {props.items.map(item => {
                return (
                    <Item key={item.id} item={item} addToCart={props.addToCart} />
                )
            })}
        </div>
    )
}

export default Shop