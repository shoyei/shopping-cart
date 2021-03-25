import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'

function App() {
  const [cart, setCart] = useState([])
  const [items, setItems] = useState([
    {
      id: 0,
      title: 'Moog Grandmother',
      price: 999,
      desc: "Finally, Moog follows their roots all the way back to the original matriarch, fondly known as Grandmother. This semi-modular analog synthesizer boasts an integrated arpeggiator, sequencer, and spring reverb tank. All of the front panel modules can be reoriented to suit the user's particular needs.",
      imgSrc: 'https://www.perfectcircuit.com/media/catalog/product/cache/31f4f069f336eca018319f55f291a10e/M/o/Moog_Grandmother-Dark_01.jpg'
    },
    {
      id: 1,
      title: 'Sequential Prophet-10',
      price: 4299,
      desc: 'The Prophet-5 is a legend among synthesizer collectors and users, with a distinctive sound that captured the imagination of a generation of musicians...but now comes the Prophet-10. Sequential has updated their classic five-voice analog polysynth up to a 10-voice version with the Prophet-10.',
      imgSrc: 'https://www.perfectcircuit.com/media/catalog/product/cache/31f4f069f336eca018319f55f291a10e/S/e/Sequential_Prophet-10-2020_01.jpg'
    },
    {
      id: 2,
      title: 'Minilogue XD',
      price: 649,
      desc: "Based on Korg's modern classic Minilogue analog polyphonic synthesizer, the Minilogue XD brings a host of expanded options to the table, including the digital Multi-Engine, microtuning, an expanded effects section, and more.",
      imgSrc: 'https://www.perfectcircuit.com/media/catalog/product/cache/31f4f069f336eca018319f55f291a10e/K/o/Korg_MinilogueXD_01.jpg'
    },
    {
      id: 3,
      title: 'Lyra-8 Organismic Drone Synth ',
      price: 749,
      desc: "SOMA Laboratory's Lyra-8 Organismic Synthesizer is a powerful self-contained synth in a rugged metal housing, perfect for drones, noise, alternate tunings, and all manner of sonic experimentation.",
      imgSrc: 'https://www.perfectcircuit.com/media/catalog/product/cache/31f4f069f336eca018319f55f291a10e/s/o/soma_lyra-8_white_01.jpg'
    },
  ])

  const addToCart = (e) => {
    const { id, dataset } = e.target
    const newCartItem = cart.find(item => item.itemId === parseInt(id))
    console.log(newCartItem)
    //if item is not already in cart, add new item with id and count.
    if (!newCartItem) {
      const newCartEntry = {
        itemId: parseInt(id),
        count: parseInt(dataset.count)
      }
      setCart(prevState => [...prevState, newCartEntry])
    }
    //if item already exists in cart, update quantity
    else {
      const newArray = [...cart]
      const newestArray = newArray.map(item => item.itemId === parseInt(id)
        ? { ...item, count: item.count + parseInt(dataset.count) }
        : item)
      setCart(newestArray)
    }
  }

  const deleteFromCart = (e) => {
    console.log('delete')
    const { id } = e.target
    setCart(prevState => prevState.filter(item => item.itemId !== parseInt(id)))
  }

  const cartQuantity = (e) => {
    const { id, dataset: { direction } } = e.target
    switch (direction) {
      case 'inc':
        setCart(prevState => prevState.map(item => item.itemId === parseInt(id)
          ? { ...item, count: item.count + 1 }
          : item)
        )
        break
      case 'dec':
        setCart(prevState => prevState.map(item => item.itemId === parseInt(id) && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item)
        )
        break
      default: break
    }
  }

  useEffect(() => console.log('cart', cart), [cart])

  return (
    <BrowserRouter>
      <div className="App">
        <Nav cart={cart} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' render={(props) => <Shop items={items} addToCart={addToCart} />} />
          <Route exact path='/cart' render={(props) => <Cart
            items={items}
            cart={cart}
            deleteFromCart={deleteFromCart}
            cartQuantity={cartQuantity}
          />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
