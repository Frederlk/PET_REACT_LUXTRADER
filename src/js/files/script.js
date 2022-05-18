// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let user_icon = document.querySelector(".user-header__icon");
let user_menu = document.querySelector(".user-header__menu");
user_icon.addEventListener("click", function (e) {
    user_menu.classList.toggle("_active");
});

document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest(".user-header")) {
        user_menu.classList.remove("_active");
    }
});
