import React from 'react';
import logo from '../img/logo_header.svg'
import menu from '../img/menu_header.png'
import Catalog from './Catalog';


const nav=["PC","PS4","PS5","Xbox One","Nintendo Switch","Video Game Merchandise"]

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="wrapper">
                    <div className="header__catalog">
                        <div className="header__logo">
                        <img  src={logo} alt="" />
                        <p className='header__logo-text'>eSTRIX Game Store</p>
                        <img className='menu_img' src={menu} alt="" />
                        </div>
                        {/* <Catalog></Catalog> */}
                    </div>
                    <nav className='nav'>
                    {
                        (nav.length>0)&& nav.map((item,index)=>{
                            return(
                                <p key={item} className='nav__item'>{item}</p>
                            )
                        })
                    }
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
