import React from "react";
import { images } from "../constants";

const Quotes = () => {
    return (
        <section className="quotes">
            <div className="quotes__container">
                <div className="quotes__header header-block">
                    <div className="header-block__title title">
                        <div className="title__item">Интересные</div>
                        <h2 className="title__main">Цитаты</h2>
                    </div>
                    <div className="header-block__decor">
                        <div className="header-block__item">
                            <span></span>
                        </div>
                        <div className="header-block__icon">
                            <img src={images.quotesImages.newsIcon} alt="Иконка Цитаты" />
                        </div>
                        <div className="header-block__item">
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="quotes__body">
                    <div className="quotes__image">
                        <img src={images.quotesImages.newsAvatar} alt="Марк Твен" />
                    </div>
                    <div className="quotes__content">
                        <h6 className="quotes__title">«Легче одурачить людей, чем убедить их в том, что они одурачены»</h6>
                        <div className="quotes__info">
                            <p>Марк Твен</p>
                            <p>1935 - 1910</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quotes;
