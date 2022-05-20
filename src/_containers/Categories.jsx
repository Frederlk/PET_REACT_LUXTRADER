import React from "react";
import { data, images } from "../constants";

const Categories = () => {
    const categoriesItems = data.categoriesItems.map(({ icon, title, link, image }, i) => (
        <article key={i + title + link} className="categories__column">
            <a href={link} className="categories__item item">
                <div className="item__icon">
                    <img src={icon} alt={title} />
                </div>
                <h4 className="item__title">{title}</h4>
                <div className="item__decor">
                    <img src={images.lotsAllImages.lotsIconModel} alt="Декор" />
                </div>
                <div className="item__bg-ibg">
                    <img src={image} alt={title} />
                </div>
            </a>
            <div className="categories__decor">
                <span></span>
            </div>
        </article>
    ));

    return (
        <section className="categories">
            <div className="categories__container">
                <div className="categories__row">{categoriesItems.length && categoriesItems}</div>
                <div className="categories__text">
                    <p>
                        Мы рады приветствовать вас на уникальной Лакшери аукционе, здесь вы сможете найти достойные для себя лоты.
                        Аукцион по продаже недвижимости во многих развитых странах являюется основным инструментом купли-продажи
                        коммерческой, жилой, и муниципальной недвижимости, в том числе квартир. Общий объем сделок в мире на
                        аукционах по продаже недвижимости варьируется от 30% до 80%. Для России аукцион недвижимости является
                        относительно новым и обретает все большую популярность.
                    </p>
                    <p>
                        Мы рады приветствовать вас на уникальной Лакшери аукционе, здесь вы сможете найти достойные для себя лоты.
                        Аукцион по продаже недвижимости во многих развитых странах являюется основным инструментом купли-продажи
                        коммерческой, жилой, и муниципальной недвижимости, в том числе квартир. Общий объем сделок в мире на
                        аукционах по продаже недвижимости варьируется от 30% до 80%. Для России аукцион недвижимости является
                        относительно новым и обретает все большую популярность.
                    </p>
                    <p>
                        Муниципальной недвижимости, в том числе квартир. Общий объем сделок в мире на аукционах по продаже
                        недвижимости варьируется от 30% до 80%.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Categories;
