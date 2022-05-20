import React, { useEffect, useState } from "react";
import { Formik, Form as FormikForm, useField } from "formik";
import * as Yup from "yup";
import { format } from "date-fns";
import { data, images } from "../constants";

const FormProductItem = ({ inputMask, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={`form-subscribe__input ${props.className || ""} ${meta.touched && meta.error ? "_error" : ""}`}>
            <input {...props} {...field} className="form-subscribe__input input" />
            {meta.touched && meta.error ? <div className="form-subscribe__error">{meta.error}</div> : null}
        </div>
    );
};

const Info = () => {
    const [newsData, setNewsData] = useState(data.newsItems.slice());

    useEffect(() => {
        setNewsData(newsData.sort((a, b) => b.date - a.date));
    }, []);

    const getMappedItems = (data) => {
        return data.map(({ title, text, link, date }, i) => {
            if (text.length > 100) {
                text = text.substring(0, 100) + "...";
            }
            return (
                <article key={i + title + link} className="info__item">
                    {date && <div className="info__date">{format(date, "dd.MM.yyyy")}</div>}
                    <a href={link} className="info__label">
                        {title}
                    </a>
                    <p className="info__text">{text}</p>
                </article>
            );
        });
    };

    return (
        <section className="info">
            <div className="info__container">
                <div className="info__column">
                    <div className="info__item">
                        <h3 className="info__title title-info">
                            <span>
                                <img src={images.newsImages.news01} alt="Иконка Новостей" />
                            </span>
                            <span>Новости</span>
                        </h3>
                        <div className="info__content">{getMappedItems(data.newsItems)}</div>
                    </div>
                </div>
                <div className="info__column">
                    <div className="info__item">
                        <h3 className="info__title title-info">
                            <span>
                                <img src={images.newsImages.news02} alt="Иконка Событий" />
                            </span>
                            <span>События</span>
                        </h3>
                        <div className="info__content">{getMappedItems(data.eventItems)}</div>
                    </div>
                </div>
                <div className="info__column">
                    <div className="info__subscribe subscribe">
                        <h3 className="subscribe__title title-info">
                            <span>
                                <img src={images.newsImages.news03} alt="Иконка Подписки" />
                            </span>
                            <span>Подписка</span>
                        </h3>
                        <div className="subscribe__body">
                            <div className="subscribe__column">
                                <div className="subscribe__text">
                                    Для получения уведомлений о новых предложениях, введите адрес своей электронной почты
                                </div>
                            </div>
                            <div className="subscribe__column">
                                <Formik
                                    initialValues={{
                                        email: "",
                                    }}
                                    validationSchema={Yup.object({
                                        email: Yup.string().email("Неверно указан e-mail").required("Обязательное поле"),
                                    })}
                                    onSubmit={(values, { resetForm }) => {
                                        resetForm();
                                        console.log(JSON.stringify(values, null, 2));
                                    }}>
                                    <FormikForm className="subscribe__form form-subscribe">
                                        <FormProductItem placeholder="Ваш e-mail" type="text" name="email" />
                                        <button type="submit" className="form-subscribe__btn">
                                            <span>ОК</span>
                                        </button>
                                    </FormikForm>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
