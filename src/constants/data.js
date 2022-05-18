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

export default { headerMenuItems, userHeaderMenuItems };
