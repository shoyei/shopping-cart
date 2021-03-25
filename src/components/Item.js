import React, { useState } from 'react'

const Item = (props) => {

    const [count, setCount] = useState(1)

    const incDec = (e) => {
        const direction = e.target.dataset.direction
        if (direction === 'inc') setCount(count + 1)
        else if (direction === 'dec' && count > 1) setCount(count - 1)
        else return
    }

    return (
        <div className="shopItem" key={props.item.id}>
            <h4 className="itemTitle">{props.item.title}</h4>
            <img className="itemImg" alt="" src={props.item.imgSrc} />
            <p className="itemPrice">${props.item.price}</p>
            <p className="itemDesc">{props.item.desc}</p>
            <div className="itemIncDec">
            <p className="itemQuantity">Quantity</p>
            <div className="itemQuantBtns">
            <button className="itemIncDecBtn" data-direction='dec' onClick={incDec}>-</button>
            <p className="itemCount">{count}</p>
            <button className="itemIncDecBtn"data-direction='inc' onClick={incDec}>+</button>
            </div>
            </div>
            <button className="itemAdd" id={props.item.id} data-count={count} onClick={props.addToCart}>Add to Cart</button>
        </div>
    )
}

export default Item