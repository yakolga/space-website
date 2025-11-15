import logo from "../../assets/icons/logo.svg";
import burgerIcon from '../../assets/icons/menu.svg';
import crossIcon from '../../assets/icons/cross.svg';
import './Header.scss';
import { useState } from "react";

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="/" className="header__logo">
                        <img src={logo} alt="Website logo"/>
                    </a>
                    <nav className="header__nav">
                        <ul className={open ? 'header__list header__list--open' : 'header__list'}>
                            <li className="header__item">
                                <a href="#" title="Home" className="header__link">Home</a>
                            </li>
                            <li className="header__item">
                                <a href="#" title="Products" className="header__link">Products</a>
                            </li>
                            <li className="header__item">
                                <a href="#" title="Cart" className="header__cart">
                                    <svg className="header__cart-icon" width="24" height="21" viewBox="0 0 24 21" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="false">
                                        <defs>
                                            <linearGradient id="cartGrad" x1="0" x2="1" y1="0" y2="1">
                                                <stop offset="0" stopColor="#EBFF00" />
                                                <stop offset="1" stopColor="#FF70D9" />
                                            </linearGradient>
                                        </defs>

                                        <path className="header__cart-shape"
                                        d="M9.23033 18.8834C9.23033 17.8358 8.40828 16.9949 7.38425 16.9949C6.36024 16.9949 5.53817 17.8358 5.53817 18.8834C5.53817 19.931 6.36024 20.7719 7.38425 20.7719C8.40828 20.7719 9.23033 19.931 9.23033 18.8834ZM22.1529 18.8834C22.1529 17.8358 21.3308 16.9949 20.3068 16.9949C19.2828 16.9949 18.4607 17.8358 18.4607 18.8834C18.4607 19.931 19.2828 20.7719 20.3068 20.7719C21.3308 20.7719 22.1529 19.931 22.1529 18.8834ZM23.9989 2.83252C23.9989 2.31601 23.5807 1.88837 23.0759 1.88837H5.75453C5.61034 1.18018 5.59584 0 4.61518 0H0.922992C0.418224 0 0 0.427865 0 0.944C0 1.46049 0.418224 1.88837 0.922992 1.88837H3.8652L6.41798 14.0299C6.21605 14.4574 5.53817 15.5936 5.53817 16.0509C5.53817 16.5674 5.95642 16.9949 6.46126 16.9949H21.2298C21.7346 16.9949 22.1529 16.5674 22.1529 16.0509C22.1529 15.5347 21.7346 15.1067 21.2298 15.1067H7.96118C8.10538 14.8116 8.30734 14.5017 8.30734 14.1627C8.30734 13.8232 8.17747 13.4546 8.1198 13.1297L23.1769 11.3302C23.6528 11.271 23.9989 10.858 23.9989 10.3857V2.83252Z"
                                        fill="#ffffff"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <button className="header__burger" onClick={() => setOpen(prev => !prev)} aria-expanded={open}>
                            <img src={open ? crossIcon : burgerIcon} alt={open ? "Close menu" : "Open menu"}/>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;