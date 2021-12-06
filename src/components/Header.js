// Nav
import { NavLink } from 'react-router-dom';
import React, {useState} from 'react';

const Header = () => {
  
    const [toggle, setToggle] = useState("none")

    function gotPressed() {
        if (toggle !== "show"){
            setToggle("show")
        }else {
            setToggle("none")
        }
    }

    return (
        <header className={toggle}>
            <div class="top-bar">
                <h1><a href="#0">Movie App</a></h1>
                <a href="#main-nav" className="btn-menu " id="btn-menu" onClick={gotPressed}>Menu</a>
                <nav id="main-nav">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/favorite">Favorite</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;