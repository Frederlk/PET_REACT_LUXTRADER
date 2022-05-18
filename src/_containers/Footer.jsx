import React from "react";
import { images, data } from "./../constants";
import { format } from "date-fns";

const Footer = () => {
    const footerMenuItems = data.footerMenuItems.map(({ title, link }, i) => (
        <li key={i + title + link} className="footer__item">
            <a href={link} className="footer__link">
                {title}
            </a>
        </li>
    ));

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__column">
                    <a href="#" className="footer__logo">
                        <img src={images.footerImages.footerLogo} alt="Логотип" />
                    </a>
                    <div className="footer__info">Все права защищены © {format(new Date(), "yyyy")}</div>
                </div>
                <div className="footer__column footer__column_full">
                    <nav className="footer__menu">
                        <ul className="footer__list">{footerMenuItems.length && footerMenuItems}</ul>
                    </nav>
                </div>
                <div className="footer__column">
                    <div className="footer__contacts">
                        <a href="tel:+7495222222" className="footer__phone">
                            <small>+7</small>(495) 22-22-22
                        </a>
                        <a href="#" className="footer__callback">
                            <span className="footer__back-icon">
                                <img src={images.footerImages.footerBack} alt="Обратная Связь" />
                            </span>
                            Обратная связь
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
