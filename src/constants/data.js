import images from "./images";
const { footerImages, headerImages, lotsImages, lotsAllImages, mainImages, newsImages, quotesImages, servicesImages } = images;

const headerMenuItems = [
    {
        title: "Главная",
        link: "/HomePage",
    },
    {
        title: "Аукцион",
        link: "/Auction",
    },
    {
        title: "О проекте",
        link: "/About",
    },
    {
        title: "Партнерам",
        link: "/ToPartners",
    },
    {
        title: "Контакты",
        link: "/Contacts",
    },
];

const userHeaderMenuItems = [
    {
        title: "Выбор региона",
        img: headerImages.headerGlobe,
        link: "/chooseRegion",
    },
    {
        title: "Личный кабинет",
        img: headerImages.headerKey,
        link: "/userPage",
    },
    {
        title: "Мои ставки",
        img: headerImages.headerHand,
        link: "/myBets",
    },
    {
        title: "Мои Лоты",
        img: headerImages.headerHammer,
        link: "/myLots",
    },
];

const footerMenuItems = [
    {
        title: "Главная",
        link: "/HomePage",
    },
    {
        title: "Аукцион",
        link: "/Auction",
    },
    {
        title: "О проекте",
        link: "/About",
    },
    {
        title: "Партнерам",
        link: "/ToPartners",
    },
    {
        title: "Контакты",
        link: "/Contacts",
    },
    {
        title: "Новости",
        link: "/News",
    },
    {
        title: "FAQ",
        link: "/FAQ",
    },
    {
        title: "Реклама",
        link: "/Promotion",
    },
    {
        title: "Соглашение",
        link: "/Lisense",
    },
    {
        title: "Регистрация",
        link: "/Registration",
    },
    {
        title: "Услуги",
        link: "/Services",
    },
];

const mainSliderSlides = [
    {
        titleLabel: "Только эксклюзивные",
        titleMain: "Лоты под аукцион и свободную продажу",
        text: "Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный и автоматизированный сервис по покупке и продаже.",
        buttonText: "Присоединиться",
        buttonLink: "/join",
    },
    {
        titleLabel: "Неповторимые",
        titleMain: "Закрытые лоты",
        text: "Имущества предприятий, произведений искусства и других объектов, произведений редприятий, произведений искусств.",
        buttonText: "Присоединиться",
        buttonLink: "/join",
    },
];

const lotsItems = [
    {
        image: lotsImages.lot01,
        time: "2023, 1, 1",
        title: "Arnold & Son Worldtimer discovery of antarctica",
        betPrice: "1000000",
        betCurrentPrice: "18999203",
        views: "1098",
        bets: "16",
    },
    {
        image: lotsImages.lot02,
        time: "2022, 12, 21",
        title: "Chateau Lafite 1949",
        betPrice: "100000",
        betCurrentPrice: "245050",
        views: "756",
        bets: "3",
    },
    {
        image: lotsImages.lot03,
        time: "2022, 11, 30",
        title: "Rolex Paul Newman Daytona",
        betPrice: "250000",
        betCurrentPrice: "3245000",
        views: "11",
        bets: "3",
    },
];

const categoriesItems = [
    {
        icon: lotsAllImages.lotsIcon01,
        title: "Часы",
        image: lotsAllImages.lots01,
        link: "/watches",
    },
    {
        icon: lotsAllImages.lotsIcon02,
        title: "Ювелирные изделия",
        image: lotsAllImages.lots02,
        link: "/Jewelry",
    },
    {
        icon: lotsAllImages.lotsIcon03,
        title: "Автотранспорт и лодки",
        image: lotsAllImages.lots03,
        link: "/Authotransport",
    },
    {
        icon: lotsAllImages.lotsIcon04,
        title: "Аксессуары",
        image: lotsAllImages.lots04,
        link: "/Accessories",
    },
    {
        icon: lotsAllImages.lotsIcon05,
        title: "Недвижимость",
        image: lotsAllImages.lots05,
        link: "/The property",
    },
    {
        icon: lotsAllImages.lotsIcon06,
        title: "Hi-tech",
        image: lotsAllImages.lots06,
        link: "/Hi-tech",
    },
    {
        icon: lotsAllImages.lotsIcon07,
        title: "одежда и обувь",
        image: lotsAllImages.lots07,
        link: "/Clothing-shoes",
    },
    {
        icon: lotsAllImages.lotsIcon08,
        title: "предметы искусства",
        image: lotsAllImages.lots08,
        link: "/Arts",
    },
    {
        icon: lotsAllImages.lotsIcon09,
        title: "алкоголь и еда",
        image: lotsAllImages.lots09,
        link: "/Alcohol-and-food",
    },
];

const servicesItems = [
    {
        icon: servicesImages.services01,
        title: "Экспертная оценка",
        text: "Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный",
        link: "/Expert-review",
    },
    {
        icon: servicesImages.services02,
        title: "заказ комплектующих",
        text: "Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный",
        link: "/Order-of-components",
    },
    {
        icon: servicesImages.services03,
        title: "ремонт и реставрациЯ",
        text: "Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный сайт.",
        link: "/Repair-and-restoration",
    },
];

export default {
    headerMenuItems,
    userHeaderMenuItems,
    footerMenuItems,
    mainSliderSlides,
    lotsItems,
    categoriesItems,
    servicesItems,
};
