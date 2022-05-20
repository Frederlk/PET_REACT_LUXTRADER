import { useEffect } from "react";
import { Header, Footer, MainSlider, Lots, Categories, Quotes } from "./_containers";
import * as flsFunctions from "./js/files/functions";
import dynamicAdaptive from "./js/libs/dynamic_adapt";
import Services from "./_containers/Services";

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
                <Services />
                <Quotes />
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
