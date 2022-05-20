import { useEffect } from "react";
import { Header, Footer, MainSlider, Lots, Categories } from "./_containers";
import * as flsFunctions from "./js/files/functions";
import dynamicAdaptive from "./js/libs/dynamic_adapt";

const App = () => {
    useEffect(() => {
        flsFunctions.menuInit();
        dynamicAdaptive();
    }, []);

    return (
        <>
            <Header />
            <main className="page">
                <MainSlider />
                <Lots />
                <Categories />
                <section className="services">
                    <div className="services__container _container">
                        <div className="services__header block-header">
                            <div className="block-header__title title">
                                <div className="title__item">Дополнительные</div>
                                <h2 className="title__main title__main_w">услуги</h2>
                            </div>
                            <div className="block-header__decor block-decor">
                                <div className="block-decor__items">
                                    <span></span>
                                </div>
                                <div className="block-decor__icon">
                                    <img src="img/services/01.png" alt="" />
                                </div>
                                <div className="block-decor__items">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="services__row">
                            <div className="services__column">
                                <div className="services__item service">
                                    <a href="#" className="service__icon">
                                        <img src="img/services/02.png" alt="" />
                                    </a>
                                    <a href="#" className="service__title">
                                        Экспертная оценка
                                    </a>
                                    <div className="service__text">
                                        Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный
                                    </div>
                                    <a href="#" className="service__btn">
                                        <span>Подробнее</span>
                                    </a>
                                </div>
                            </div>
                            <div className="services__column">
                                <div className="services__item service">
                                    <a href="#" className="service__icon">
                                        <img src="img/services/03.png" alt="" />
                                    </a>
                                    <a href="#" className="service__title">
                                        заказ комплектующих
                                    </a>
                                    <div className="service__text">
                                        Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный
                                    </div>
                                    <a href="#" className="service__btn">
                                        <span>Подробнее</span>
                                    </a>
                                </div>
                            </div>
                            <div className="services__column">
                                <div className="services__item service">
                                    <a href="#" className="service__icon">
                                        <img src="img/services/04.png" alt="" />
                                    </a>
                                    <a href="#" className="service__title">
                                        ремонт и реставрациЯ
                                    </a>
                                    <div className="service__text">
                                        Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный
                                    </div>
                                    <a href="#" className="service__btn">
                                        <span>Подробнее</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="quotes">
                    <div className="quotes__container _container">
                        <div className="quotes__header block-header">
                            <div className="block-header__title title">
                                <div className="title__item">Интересные</div>
                                <h2 className="title__main title">ЦитатЫ</h2>
                            </div>
                            <div className="block-header__decor block-decor">
                                <div className="block-decor__items">
                                    <span></span>
                                </div>
                                <div className="block-decor__icon">
                                    <img src="img/quotes/01.png" alt="" />
                                </div>
                                <div className="block-decor__items">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="quotes__slider slider-quotes">
                            <div className="slider-quotes__body _swiper">
                                <div className="slider-quotes__slide">
                                    <div className="slider-quotes__image">
                                        <img src="img/quotes/02.png" alt="" />
                                    </div>
                                    <div className="slider-quotes__content">
                                        <div className="slider-quotes__title">
                                            «Легче одурачить людей, чем убедить их в том, что они одурачены»
                                        </div>
                                        <div className="slider-quotes__info">
                                            <p>Марк Твен</p>
                                            <p>1935 - 1910</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-quotes__control control-slider-quotes">
                                <div className="control-slider-quotes__decor"></div>
                                <div className="control-slider-quotes__link">
                                    <img src="img/quotes/03.png" alt="" />
                                </div>
                                <div className="control-slider-quotes__decor"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="info">
                    <div className="info__container _container">
                        <div className="info__row">
                            <div className="info__column">
                                <section className="info__block">
                                    <h3 className="info__title title-info">
                                        <span>
                                            <img src="img/news/01.png" alt="" />
                                        </span>
                                        <span>Новости</span>
                                    </h3>
                                    <div className="info__content">
                                        <div className="info__item">
                                            <div className="info__date">12.07.14</div>
                                            <a href="#" className="info__label">
                                                Уникальной Лакшери аукционе, здесь вы сможете найти
                                            </a>
                                            <div className="info__text">
                                                Продажа товаров, ценных бумаг, имущества предприятий, произведений искусства и
                                                других объектов, которая...
                                            </div>
                                        </div>
                                        <div className="info__item">
                                            <div className="info__date">12.07.14</div>
                                            <a href="#" className="info__label">
                                                Достойные для себя лоты
                                            </a>
                                            <div className="info__text">
                                                Имущества предприятий, произведений искусства и других объектов, произведений
                                                редприятий, произведений искусств...
                                            </div>
                                        </div>
                                        <div className="info__item">
                                            <div className="info__date">12.07.14</div>
                                            <a href="#" className="info__label">
                                                Уникальной Лакшери аукционе, здесь вы сможете найти
                                            </a>
                                            <div className="info__text">
                                                Продажа товаров, ценных бумаг, имущества предприятий, произведений искусства и
                                                других объектов, которая...
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="info__column">
                                <section className="info__block">
                                    <h3 className="info__title title-info">
                                        <span>
                                            <img src="img/news/02.png" alt="" />
                                        </span>
                                        <span>События</span>
                                    </h3>
                                    <div className="info__content">
                                        <div className="info__item">
                                            <a href="#" className="info__label">
                                                Уникальной Лакшери аукционе, здесь вы сможете найти
                                            </a>
                                            <div className="info__text">
                                                Продажа товаров, ценных бумаг, имущества предприятий, произведений искусства и
                                                других объектов, которая...
                                            </div>
                                        </div>
                                        <div className="info__item">
                                            <a href="#" className="info__label">
                                                Достойные для себя лоты
                                            </a>
                                            <div className="info__text">
                                                Имущества предприятий, произведений искусства и других объектов, произведений
                                                редприятий, произведений искусств...
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="info__column">
                                <section className="info__subscribe subscribe">
                                    <h3 className="subscribe__title title-info">
                                        <span>
                                            <img src="img/news/03.png" alt="" />
                                        </span>
                                        <span>Подписка</span>
                                    </h3>
                                    <div className="subscribe__body">
                                        <div className="subscribe__column">
                                            <div className="subscribe__text">
                                                Для получения уведомлений о новых предложениях, введите адрес своей электронной
                                                почты
                                            </div>
                                        </div>
                                        <div className="subscribe__column">
                                            <form action="#" className="subscribe__form form-subscribe">
                                                <div className="form-subscribe__input">
                                                    <input
                                                        autoComplete="off"
                                                        type="text"
                                                        name="form[]"
                                                        data-error="Неверно указан e-mail"
                                                        data-value="Ваш e-mail"
                                                        className="input _req _email"
                                                    />
                                                </div>
                                                <button type="submit" className="form-subscribe__btn">
                                                    <span>ОК</span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default App;
