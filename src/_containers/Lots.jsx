import React from "react";
import { Keyboard, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { images, data } from "../constants";
import { Timer } from "../_components";

const Lots = () => {
    const slides = data.lotsItems.map(({ image, time, title, betPrice, betCurrentPrice, views, bets }, i) => {
        const link = title.replace(/ /g, "-");
        const formatNum = (number) => number.replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, " $1 ");

        return (
            <SwiperSlide className="lots__lot lot" key={i + title}>
                <div className="lot__header">
                    <a href={link} className="lot__image-ibg">
                        <img src={image} alt={title} />
                    </a>
                    <div className="lot__timer timer-lot">
                        <div className="timer-lot__icon">
                            <img src={images.lotsImages.lotIconTime} alt="Оставшееся время" />
                        </div>
                        <div className="timer-lot__item">
                            <Timer deadline={new Date(time)} />
                        </div>
                    </div>
                </div>
                <a href={link} className="lot__title">
                    {title}
                </a>
                <div className="lot__info info-lot">
                    <div className="info-lot__stat">
                        <div className="info-lot__icon">
                            <img src={images.lotsImages.lotIconEye} alt="Просмотры" />
                        </div>
                        <div className="info-lot__value">{formatNum(views)}</div>
                    </div>
                    <div className="info-lot__current-bet current-bet-info-lot">
                        <div className="current-bet-info-lot__label">Текущая ставка</div>
                        <div className="current-bet-info-lot__value">
                            {formatNum(betCurrentPrice) ? formatNum(betCurrentPrice) : formatNum(betPrice)}
                        </div>
                        <div className="current-bet-info-lot__currency">₽</div>
                    </div>
                    <div className="info-lot__stat">
                        <div className="info-lot__icon">
                            <img src={images.lotsImages.lotIconHand} alt="Ставки" />
                        </div>
                        <div className="info-lot__value">{formatNum(bets)}</div>
                    </div>
                </div>
                <a href={link} className="lot__btn btn btn_big">
                    <span className="btn__body">
                        <span>Поднять Ставку</span>
                    </span>
                </a>
            </SwiperSlide>
        );
    });

    return (
        <section className="lots">
            <div className="lots__container">
                <div className="lots__header header-block">
                    <div className="header-block__title title">
                        <div className="title__item">Популярные</div>
                        <h2 className="title__main">лоты Под аукцион</h2>
                    </div>
                    <div className="header-block__decor">
                        <div className="header-block__item">
                            <span></span>
                        </div>
                        <div className="header-block__icon">
                            <img src={images.lotsImages.lotIconWatch} alt="Иконка Часов" />
                        </div>
                        <div className="header-block__item">
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="lots__slider">
                    <Swiper
                        className="lots__swiper"
                        modules={[Navigation, Keyboard]}
                        loop
                        keyboard
                        speed={1000}
                        observer={true}
                        observeParents={true}
                        slidesPerView={3}
                        navigation={{
                            prevEl: ".lots__arrow_prev",
                            nextEl: ".lots__arrow_next",
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            550: {
                                slidesPerView: 2,
                            },
                            767.98: {
                                slidesPerView: 3,
                            },
                        }}>
                        {slides}
                    </Swiper>
                    <div className="lots__control">
                        <div className="lots__arrow lots__arrow_prev">
                            <img src={images.lotsImages.lotIconArrow} alt="Стрелка Назад" />
                            <span></span>
                        </div>
                        <a href="#" className="lots__link">
                            Все лоты
                            <img src={images.lotsImages.lotIconCircle} alt="Круг" />
                        </a>
                        <div className="lots__arrow lots__arrow_next">
                            <span></span>
                            <img src={images.lotsImages.lotIconArrow} alt="Стрелка Вперед" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Lots;
