import { useEffect } from "react";
import { Header, Footer, MainSlider, Lots } from "./_containers";
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
                <div className="categories">
                    <div className="categories__container _container">
                        <div className="categories__row">
                            <div className="categories__column">
                                <div className="categories__item item">
                                    <a href="#" className="item__link"></a>
                                    <div className="item__icon">
                                        <img src="img/lots-all/icons/01.png" alt="" />
                                    </div>
                                    <div className="item__title">Часы</div>
                                    <div className="item__decor">
                                        <img src="img/lots-all/icons/_01.png" alt="" />
                                    </div>
                                    <div className="item__bg _ibg">
                                        <img src="img/lots-all/01.png" alt="" />
                                    </div>
                                </div>
                                <div className="categories__decor">
                                    <span></span>
                                </div>
                            </div>
                            <div className="categories__column">
                                <div className="categories__item item">
                                    <a href="#" className="item__link"></a>
                                    <div className="item__icon">
                                        <img src="img/lots-all/icons/02.png" alt="" />
                                    </div>
                                    <div className="item__title">Ювелирные изделия</div>
                                    <div className="item__decor">
                                        <img src="img/lots-all/icons/_01.png" alt="" />
                                    </div>
                                    <div className="item__bg _ibg">
                                        <img src="img/lots-all/02.png" alt="" />
                                    </div>
                                </div>
                                <div className="categories__decor">
                                    <span></span>
                                </div>
                            </div>
                            <div className="categories__column">
                                <div className="categories__item item">
                                    <a href="#" className="item__link"></a>
                                    <div className="item__icon">
                                        <img src="img/lots-all/icons/03.png" alt="" />
                                    </div>
                                    <div className="item__title">Автотранспорт и лодки</div>
                                    <div className="item__decor">
                                        <img src="img/lots-all/icons/_01.png" alt="" />
                                    </div>
                                    <div className="item__bg _ibg">
                                        <img src="img/lots-all/03.png" alt="" />
                                    </div>
                                </div>
                                <div className="categories__decor">
                                    <span></span>
                                </div>
                            </div>
                            <div className="categories__column">
                                <div className="categories__item item">
                                    <a href="#" className="item__link"></a>
                                    <div className="item__icon">
                                        <img src="img/lots-all/icons/04.png" alt="" />
                                    </div>
                                    <div className="item__title">Часы</div>
                                    <div className="item__decor">
                                        <img src="img/lots-all/icons/_01.png" alt="" />
                                    </div>
                                    <div className="item__bg _ibg">
                                        <img src="img/lots-all/04.png" alt="" />
                                    </div>
                                </div>
                                <div className="categories__decor">
                                    <span></span>
                                </div>
                            </div>
                            <div className="categories__column">
                                <div className="categories__item item">
                                    <a href="#" className="item__link"></a>
                                    <div className="item__icon">
                                        <img src="img/lots-all/icons/05.png" alt="" />
                                    </div>
                                    <div className="item__title">Недвижимость</div>
                                    <div className="item__decor">
                                        <img src="img/lots-all/icons/_01.png" alt="" />
                                    </div>
                                    <div className="item__bg _ibg">
                                        <img src="img/lots-all/05.png" alt="" />
                                    </div>
                                </div>
                                <div className="categories__decor">
                                    <span></span>
                                </div>
                            </div>
                            <div className="categories__column">
                                <div className="categories__item item">
                                    <a href="#" className="item__link"></a>
                                    <div className="item__icon">
                                        <img src="img/lots-all/icons/06.png" alt="" />
                                    </div>
                                    <div className="item__title">HI-Tech</div>
                                    <div className="item__decor">
                                        <img src="img/lots-all/icons/_01.png" alt="" />
                                    </div>
                                    <div className="item__bg _ibg">
                                        <img src="img/lots-all/06.png" alt="" />
                                    </div>
                                </div>
                                <div className="categories__decor">
                                    <span></span>
                                </div>
                            </div>
                            <div className="categories__column">
                                <div className="categories__item item">
                                    <a href="#" className="item__link"></a>
                                    <div className="item__icon">
                                        <img src="img/lots-all/icons/07.png" alt="" />
                                    </div>
                                    <div className="item__title">Одежда и обувь</div>
                                    <div className="item__decor">
                                        <img src="img/lots-all/icons/_01.png" alt="" />
                                    </div>
                                    <div className="item__bg _ibg">
                                        <img src="img/lots-all/07.png" alt="" />
                                    </div>
                                </div>
                                <div className="categories__decor">
                                    <span></span>
                                </div>
                            </div>
                            <div className="categories__column">
                                <div className="categories__item item">
                                    <a href="#" className="item__link"></a>
                                    <div className="item__icon">
                                        <img src="img/lots-all/icons/08.png" alt="" />
                                    </div>
                                    <div className="item__title">Предметы искусства</div>
                                    <div className="item__decor">
                                        <img src="img/lots-all/icons/_01.png" alt="" />
                                    </div>
                                    <div className="item__bg _ibg">
                                        <img src="img/lots-all/08.png" alt="" />
                                    </div>
                                </div>
                                <div className="categories__decor">
                                    <span></span>
                                </div>
                            </div>
                            <div className="categories__column">
                                <div className="categories__item item">
                                    <a href="#" className="item__link"></a>
                                    <div className="item__icon">
                                        <img src="img/lots-all/icons/09.png" alt="" />
                                    </div>
                                    <div className="item__title">АЛкоголь и еда</div>
                                    <div className="item__decor">
                                        <img src="img/lots-all/icons/_01.png" alt="" />
                                    </div>
                                    <div className="item__bg _ibg">
                                        <img src="img/lots-all/09.png" alt="" />
                                    </div>
                                </div>
                                <div className="categories__decor">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="categories__text">
                            <p>
                                Мы рады приветствовать вас на уникальной Лакшери аукционе, здесь вы сможете найти достойные для
                                себя лоты. Аукцион по продаже недвижимости во многих развитых странах являюется основным
                                инструментом купли-продажи коммерческой, жилой, и муниципальной недвижимости, в том числе квартир.
                                Общий объем сделок в мире на аукционах по продаже недвижимости варьируется от 30% до 80%. Для
                                России аукцион недвижимости является относительно новым и обретает все большую популярность.
                            </p>
                            <p>
                                Мы рады приветствовать вас на уникальной Лакшери аукционе, здесь вы сможете найти достойные для
                                себя лоты. Аукцион по продаже недвижимости во многих развитых странах являюется основным
                                инструментом купли-продажи коммерческой, жилой, и муниципальной недвижимости, в том числе квартир.
                                Общий объем сделок в мире на аукционах по продаже недвижимости варьируется от 30% до 80%. Для
                                России аукцион недвижимости является относительно новым и обретает все большую популярность.
                            </p>
                            <p>
                                Муниципальной недвижимости, в том числе квартир. Общий объем сделок в мире на аукционах по продаже
                                недвижимости варьируется от 30% до 80%.
                            </p>
                        </div>
                    </div>
                </div>
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
