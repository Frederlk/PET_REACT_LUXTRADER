import React, { useState } from "react";
import { Keyboard, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { data, images } from "../constants";

const MainSlider = () => {
    const [slideChange, setSlideChange] = useState(false);
    const [disabledButton, setDisabledButton] = useState(false);

    const slides = data.mainSliderSlides.map(({ titleLabel, titleMain, text, buttonText, buttonLink }, i) => (
        <SwiperSlide className="main-slider__item item-main-slider" key={i + titleLabel + buttonLink}>
            <div className="item-main-slider__container">
                <div className="item-main-slider__title title">
                    {titleLabel && <div className="title__item">{titleLabel}</div>}
                    {titleMain && <h2 className="title__main title__main_w title__main_regular">{titleMain}</h2>}
                </div>
                {text && <div className="item-main-slider__text">{text}</div>}
                {buttonLink && (
                    <a href={buttonLink} className="item-main-slider__btn btn">
                        <span className="btn__body">
                            <span>{buttonText}</span>
                        </span>
                    </a>
                )}
            </div>
        </SwiperSlide>
    ));

    const onChangeSlide = () => {
        setDisabledButton(true);
        setSlideChange(true);
        const unDisable = () => {
            setSlideChange(false);
            setDisabledButton(false);
        };
        setTimeout(() => unDisable(), 1000);
    };

    return (
        <section className="main-slider">
            <Swiper
                className="main-slider__swiper"
                modules={[Navigation, Keyboard]}
                loop
                keyboard
                speed={1000}
                observer={true}
                observeParents={true}
                touchRatio={0}
                navigation={{
                    prevEl: ".control-main-slider__arrow_prev",
                    nextEl: ".control-main-slider__arrow_next",
                }}>
                {slides}
            </Swiper>
            <div className="main-slider__control control-main-slider">
                <button
                    disabled={disabledButton}
                    onClick={() => onChangeSlide()}
                    type="button"
                    className="control-main-slider__arrow control-main-slider__arrow_prev">
                    <img src={images.mainImages.arrowMain} alt="Стрелка назад" />
                </button>
                <div className={`control-main-slider__decor ${slideChange ? "_slideChanging" : ""}`}>
                    <img src={images.mainImages.circleMain} alt="Иконка загрузки" />
                </div>
                <button
                    disabled={disabledButton}
                    onClick={() => onChangeSlide()}
                    type="button"
                    className="control-main-slider__arrow control-main-slider__arrow_next">
                    <img src={images.mainImages.arrowMain} alt="Стрелка вперед" />
                </button>
            </div>
            <div className="main-slider__bg-ibg">
                <img src={images.mainImages.bgMain} alt="Задний фон с часами" />
            </div>
        </section>
    );
};

export default MainSlider;
