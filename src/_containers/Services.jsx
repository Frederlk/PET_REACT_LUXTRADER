import React from "react";
import { data, images } from "../constants";

const Services = () => {
    const servicesItems = data.servicesItems.map(({ icon, title, text, link }, i) => {
        if (text.length > 65) {
            text = text.substring(0, 65) + "...";
        }
        return (
            <div key={i + title + link} className="services__item services-item">
                <a href={link} className="services-item__icon">
                    <img src={icon} alt={title} />
                </a>
                <a href={link} className="services-item__title">
                    Экспертная оценка
                </a>
                <div className="services-item__text">{text}</div>
                <a href={link} className="services-item__btn">
                    <span>Подробнее</span>
                </a>
            </div>
        );
    });

    return (
        <section className="services">
            <div className="services__container">
                <div className="services__header header-block">
                    <div className="header-block__title title">
                        <div className="title__item">Дополнительные</div>
                        <h2 className="title__main title__main_w">услуги</h2>
                    </div>
                    <div className="header-block__decor">
                        <div className="header-block__item">
                            <span></span>
                        </div>
                        <div className="header-block__icon">
                            <img src={images.servicesImages.servicesIcon} alt="Иконка Шестирёнки" />
                        </div>
                        <div className="header-block__item">
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="services__row">{servicesItems.length && servicesItems}</div>
            </div>
        </section>
    );
};

export default Services;
