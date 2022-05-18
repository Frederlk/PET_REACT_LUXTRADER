import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <button type="button" className="header__icon icon-menu">
                    <span></span>
                </button>
                <a href="#" className="header__logo">
                    <img src="img/header/Logo.png" alt="Logo" />
                </a>
                <div className="header__menu menu">
                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="#main-slider" className="menu__link">
                                    Главная
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#lots" className="menu__link">
                                    Аукцион
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#services" className="menu__link">
                                    О проекте
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#quotes" className="menu__link">
                                    Партнерам
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#info" className="menu__link">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__actions actions-header">
                    <a data-da=".menu__body,767,1" href="#" className="actions-header__region">
                        <span>Выбор Региона</span>
                    </a>
                    <div className="actions-header__user user-header">
                        <div className="user-header__icon">
                            <img src="img/header/03.png" alt="user" />
                        </div>
                    </div>
                    <ul className="user-header__menu">
                        <li>
                            <a href="#" className="user-header__link user-header__link_1">
                                Выбор Региона
                            </a>
                        </li>
                        <li>
                            <a href="#" className="user-header__link user-header__link_2">
                                Личный кабинет
                            </a>
                        </li>
                        <li>
                            <a href="#" className="user-header__link user-header__link_3">
                                Мои ставки
                            </a>
                        </li>
                        <li>
                            <a href="#" className="user-header__link user-header__link_4">
                                Мои лоты
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
