import React from 'react'
import { Link } from 'react-router-dom'
import titleImage from './images/banner.jpg'
import synthHeader1 from './images/synthHeader1.png'
import synthHeader2 from './images/synthHeader2.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <img className='titleImage' alt="Welcome to Shoyei's Synth Shop" src={titleImage} />
            <div className="altBanner">
                <Link to="/shop">
                    <div className="newSale">
                        <h3>New Products</h3>
                        <img alt="" src={synthHeader1} />
                    </div>
                </Link>
                <Link to="/shop">
                    <div className="newSale">
                        <h3>Sale Items</h3>
                        <img alt="" src={synthHeader2} />
                    </div>
                </Link>
            </div>
            <div className="blogContainer">
                <div className="article">
                    <h4>Build a Synth!</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...<a href="">[Read more]</a>"</p>
                </div>
                <div className="article">
                    <h4>Collect them all!</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...<a href="">[Read more]</a>"</p>
                </div>
            </div>
        </div>
    )
}

export default Home