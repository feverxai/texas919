import $ from 'jquery';
import owlCarousel from 'owl.carousel';
// import LanguageSelector from './modules/LanguageSelector';
import TabMenu from './modules/TabMenu';
// import InstallationSwitcher from './modules/InstallationSwitcher';
// import MobileHeader from './modules/MobileHeader';
// import GameDetail from './modules/GameDetail';
// import PromotionDetail from './modules/PromotionDetail';
// import RegisterValidate from './modules/RegisterValidate';
// import InputHandler from './modules/InputHandler';
// import DepWithSelector from './modules/DepWithSelector';
// import FormValidation from './modules/FormValidation';
// import GetGameDetail from './modules/GetGameDetail';
// import GetPromotionDetail from './modules/GetPromotionDetail';

// var languageSelector = new LanguageSelector();
var tabMenu = new TabMenu();
// var installationSwitcher = new InstallationSwitcher();
// var mobileHeader = new MobileHeader();
// var gameDetail = new GameDetail();
// var promotionDetail = new PromotionDetail();
// var registerValidate = new RegisterValidate();
// var inputHandler = new InputHandler();
// var depWithSelector = new DepWithSelector();
// var formValidation = new FormValidation();
// var getGameDetail = new GetGameDetail();
// var getPromotionDetail = new GetPromotionDetail();

const flatpickr = require("flatpickr");

flatpickr("#transaction_datetime", {
    enableTime: true,
    time_24hr: true,
    defaultDate: "today"
});

$("#banner_slide").owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    nav:false,
    dots:false
    // autoplayTimeout:1000,
    // autoplayHoverPause:true
});
// $("#game_slide").owlCarousel({
//     center: false,
//     items:4,
//     loop:true,
//     margin:10,
//     nav:true,
//     autoplay:true,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:2
//         },
//         426:{
//             items:4
//         }
//     }
// });

