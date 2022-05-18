import React, { useState } from "react";
import { images, data } from "./../constants";
import { useEvent } from "../hooks/useEvent";

const Header = () => {
    const [userMenu, setUserMenu] = useState(false);

    const onUserMenuClick = (e) => {
        const target = e.target;
        if (target.closest(".user-header__badge")) {
            setUserMenu(!userMenu);
        } else if (!target.closest(".user-header__menu")) {
            setUserMenu(false);
        }
    };

    useEvent("click", onUserMenuClick);

    const { headerMenuItems, userHeaderMenuItems } = data;

    const menuItems = headerMenuItems.map(({ title, link }, i) => (
        <li key={link + title + i} className="menu__item">
            <a href={link} className="menu__link">
                {title}
            </a>
        </li>
    ));

    const menuUserItems = userHeaderMenuItems.map(({ title, img, link }, i) => (
        <li key={link + title + i} className="user-header__item">
            <a href={link} className="user-header__link">
                <span className="user-header__icon">
                    <img src={img} alt={title} />
                </span>
                {title}
            </a>
        </li>
    ));

    return (
        <header className="header">
            <div className="header__container">
                <button type="button" className="header__icon icon-menu">
                    <span></span>
                </button>
                <a href="#" className="header__logo">
                    <img src={images.headerImages.headerLogo} alt="Logo" />
                </a>
                <div className="header__menu menu">
                    <nav className="menu__body">
                        <ul className="menu__list">{menuItems.length && menuItems}</ul>
                    </nav>
                </div>
                <div className="header__actions actions-header">
                    <a data-da=".menu__body,767.98,last" href={userHeaderMenuItems[0].link} className="actions-header__region">
                        <div className="actions-header__icon">
                            <img src={userHeaderMenuItems[0].img} alt={userHeaderMenuItems[0].title} />
                        </div>
                        <span>{userHeaderMenuItems[0].title}</span>
                    </a>
                    <div className="actions-header__user user-header">
                        <div className="user-header__badge">
                            <img src={images.headerImages.headerUser} alt="user" />
                        </div>
                        <ul className={`user-header__menu ${userMenu ? "_active" : ""}`}>
                            {menuUserItems.length && menuUserItems}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
