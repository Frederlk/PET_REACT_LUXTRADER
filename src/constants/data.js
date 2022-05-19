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

export default { headerMenuItems, userHeaderMenuItems, footerMenuItems, mainSliderSlides };
