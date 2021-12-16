// Nav
import { Link } from 'react-router-dom';
import React, {useState} from 'react';

const Header = () => {
  
    const [toggle, setToggle] = useState("none")

    function gotPressed(e) {
        e.preventDefault();
        if (toggle !== "show"){
            setToggle("show")
        }else {
            setToggle("none")
        }
    }
    function mouseOut(e) {
        setToggle("none");
    }

    return (
        <header className={toggle} onMouseLeave={mouseOut}>
            <div className="top-bar">
                <h1><Link to="/">Movie App</Link></h1>
                <a href='/' className="btn-menu " id="btn-menu" onClick={gotPressed}>Menu</a>
                <nav id="main-nav" >
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/favorite">Favorite</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;