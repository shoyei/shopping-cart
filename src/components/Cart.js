import React, { useEffect, useState } from 'react'

const Cart = (props) => {
    const { items, cart } = props
    const [cartList, setCartList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const newCart = []
        cart.map(cartItem => {
            let newObj = {
                id: 0,
                title: '',
                price: '',
                imgSrc: '',
                count: ''
            }
            for (const shopItem of items) {
                if (cartItem.itemId === shopItem.id) {
                    newObj.id = shopItem.id
                    newObj.title = shopItem.title
                    newObj.price = shopItem.price
                    newObj.imgSrc = shopItem.imgSrc
                    newObj.count = cartItem.count
                    break
                }
            }
            return newCart.push(newObj)
        })
        setCartList(newCart)
    }, [cart])

    useEffect(() => console.log('cartlist', cartList), [cartList])

    //Update total price of all items in cart
    useEffect(() => {
        let sum = cartList.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.count * currentValue.price)
        }, 0)
        setTotalPrice(sum)
    }, [cartList])

    return (
        <div className="cart">
            <div className='cartContainer'>
                {cartList.map(item => {
                    return <div key={item.id} className='cartItem'>
                        <img className="cartItemImg" alt='' src={item.imgSrc}></img>
                        <h4 className="cartItemTitle">{item.title}</h4>
                        <div className="cartItemIncDec">
                            <button id={item.id} data-direction='dec' onClick={props.cartQuantity}>-</button>
                            <p>{item.count}</p>
                            <button id={item.id} data-direction='inc' onClick={props.cartQuantity}>+</button>
                        </div>
                        <button className='deleteBtn' id={item.id} onClick={props.deleteFromCart}>Delete</button>
                        <p className="cartItemPrice">${item.price * item.count}</p>
                    </div>
                })}
            </div>
            <div className="cartItemTotal">
                <h4>Sub-Total: ${totalPrice}</h4>
                <p>Taxes: $0</p>
                <p>Shipping: $0</p>
                <h3>Total: ${totalPrice}</h3>
            </div>
        </div>
    )
}

export default Cart