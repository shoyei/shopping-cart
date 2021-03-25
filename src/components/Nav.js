import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import cartImg from './images/shopping-cart-solid.svg'
import logo from './images/compact-disc-solid.svg'

const Nav = (props) => {
    const [currentCount, setCurrentCount] = useState(0)

    //Reducer for finding total number of items in cart
    useEffect(() => {
        let sum = props.cart.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.count
        }, 0)
        setCurrentCount(sum)
    }, [props.cart])

    return (
        <div className="Nav">
            <Link to='/' className="logo">
                <div className="logoContainer">
                    <img alt="" src={logo} />
                    <h1>Gear Shop</h1>
                </div>
            </Link>
            <div className="menuLinks">
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/cart'><img src={cartImg} alt="" className="icon" /></Link>
                <div className='currentCount'>{currentCount}</div>
            </div>
        </div>
    )
}

export default Nav
