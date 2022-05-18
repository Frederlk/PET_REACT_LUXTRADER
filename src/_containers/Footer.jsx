import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__column">
                    <a href="" className="footer__logo">
                        <img src="img/footer/01.png" alt="" />
                    </a>
                    <div className="footer__info">Все права защищены © 2014</div>
                </div>
                <div className="footer__column footer__column_full">
                    <nav className="footer__menu">
                        <ul className="footer__list">
                            <li>
                                <a href="#" className="footer__link">
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    Аукцион
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    О проекте
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    Партнерам
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    Контакты
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    Новости
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    Реклама
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    Соглашение
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    Регистрация
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    Услуги
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__column">
                    <div className="footer__contacts">
                        <a href="tel:+7495222222" className="footer__phone">
                            <small>+7</small>(495) 22-22-22
                        </a>
                        <a href="#" className="footer__callback">
                            <span>Обратная связь</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
