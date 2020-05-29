webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Cabin&family=Lato&family=Montserrat:wght@300&family=Roboto:wght@700&display=swap);"]);
// Module
exports.push([module.i, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --mainFont: \"Lato\", sans-sarif;\n    --secondaryFont: \"Montserrat\", cursive;\n    --highlight: \"Roboto\", sans-sarif;\n    --bodyFont: \"Cabin\", sans-sarif;\n    --mainFontColorDark: #0b0b0b;\n    --mainFontColor: #515151;\n    --primaryColor: #f6f5f5;\n    --mainWhite: #ffff;\n    --offWhite: #f7f7f7;\n    --mainBlack: #1a1a1a;\n    --mainGrey: #6d6d6d;\n    --darkGrey: #403e3e;\n    --darkShadow: 2px 2px 12px rgba(0, 0, 0, 0.2);\n    --lightShadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);\n}\n\nbody {\n    background-color: var(--primaryColor);\n    margin: 0px;\n    padding: 0px;\n    font-family: var(--mainFont);\n    color: var(--mainGrey);\n    font-size: 1.2rem;\n}\n\nul {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n}\n\np {\n    font-size: 1.6rem;\n}\n\n.link-btn {\n    color: #373636;\n}\n\n.container {\n    width: 100%;\n    margin: 0 auto;\n    padding: 0 2.4rem;\n    justify-items: center;\n}\n\n.btnPrimaryLight {\n    width: 130px;\n    height: 42px;\n    border-radius: 10px;\n    font-family: calibiri;\n    font-weight: bold;\n    font-size: 14px;\n    outline: none;\n    margin: 0px 10px;\n    border: 2px solid #373636;\n    color: #373636;\n    cursor: pointer;\n    text-transform: capitalize;\n}\n\n.btnPrimaryDark {\n    width: 130px;\n    height: 42px;\n    border-radius: 10px;\n    font-family: calibiri;\n    font-weight: bold;\n    font-size: 14px;\n    outline: none;\n    margin: 0px 10px;\n    background-color: #0b0b0b;\n    color: #ffff;\n    border: none;\n    cursor: pointer;\n}\n\nbutton:active {\n    transform: scale(1.1);\n}\n\nsection {\n    padding: 3.9rem 0;\n    width: 100%;\n    /*   background-image: url('../src/images/singleProductBcg.jpeg');  */\n}\n\n.logo {\n    font-family: var(--secondaryFont);\n    color: #000000;\n    font-size: 22px;\n    text-transform: uppercase;\n    letter-spacing: 5px;\n}\n\n\n/*nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 60px;\n    background-color: #ffff;\n    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);\n    padding: 0px 5%;\n    position: fixed;\n    width: 90%;\n}\n\nnav ul {\n    display: flex;\n}\n\nnav ul li a {\n    margin: 30px;\n    font-family: myriad pro regular;\n    color: #505050;\n    font-size: 15px;\n    font-weight: 700;\n    text-transform: capitalize;\n}\n*/\n\n\n/* navigation*/\n\nnav {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 10vh;\n    background-color: #ffff;\n    box-shadow: var(--darkShadow);\n    font-family: var(--mainFont);\n    position: sticky;\n    position: -webkit-sticky;\n    position: fixed;\n    top: 0;\n    width: 100%;\n}\n\n.nav-links {\n    display: flex;\n    justify-content: space-around;\n    width: 40%;\n}\n\n.nav-links a {\n    font-family: var(--mainFont);\n    color: #505050;\n    font-size: 14px;\n    font-weight: bold;\n    letter-spacing: 3px;\n    text-transform: capitalize;\n}\n\n.open-link {\n    font-family: var(--mainFont);\n    color: #505050;\n    font-size: 14px;\n    font-weight: bold;\n    letter-spacing: 3px;\n    text-transform: capitalize;\n}\n\n.toggle {\n    width: 25px;\n    height: 35px;\n    color: #505050;\n    display: none;\n}\n\n@media screen and (max-width: 1626px) {\n    .nav-links {\n        display: flex;\n        justify-content: space-around;\n        width: 60%;\n    }\n}\n\n@media screen and (max-width: 847px) {\n    .nav-links {\n        display: flex;\n        justify-content: space-around;\n        width: 60%;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    body {\n        overflow-x: hidden;\n    }\n    .nav-links {\n        position: absolute;\n        right: 0px;\n        height: 92vh;\n        top: 8vh;\n        font-size: 24px;\n        display: flex;\n        flex-direction: column;\n        background-color: var(--mainWhite);\n        align-items: center;\n        width: 30%;\n        box-shadow: var(--darkShadow);\n        transform: translateX(100%);\n    }\n    .toggle {\n        display: block;\n        cursor: pointer;\n    }\n}\n\n.nav-active {\n    transform: translateX(0%);\n    color: white;\n    position: absolute;\n}\n\n\n/* end navigation*/\n\n\n/******************************/\n\n\n/***Her0 componenet***/\n\n.hero-container {\n    justify-items: center;\n    justify-content: center;\n    align-items: center;\n    overflow: auto;\n    margin-top: 50px;\n}\n\n.provider {\n    width: 90%;\n    height: auto;\n    margin: auto;\n}\n\n.img-container {\n    width: 50%;\n    margin-top: 200px;\n    overflow: auto;\n    float: right;\n    text-align: center;\n    justify-content: space-around;\n    justify-content: center;\n    align-items: center;\n}\n\n.img-container img {\n    float: left;\n    border-style: solid;\n    border-left-style: none;\n    box-shadow: var(--darkShadow);\n}\n\n.text-container .highlights {\n    font-size: 22px;\n    color: var(--mainGrey);\n    padding-left: 50px;\n    margin-bottom: 10px;\n}\n\n.text-container .title-name {\n    font-size: 60px;\n    font-family: var(--highlight);\n    color: var(--mainBlack);\n    text-transform: capitalize;\n}\n\n.text-container .skills {\n    font-size: 20px;\n    padding-bottom: 10px;\n    color: var(--mainGrey);\n}\n\n.text-container {\n    width: 50%;\n    float: left;\n    background-color: var(--offWhite);\n    text-align: center;\n    padding-top: 150px;\n    margin-top: 250px;\n}\n\n@media screen and (max-width: 808px) {\n    .text-container {\n        width: 50%;\n        left: 10%;\n        padding-top: 100px;\n        margin-top: 200px;\n    }\n    .img-container img {\n        float: left;\n        border-style: none;\n        border-left-style: none;\n        box-shadow: var(--darkShadow);\n        height: 350px;\n        margin-top: 90px;\n    }\n    .text-container .highlights {\n        padding-left: 30px;\n    }\n}\n\n@media screen and (max-width: 786px) {\n    .hero-container {\n        justify-items: center;\n        justify-content: center;\n        align-items: center;\n        overflow: auto;\n        margin-top: -180px;\n    }\n    .img-container {\n        width: 100%;\n        margin-top: 20px;\n        align-items: center;\n        justify-content: center;\n        float: none;\n    }\n    .text-container {\n        width: 100%;\n    }\n    .img-container img {\n        border-style: none;\n        border-left-style: none;\n        padding-left: 70px;\n        padding-top: 10px;\n        height: 350px;\n        margin-top: 0px;\n        max-width: 100%;\n        position: relative;\n        align-items: center;\n        justify-content: center;\n    }\n    .text-container .highlights {\n        padding-left: 30px;\n    }\n}\n\n\n/***  end of Her0 componenet***/\n\n\n/******************************/\n\n\n/**Title***/\n\n.section-title {\n    text-align: center;\n    margin-bottom: 4rem;\n    padding-top: 5rem;\n}\n\n.section-title h4 {\n    font-size: 4rem;\n    font-family: var(--mainFont);\n    letter-spacing: 0.5rem;\n    text-transform: capitalize;\n    margin-bottom: 1rem;\n    color: var(--mainFontColor);\n}\n\n.section-title div {\n    width: 20rem;\n    height: 15px;\n    margin: 0 auto;\n    background: var(--darkGrey);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.seperator {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.line {\n    width: 100%;\n    max-width: 8.4rem;\n    height: 0.25rem;\n    background-color: var(--mainGrey);\n    position: relative;\n    animation: grow 2s forwards;\n    animation-delay: 0.9s;\n}\n\n\n/**End of title */\n\n\n/******************************************/\n\n\n/***About   ***/\n\n.about-container {\n    width: 60%;\n    background-color: var(--mainWhite);\n    justify-content: center;\n    display: flex;\n    overflow: auto;\n    margin: auto;\n    margin-top: 20px;\n    border-radius: 15px 50px;\n    box-shadow: var(--darkShadow);\n}\n\n.model-body {\n    width: 50%;\n    float: left;\n}\n\n.about-text-container {\n    width: 70%;\n    float: right;\n    display: block;\n    justify-content: center;\n    display: flex;\n    overflow: auto;\n    margin: auto;\n    text-align: center;\n}\n\n.about-header {\n    font-size: 3rem;\n    text-transform: capitalize;\n    color: var(--mainFontColorDark);\n    font-family: var(--mainFont);\n}\n\n.about-wording {\n    font-size: 1.5rem;\n    font-family: var(--mainFont);\n    color: var(--mainGrey);\n    padding-top: 10px;\n}\n\n@media screen and (max-width: 1704px) {\n    .about-container {\n        width: 70%;\n    }\n}\n\n@media screen and (max-width: 1407px) {\n    .about-container {\n        width: 80%;\n    }\n}\n\n@media screen and (max-width: 1197px) {\n    .about-container {\n        width: 100%;\n    }\n}\n\n@media screen and (max-width: 997px) {\n    .about-container {\n        width: 90%;\n    }\n    .about-text-container {\n        width: 100%;\n        justify-content: space-evenly;\n        position: relative;\n    }\n    .model-body {\n        width: 0%;\n        float: bottom;\n    }\n    .model-body img {\n        width: 0px;\n    }\n}\n\n\n/**** End of about*****/\n\n\n/*******************************/\n\n\n/****project/card container*******/\n\n.grid-container {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    background-color: rgba(255, 255, 255, 0.8);\n    grid-gap: 15px;\n    padding: 20px 0;\n    margin-top: 30px;\n    width: 80%;\n    text-align: center;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    margin-top: 20px;\n    overflow: auto;\n    margin: auto;\n}\n\n.card {\n    grid-template-areas: \"image\" \"text\" \"stats\";\n    font-family: var(--secondaryFont);\n    border-radius: 18px;\n    background: white;\n    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);\n    font-size: 30px;\n    max-width: 410px;\n}\n\n.card-image {\n    grid-area: image;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n    background-size: cover;\n}\n\n.card-text {\n    grid-area: text;\n    margin: 25px;\n}\n\n.card-text .date {\n    color: rgb(255, 7, 110);\n    font-size: 13px;\n    text-transform: capitalize;\n}\n\n.card-text p {\n    color: grey;\n    font-size: 15px;\n    font-weight: 300;\n}\n\n.card-text h2 {\n    margin-top: 0px;\n    font-size: 28px;\n    text-transform: capitalize;\n}\n\n.card-stats {\n    grid-area: stats;\n    display: grid;\n    font-size: 20px;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    background: rgb(255, 7, 110);\n}\n\n.card-stats .stat {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    padding: 10px;\n    color: var(--offWhite);\n}\n\n.card-stats .type {\n    font-size: 11px;\n    font-weight: 300;\n    text-transform: uppercase;\n}\n\n.card-stats .value {\n    font-size: 22px;\n    font-weight: 500;\n}\n\n.value a {\n    color: var(--offWhite);\n}\n\n@media screen and (max-width: 1602px) {\n    .grid-container {\n        grid-gap: 5px;\n        padding: 10px 0;\n        width: 90%;\n    }\n}\n\n@media screen and (max-width: 1434px) {\n    .grid-container {\n        grid-gap: 5px;\n        padding: 10px 0;\n        width: 100%;\n    }\n}\n\n@media screen and (max-width: 1329px) {\n    .grid-container {\n        grid-template-columns: auto auto;\n    }\n}\n\n@media screen and (max-width: 828px) {\n    .grid-container {\n        grid-template-columns: auto;\n    }\n}\n\n\n/*       card/ project ends   **/\n\n\n/*****************************************************/\n\n\n/******* filter page ***************/\n\n.filter-container {\n    width: 50%;\n    height: 20vh;\n    background-color: var(--mainFontColorDark);\n    display: flex;\n    justify-content: center;\n    justify-items: center;\n    margin: auto;\n    padding-top: 20px;\n    margin-top: 20px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    grid-column-gap: 2rem;\n    grid-row-gap: 100px;\n    box-shadow: var(--lightShadow);\n    margin-bottom: 20px;\n}\n\n.grid-container h1 {\n    color: rgb(255, 7, 110);\n    font-size: 2.5rem;\n}\n\n.search-field {\n    height: 50px;\n    padding: 10px;\n    padding-top: 10px;\n    margin-top: 10px;\n    margin-left: 15px;\n    border: none;\n    outline: none;\n    width: 250px;\n    border-radius: 15px;\n    font-family: var(--mainFont);\n}\n\n.type-container {\n    height: 50px;\n    padding: 10px;\n    padding-top: 10px;\n    margin-top: 10px;\n    margin-left: 15px;\n    border: 2px;\n    outline: none;\n    width: 250px;\n    border-radius: 15px;\n    font-family: var(--mainFont);\n}\n\n.filter-item {\n    display: block;\n    background: transparent;\n    border-radius: 0.5rem;\n    border: 2px solid var(--darkGray);\n}\n\nlabel {\n    font-weight: bold;\n    text-transform: capitalize;\n    margin-left: 25px;\n    color: var(--offWhite);\n}\n\n.type-container {\n    font-size: 1.2rem;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n    color: var(--mainFontColor);\n    text-transform: capitalize;\n}\n\n.checkbox label {\n    padding-right: 8px;\n    font-size: 17px;\n}\n\n@media screen and (max-width: 1714px) {\n    .filter-container {\n        width: 60%;\n    }\n}\n\n@media screen and (max-width: 1487px) {\n    .filter-container {\n        width: 80%;\n    }\n}\n\n@media screen and (max-width: 1139px) {\n    .filter-container {\n        width: 100%;\n    }\n    .type-container {\n        width: 150px;\n        width: 100%;\n    }\n    label {\n        font-weight: lighter;\n        font-size: 17px;\n    }\n}\n\n@media screen and (max-width: 881px) {\n    .filter-container {\n        display: grid;\n        height: auto;\n        grid-template-columns: auto;\n        grid-column-gap: 2rem;\n        grid-row-gap: 100px;\n        box-shadow: var(--lightShadow);\n        margin-bottom: 20px;\n        padding-top: 10px;\n        padding-bottom: 15px;\n        margin-top: 10px;\n    }\n    label {\n        font-weight: lighter;\n        text-transform: capitalize;\n        margin-left: 25px;\n        color: var(--offWhite);\n        font-size: 17px;\n    }\n}\n\n\n/**** end of filter*****/\n\n\n/**************************************/\n\n\n/***** Footer ***************/\n\nfooter {\n    width: 100%;\n    background-color: var(--mainFontColorDark);\n    bottom: 0px;\n}\n\n.main-content {\n    display: flex;\n}\n\n.main-content .box {\n    flex-basis: 50%;\n    padding: 10px 20px;\n}\n\n.box h2 {\n    font-size: 1.125rem;\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\n.box .content {\n    margin: 20px 0 0 0;\n}\n\n.left .content p {\n    text-align: center;\n}\n\n.left .content .social {\n    margin: 20px 0 0 0;\n}\n\n.left .content .social a {\n    padding: 0 2px;\n    color: var(--mainWhite);\n}\n\n.icon {}\n\n.left .content .social .icon {\n    height: 40px;\n    width: 40px;\n    text-align: center;\n    font-size: 18px;\n    background: #1a1a1a;\n    border-radius: 5px;\n    padding: 5px;\n    margin-left: 2px;\n    transition: .3s;\n}\n\n.left .content .social .icon:hover {\n    background: #f12020;\n}\n\n.center .content .fas .contact {\n    font-size: 1.4375rem;\n    background: var(--mainFontColorDark);\n    height: 30px;\n    width: 30px;\n    text-align: center;\n    border-radius: 50%;\n    transition: .3s;\n    cursor: pointer;\n}\n\n.center .content .fas .contact:hover {\n    background: #f12020;\n}\n\n.center .content .text {\n    font-size: 1.0625rem;\n    font-weight: 500;\n    padding-left: 10px;\n}\n\n.center .content .phone {\n    margin: 10px 0;\n}\n\n.right form .msg {\n    margin-top: 10px;\n}\n\n.right form input,\n.right form textarea {\n    width: 100%;\n    font-size: 1.0625rem;\n    background: #151515;\n    padding-left: 10px;\n    border: 1px solid #222222;\n}\n\n.right form input:focus,\n.right form textarea:focus {\n    outline: #3498db;\n}\n\n.right form input {\n    height: 35px;\n}\n\n\n/*\n        @media screen and (max-width:1348px) {\n            .text-container {\n                position: absolute;\n                width: 90%;\n                top: 10%;\n            }\n            .media-left {\n                width: 60%;\n            }\n            .media-right {\n                width: 40%;\n            }\n            .model {\n                height: 370px;\n                position: absolute;\n                left: 90%;\n                bottom: 0px;\n            }\n        }\n        \n        @media screen and (max-width:768px) {\n            .text-container {\n                position: absolute;\n                width: 80%;\n                top: 7%;\n                left: 0%;\n                padding-left: 35px;\n                padding-bottom: 10px;\n            }\n            .media-left {\n                width: 80%;\n                left: 0%;\n            }\n            .highlight {\n                font-size: 20px;\n            }\n            .title-name {\n                font-size: 40px;\n            }\n            .skills {\n                font-size: 20px;\n                line-height: 30px;\n                margin-bottom: 10px;\n            }\n            .media-right {\n                width: 40%;\n            }\n            .model {\n                height: 370px;\n                position: relative;\n                left: 100%;\n                bottom: 0px;\n                padding-left: 200px;\n            }\n            .btnPrimaryLight {\n                margin-bottom: 10px;\n            }\n        }*/", ""]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=main.28c8f2fa302607f22999.hot-update.js.map