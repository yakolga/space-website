import logo from "../../assets/icons/logo.svg";
import cartIcon from '../../assets/icons/cart.svg';
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
                        <img src={logo} alt="Go"></img>
                    </a>
                    <nav className="header__nav">
                        <ul className={open ? 'header__list header__list--open' : 'header__list'}>
                            <li className="header__item">
                                <a href="/gg" title="Home" className="header__link">Home</a>
                            </li>
                            <li className="header__item">
                                <a href="/gg" title="Products" className="header__link">Products</a>
                            </li>
                            <li className="header__item">
                                <a href="/gg" title="Cart"><img src={cartIcon} alt="Cart"></img></a>
                            </li>
                        </ul>
                        <button className="header__burger" onClick={() => setOpen(prev => !prev)}>
                            <img src={open ? crossIcon : burgerIcon} alt="Open menu"></img>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;