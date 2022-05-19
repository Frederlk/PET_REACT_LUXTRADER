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

export default { headerMenuItems, userHeaderMenuItems, footerMenuItems, mainSliderSlides, lotsItems };
