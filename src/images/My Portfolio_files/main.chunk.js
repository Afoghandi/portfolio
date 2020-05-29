(this["webpackJsonpportfolio"] = this["webpackJsonpportfolio"] || []).push([["main"],{

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
exports.push([module.i, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --mainFont: \"Lato\", sans-sarif;\n    --secondaryFont: \"Montserrat\", cursive;\n    --highlight: \"Roboto\", sans-sarif;\n    --bodyFont: \"Cabin\", sans-sarif;\n    --mainFontColorDark: #0b0b0b;\n    --mainFontColor: #515151;\n    --primaryColor: #f6f5f5;\n    --mainWhite: #ffff;\n    --offWhite: #f7f7f7;\n    --mainBlack: #1a1a1a;\n    --mainGrey: #6d6d6d;\n    --darkGrey: #403e3e;\n    --darkShadow: 2px 2px 12px rgba(0, 0, 0, 0.2);\n    --lightShadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);\n}\n\nbody {\n    background-color: var(--primaryColor);\n    margin: 0px;\n    padding: 0px;\n    font-family: var(--mainFont);\n    color: var(--mainGrey);\n    font-size: 1.2rem;\n}\n\nul {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n}\n\np {\n    font-size: 1.6rem;\n}\n\n.link-btn {\n    color: #373636;\n}\n\n.container {\n    width: 100%;\n    margin: 0 auto;\n    padding: 0 2.4rem;\n    justify-items: center;\n}\n\n.btnPrimaryLight {\n    width: 130px;\n    height: 42px;\n    border-radius: 10px;\n    font-family: calibiri;\n    font-weight: bold;\n    font-size: 14px;\n    outline: none;\n    margin: 0px 10px;\n    border: 2px solid #373636;\n    color: #373636;\n    cursor: pointer;\n    text-transform: capitalize;\n}\n\n.btnPrimaryDark {\n    width: 130px;\n    height: 42px;\n    border-radius: 10px;\n    font-family: calibiri;\n    font-weight: bold;\n    font-size: 14px;\n    outline: none;\n    margin: 0px 10px;\n    background-color: #0b0b0b;\n    color: #ffff;\n    border: none;\n    cursor: pointer;\n}\n\nbutton:active {\n    transform: scale(1.1);\n}\n\nsection {\n    padding: 3.9rem 0;\n    width: 100%;\n    /*   background-image: url('../src/images/singleProductBcg.jpeg');  */\n}\n\n.logo {\n    font-family: var(--secondaryFont);\n    color: #000000;\n    font-size: 22px;\n    text-transform: uppercase;\n    letter-spacing: 5px;\n}\n\n\n/*nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 60px;\n    background-color: #ffff;\n    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);\n    padding: 0px 5%;\n    position: fixed;\n    width: 90%;\n}\n\nnav ul {\n    display: flex;\n}\n\nnav ul li a {\n    margin: 30px;\n    font-family: myriad pro regular;\n    color: #505050;\n    font-size: 15px;\n    font-weight: 700;\n    text-transform: capitalize;\n}\n*/\n\n\n/* navigation*/\n\nnav {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 10vh;\n    background-color: #ffff;\n    box-shadow: var(--darkShadow);\n    font-family: var(--mainFont);\n    position: sticky;\n    position: -webkit-sticky;\n    position: fixed;\n    top: 0;\n    width: 100%;\n}\n\n.nav-links {\n    display: flex;\n    justify-content: space-around;\n    width: 40%;\n}\n\n.nav-links a {\n    font-family: var(--mainFont);\n    color: #505050;\n    font-size: 14px;\n    font-weight: bold;\n    letter-spacing: 3px;\n    text-transform: capitalize;\n}\n\n.open-link {\n    font-family: var(--mainFont);\n    color: #505050;\n    font-size: 14px;\n    font-weight: bold;\n    letter-spacing: 3px;\n    text-transform: capitalize;\n}\n\n.toggle {\n    width: 25px;\n    height: 35px;\n    color: #505050;\n    display: none;\n}\n\n@media screen and (max-width: 1626px) {\n    .nav-links {\n        display: flex;\n        justify-content: space-around;\n        width: 60%;\n    }\n}\n\n@media screen and (max-width: 847px) {\n    .nav-links {\n        display: flex;\n        justify-content: space-around;\n        width: 60%;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    body {\n        overflow-x: hidden;\n    }\n    .nav-links {\n        position: absolute;\n        right: 0px;\n        height: 92vh;\n        top: 8vh;\n        font-size: 24px;\n        display: flex;\n        flex-direction: column;\n        background-color: var(--mainWhite);\n        align-items: center;\n        width: 30%;\n        box-shadow: var(--darkShadow);\n        transform: translateX(100%);\n    }\n    .toggle {\n        display: block;\n        cursor: pointer;\n    }\n}\n\n.nav-active {\n    transform: translateX(0%);\n    color: white;\n    position: absolute;\n}\n\n\n/* end navigation*/\n\n\n/******************************/\n\n\n/***Her0 componenet***/\n\n.hero-container {\n    justify-items: center;\n    justify-content: center;\n    align-items: center;\n    overflow: auto;\n    margin-top: 50px;\n}\n\n.provider {\n    width: 90%;\n    height: auto;\n    margin: auto;\n}\n\n.img-container {\n    width: 50%;\n    margin-top: 200px;\n    overflow: auto;\n    float: right;\n    text-align: center;\n    justify-content: space-around;\n    justify-content: center;\n    align-items: center;\n}\n\n.img-container img {\n    float: left;\n    border-style: solid;\n    border-left-style: none;\n    box-shadow: var(--darkShadow);\n}\n\n.text-container .highlights {\n    font-size: 22px;\n    color: var(--mainGrey);\n    padding-left: 50px;\n    margin-bottom: 10px;\n}\n\n.text-container .title-name {\n    font-size: 60px;\n    font-family: var(--highlight);\n    color: var(--mainBlack);\n    text-transform: capitalize;\n}\n\n.text-container .skills {\n    font-size: 20px;\n    padding-bottom: 10px;\n    color: var(--mainGrey);\n}\n\n.text-container {\n    width: 50%;\n    float: left;\n    background-color: var(--offWhite);\n    text-align: center;\n    padding-top: 150px;\n    margin-top: 250px;\n}\n\n@media screen and (max-width: 808px) {\n    .text-container {\n        width: 50%;\n        left: 10%;\n        padding-top: 100px;\n        margin-top: 200px;\n    }\n    .img-container img {\n        float: left;\n        border-style: none;\n        border-left-style: none;\n        box-shadow: var(--darkShadow);\n        height: 350px;\n        margin-top: 90px;\n    }\n    .text-container .highlights {\n        padding-left: 30px;\n    }\n}\n\n@media screen and (max-width: 786px) {\n    .hero-container {\n        justify-items: center;\n        justify-content: center;\n        align-items: center;\n        overflow: auto;\n        margin-top: -180px;\n    }\n    .img-container {\n        width: 100%;\n        margin-top: 20px;\n        align-items: center;\n        justify-content: center;\n        float: none;\n    }\n    .text-container {\n        width: 100%;\n    }\n    .img-container img {\n        border-style: none;\n        border-left-style: none;\n        padding-left: 70px;\n        padding-top: 10px;\n        height: 350px;\n        margin-top: 0px;\n        max-width: 100%;\n        position: relative;\n        align-items: center;\n        justify-content: center;\n    }\n    .text-container .highlights {\n        padding-left: 30px;\n    }\n}\n\n\n/***  end of Her0 componenet***/\n\n\n/******************************/\n\n\n/**Title***/\n\n.section-title {\n    text-align: center;\n    margin-bottom: 4rem;\n    padding-top: 5rem;\n}\n\n.section-title h4 {\n    font-size: 4rem;\n    font-family: var(--mainFont);\n    letter-spacing: 0.5rem;\n    text-transform: capitalize;\n    margin-bottom: 1rem;\n    color: var(--mainFontColor);\n}\n\n.section-title div {\n    width: 20rem;\n    height: 15px;\n    margin: 0 auto;\n    background: var(--darkGrey);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.seperator {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.line {\n    width: 100%;\n    max-width: 8.4rem;\n    height: 0.25rem;\n    background-color: var(--mainGrey);\n    position: relative;\n    animation: grow 2s forwards;\n    animation-delay: 0.9s;\n}\n\n\n/**End of title */\n\n\n/******************************************/\n\n\n/***About   ***/\n\n.about-container {\n    width: 60%;\n    background-color: var(--mainWhite);\n    justify-content: center;\n    display: flex;\n    overflow: auto;\n    margin: auto;\n    margin-top: 20px;\n    border-radius: 15px 50px;\n    box-shadow: var(--darkShadow);\n}\n\n.model-body {\n    width: 50%;\n    float: left;\n}\n\n.about-text-container {\n    width: 70%;\n    float: right;\n    display: block;\n    justify-content: center;\n    display: flex;\n    overflow: auto;\n    margin: auto;\n    text-align: center;\n}\n\n.about-header {\n    font-size: 3rem;\n    text-transform: capitalize;\n    color: var(--mainFontColorDark);\n    font-family: var(--mainFont);\n}\n\n.about-wording {\n    font-size: 1.5rem;\n    font-family: var(--mainFont);\n    color: var(--mainGrey);\n    padding-top: 10px;\n}\n\n@media screen and (max-width: 1704px) {\n    .about-container {\n        width: 70%;\n    }\n}\n\n@media screen and (max-width: 1407px) {\n    .about-container {\n        width: 80%;\n    }\n}\n\n@media screen and (max-width: 1197px) {\n    .about-container {\n        width: 100%;\n    }\n}\n\n@media screen and (max-width: 997px) {\n    .about-container {\n        width: 90%;\n    }\n    .about-text-container {\n        width: 100%;\n        justify-content: space-evenly;\n        position: relative;\n    }\n    .model-body {\n        width: 0%;\n        float: bottom;\n    }\n    .model-body img {\n        width: 0px;\n    }\n}\n\n\n/**** End of about*****/\n\n\n/*******************************/\n\n\n/****project/card container*******/\n\n.grid-container {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    background-color: rgba(255, 255, 255, 0.8);\n    grid-gap: 15px;\n    padding: 20px 0;\n    margin-top: 30px;\n    width: 80%;\n    text-align: center;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    margin-top: 20px;\n    overflow: auto;\n    margin: auto;\n}\n\n.card {\n    grid-template-areas: \"image\" \"text\" \"stats\";\n    font-family: var(--secondaryFont);\n    border-radius: 18px;\n    background: white;\n    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);\n    font-size: 30px;\n    max-width: 410px;\n}\n\n.card-image {\n    grid-area: image;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n    background-size: cover;\n}\n\n.card-text {\n    grid-area: text;\n    margin: 25px;\n}\n\n.card-text .date {\n    color: rgb(255, 7, 110);\n    font-size: 13px;\n    text-transform: capitalize;\n}\n\n.card-text p {\n    color: grey;\n    font-size: 15px;\n    font-weight: 300;\n}\n\n.card-text h2 {\n    margin-top: 0px;\n    font-size: 28px;\n    text-transform: capitalize;\n}\n\n.card-stats {\n    grid-area: stats;\n    display: grid;\n    font-size: 20px;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    background: rgb(255, 7, 110);\n}\n\n.card-stats .stat {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    padding: 10px;\n    color: var(--offWhite);\n}\n\n.card-stats .type {\n    font-size: 11px;\n    font-weight: 300;\n    text-transform: uppercase;\n}\n\n.card-stats .value {\n    font-size: 22px;\n    font-weight: 500;\n}\n\n.value a {\n    color: var(--offWhite);\n}\n\n@media screen and (max-width: 1602px) {\n    .grid-container {\n        grid-gap: 5px;\n        padding: 10px 0;\n        width: 90%;\n    }\n}\n\n@media screen and (max-width: 1434px) {\n    .grid-container {\n        grid-gap: 5px;\n        padding: 10px 0;\n        width: 100%;\n    }\n}\n\n@media screen and (max-width: 1329px) {\n    .grid-container {\n        grid-template-columns: auto auto;\n    }\n}\n\n@media screen and (max-width: 828px) {\n    .grid-container {\n        grid-template-columns: auto;\n    }\n}\n\n\n/*       card/ project ends   **/\n\n\n/*****************************************************/\n\n\n/******* filter page ***************/\n\n.filter-container {\n    width: 50%;\n    height: 20vh;\n    background-color: var(--mainFontColorDark);\n    display: flex;\n    justify-content: center;\n    justify-items: center;\n    margin: auto;\n    padding-top: 20px;\n    margin-top: 20px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    grid-column-gap: 2rem;\n    grid-row-gap: 100px;\n    box-shadow: var(--lightShadow);\n    margin-bottom: 20px;\n}\n\n.grid-container h1 {\n    color: rgb(255, 7, 110);\n    font-size: 2.5rem;\n}\n\n.search-field {\n    height: 50px;\n    padding: 10px;\n    padding-top: 10px;\n    margin-top: 10px;\n    margin-left: 15px;\n    border: none;\n    outline: none;\n    width: 250px;\n    border-radius: 15px;\n    font-family: var(--mainFont);\n}\n\n.type-container {\n    height: 50px;\n    padding: 10px;\n    padding-top: 10px;\n    margin-top: 10px;\n    margin-left: 15px;\n    border: 2px;\n    outline: none;\n    width: 250px;\n    border-radius: 15px;\n    font-family: var(--mainFont);\n}\n\n.filter-item {\n    display: block;\n    background: transparent;\n    border-radius: 0.5rem;\n    border: 2px solid var(--darkGray);\n}\n\nlabel {\n    font-weight: bold;\n    text-transform: capitalize;\n    margin-left: 25px;\n    color: var(--offWhite);\n}\n\n.type-container {\n    font-size: 1.2rem;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n    color: var(--mainFontColor);\n    text-transform: capitalize;\n}\n\n.checkbox label {\n    padding-right: 8px;\n    font-size: 17px;\n}\n\n@media screen and (max-width: 1714px) {\n    .filter-container {\n        width: 60%;\n    }\n}\n\n@media screen and (max-width: 1487px) {\n    .filter-container {\n        width: 80%;\n    }\n}\n\n@media screen and (max-width: 1139px) {\n    .filter-container {\n        width: 100%;\n    }\n    .type-container {\n        width: 150px;\n        width: 100%;\n    }\n    label {\n        font-weight: lighter;\n        font-size: 17px;\n    }\n}\n\n@media screen and (max-width: 881px) {\n    .filter-container {\n        display: grid;\n        height: auto;\n        grid-template-columns: auto;\n        grid-column-gap: 2rem;\n        grid-row-gap: 100px;\n        box-shadow: var(--lightShadow);\n        margin-bottom: 20px;\n        padding-top: 10px;\n        padding-bottom: 15px;\n        margin-top: 10px;\n    }\n    label {\n        font-weight: lighter;\n        text-transform: capitalize;\n        margin-left: 25px;\n        color: var(--offWhite);\n        font-size: 17px;\n    }\n}\n\n\n/**** end of filter*****/\n\n\n/**************************************/\n\n\n/***** Footer ***************/\n\nfooter {\n    width: 100%;\n    background-color: var(--mainFontColorDark);\n    bottom: 0px;\n}\n\n.main-content {\n    display: flex;\n}\n\n.main-content .box {\n    flex-basis: 50%;\n    padding: 10px 20px;\n}\n\n.box h2 {\n    font-size: 1.125rem;\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\n.box .content {\n    margin: 20px 0 0 0;\n}\n\n.left .content p {\n    text-align: center;\n}\n\n.left .content .social {\n    margin: 20px 0 0 0;\n}\n\n.left .content .social a {\n    padding: 0 2px;\n    color: var(--mainWhite);\n}\n\n.icon {}\n\n.left .content .social .icon {\n    height: 40px;\n    width: 40px;\n    text-align: center;\n    font-size: 18px;\n    background: #1a1a1a;\n    border-radius: 5px;\n    padding: 5px;\n    margin-left: 2px;\n    transition: .3s;\n}\n\n.left .content .social .icon:hover {\n    background: #f12020;\n}\n\n.center .content .fas .contact {\n    font-size: 1.4375rem;\n    background: var(--mainFontColorDark);\n    height: 45px;\n    width: 45px;\n    text-align: center;\n    border-radius: 50%;\n    transition: .3s;\n}\n\n.center .content .fas:hover {\n    background: #f12020;\n}\n\n\n/*\n        @media screen and (max-width:1348px) {\n            .text-container {\n                position: absolute;\n                width: 90%;\n                top: 10%;\n            }\n            .media-left {\n                width: 60%;\n            }\n            .media-right {\n                width: 40%;\n            }\n            .model {\n                height: 370px;\n                position: absolute;\n                left: 90%;\n                bottom: 0px;\n            }\n        }\n        \n        @media screen and (max-width:768px) {\n            .text-container {\n                position: absolute;\n                width: 80%;\n                top: 7%;\n                left: 0%;\n                padding-left: 35px;\n                padding-bottom: 10px;\n            }\n            .media-left {\n                width: 80%;\n                left: 0%;\n            }\n            .highlight {\n                font-size: 20px;\n            }\n            .title-name {\n                font-size: 40px;\n            }\n            .skills {\n                font-size: 20px;\n                line-height: 30px;\n                margin-bottom: 10px;\n            }\n            .media-right {\n                width: 40%;\n            }\n            .model {\n                height: 370px;\n                position: relative;\n                left: 100%;\n                bottom: 0px;\n                padding-left: 200px;\n            }\n            .btnPrimaryLight {\n                margin-bottom: 10px;\n            }\n        }*/", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/HomePage */ "./src/pages/HomePage.js");
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/About */ "./src/pages/About.js");
/* harmony import */ var _pages_Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Project */ "./src/pages/Project.js");
/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Contact */ "./src/pages/Contact.js");
/* harmony import */ var _pages_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Error */ "./src/pages/Error.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/App.js";











function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _pages_HomePage__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/project/",
    component: _pages_Project__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/contact/",
    component: _pages_Contact__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: _pages_Error__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./src/components/context/context.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/components/Footer.js";



function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_1__["ProjectConsumer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, value => {
    const {
      social
    } = value;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "left box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, "Ralphael"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 10
      }
    }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Delectus, quam.Sit accusantium rerum iure impedit fugiat!Nihil quaerat illo voluptates vitae molestias, rerum numquam necessitatibus. Perferendis aut voluptas consectetur eligendi.", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "social",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 10
      }
    }, social.map(item => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: item.url,
        className: "icon",
        key: item.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fab",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 14
        }
      }, item.icon));
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "center box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "place",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fas",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaMapMarkerAlt"], {
      className: "contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 12
      }
    }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }, " Estcourt Close, Gloucester")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fas",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaPhoneAlt"], {
      className: "contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 12
      }
    }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }, " 07584040980")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fas",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaEnvelopeOpen"], {
      className: "contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 12
      }
    }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }, " ralphaeloshun@gmail.com")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "right box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, "Contact me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      action: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 12
      }
    }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "email",
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 12
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "msg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 12
      }
    }, "message*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
      rows: "2",
      cols: "25",
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 12
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 12
      }
    }, "send")))))));
  });
}

/***/ }),

/***/ "./src/components/Hero.js":
/*!********************************!*\
  !*** ./src/components/Hero.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/components/Hero.js";

function Hero({
  highlight,
  name,
  skills,
  img,
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "provider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "highlights",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 8
    }
  }, " ", highlight, " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 8
    }
  }, " ", name, " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "skills ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 8
    }
  }, " ", skills, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 18
    }
  }), " | PhotoShop | MongoDB", " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btnPrimaryLight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 8
    }
  }, " ", children, " "), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img,
    alt: "model",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 8
    }
  })), " "), " "), " "), " ");
}
Hero.defaultProps = {
  hero: "defaultHero"
};

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_context_NavLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/context/NavLinks */ "./src/components/context/NavLinks.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/components/NavBar.js";





class NavBar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      isOpen: false
    };

    this.handleToggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 6
      }
    }, " Ralphael "), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: this.state.isOpen ? "nav-links open-link nav-active" : "nav-links",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }
    }, " ", _components_context_NavLinks__WEBPACK_IMPORTED_MODULE_1__["NavLink"].map(item => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: item.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 8
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        className: "open-link",
        to: item.path,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }, " ", item.name, " "), " ");
    }), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiAlignCenter"], {
      className: "toggle",
      onClick: this.handleToggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }
    }), " ");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/Title.js":
/*!*********************************!*\
  !*** ./src/components/Title.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Title; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/components/Title.js";

function Title({
  title
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "seperator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  })));
}

/***/ }),

/***/ "./src/components/context/Data.js":
/*!****************************************!*\
  !*** ./src/components/context/Data.js ***!
  \****************************************/
/*! exports provided: items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony import */ var _images_hat1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/hat1.jpg */ "./src/images/hat1.jpg");
/* harmony import */ var _images_hat1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_hat1_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_defaultBcg_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/defaultBcg.jpeg */ "./src/images/defaultBcg.jpeg");
/* harmony import */ var _images_defaultBcg_jpeg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_defaultBcg_jpeg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_singleProductBcg_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/singleProductBcg.jpeg */ "./src/images/singleProductBcg.jpeg");
/* harmony import */ var _images_singleProductBcg_jpeg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_singleProductBcg_jpeg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_react_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/react.png */ "./src/images/react.png");
/* harmony import */ var _images_react_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_react_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_blackdodge_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/blackdodge.jpg */ "./src/images/blackdodge.jpg");
/* harmony import */ var _images_blackdodge_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_blackdodge_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_HAJJ_2018_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/HAJJ-2018.png */ "./src/images/HAJJ-2018.png");
/* harmony import */ var _images_HAJJ_2018_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_HAJJ_2018_png__WEBPACK_IMPORTED_MODULE_5__);






const items = [{
  sys: {
    id: 0
  },
  fields: {
    title: "hotel",
    type: "lifestyle",
    style: "Class component",
    gitHub: "https://github.com/Afoghandi/Resort-Beach-Tut.git",
    liveDemo: "https://react-beach-app-tut.netlify.app",
    description: "I used class based component to build this visualling appealling website. You have options to search the products too",
    image: {
      fields: {
        file: {
          url: _images_defaultBcg_jpeg__WEBPACK_IMPORTED_MODULE_1___default.a
        }
      }
    },
    payment: false,
    classComponent: true,
    functionComponent: false,
    hooks: false,
    api: false,
    redux: false,
    MongoDbi: false
  }
}, {
  sys: {
    id: 1
  },
  fields: {
    title: "Gee swag",
    type: "e-commerce",
    style: "function component",
    description: " I used function based component to build this visualling appealling website. You have options to search the products too",
    gitHub: "https://github.com/Afoghandi/gee-swag.git",
    liveDemo: "https://gee-swag.netlify.app",
    image: {
      fields: {
        file: {
          url: _images_hat1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a
        }
      }
    },
    payment: false,
    classComponent: false,
    functionComponent: true,
    hooks: false,
    api: false,
    redux: false,
    MongoDbi: false
  }
}, {
  sys: {
    id: 2
  },
  fields: {
    title: "Tech- star",
    type: "e-commerce",
    style: "Function component",
    description: "This website has a paypal payment option and a form submittion as well!!. I used function based component to build this visualling appealling website. You have options to search the products too",
    gitHub: "https://github.com/Afoghandi/tech-store.git",
    liveDemo: "https://amazontech.netlify.app",
    image: {
      fields: {
        file: {
          url: _images_singleProductBcg_jpeg__WEBPACK_IMPORTED_MODULE_2___default.a
        }
      }
    },
    payment: true,
    classComponent: false,
    functionComponent: true,
    hooks: false,
    api: false,
    redux: false,
    MongoDbi: false
  }
}, {
  sys: {
    id: 3
  },
  fields: {
    title: "To Do List",
    type: "App",
    style: "React Hooks",
    description: "This is a staple for all react. One has to build a To do list. I used React Hooks and function based component to build this visualling appealling website. ",
    gitHub: "https://github.com/Afoghandi/to-do-list.git",
    liveDemo: "https://todo-with-huks.netlify.app",
    image: {
      fields: {
        file: {
          url: _images_react_png__WEBPACK_IMPORTED_MODULE_3___default.a
        }
      }
    },
    payment: false,
    classComponent: false,
    functionComponent: true,
    hooks: true,
    api: false,
    redux: false,
    MongoDbi: false
  }
}, {
  sys: {
    id: 4
  },
  fields: {
    title: "Budget",
    type: "App",
    style: "React Hooks",
    description: "This is a staple for all react. One has to build a budget calculator. I used React Hooks and function based component to build this visualling appealling website. ",
    gitHub: "https://github.com/Afoghandi/budget-calculator.git",
    liveDemo: "https://hook-budget-calculator.netlify.app",
    image: {
      fields: {
        file: {
          url: _images_react_png__WEBPACK_IMPORTED_MODULE_3___default.a
        }
      }
    },
    payment: false,
    classComponent: false,
    functionComponent: false,
    hooks: true,
    api: false,
    redux: false,
    MongoDbi: false
  }
}, {
  sys: {
    id: 5
  },
  fields: {
    title: "city-tours",
    type: "LifeStyle",
    style: "Class Components",
    description: "One of my first projects I made. Had lots of fun doing it. It's simple but demonstrates the key skill I needed to continue my growth ",
    gitHub: "https://github.com/Afoghandi/budget-calculator.git",
    liveDemo: "https://city-tours-firstever.netlify.app",
    image: {
      fields: {
        file: {
          url: _images_react_png__WEBPACK_IMPORTED_MODULE_3___default.a
        }
      }
    },
    payment: false,
    classComponent: true,
    functionComponent: false,
    hooks: false,
    api: false,
    redux: false,
    MongoDbi: false
  }
}, {
  sys: {
    id: 6
  },
  fields: {
    title: "imam",
    type: "Travel",
    style: "Class Components",
    description: "Iused class based component to build this visualling appealling website. You have options to search the products too. ",
    liveDemo: "https://www.imamtravels.com",
    gitHub: "https://github.com/Afoghandi/imam-travels.git",
    image: {
      fields: {
        file: {
          url: _images_HAJJ_2018_png__WEBPACK_IMPORTED_MODULE_5___default.a
        }
      }
    },
    payment: false,
    classComponent: true,
    functionComponent: false,
    hooks: false,
    api: false,
    redux: false,
    MongoDbi: false
  }
}, {
  sys: {
    id: 7
  },
  fields: {
    title: "car",
    type: "Luxury",
    style: "Class Components",
    description: "I really went for style on this one to show case my CSS prowress. The site was built on classed based component and deployed via Netlify ",
    liveDemo: "https://luxury-cars.netlify.app",
    gitHub: "https://github.com/Afoghandi/luxury-cars.git",
    image: {
      fields: {
        file: {
          url: _images_blackdodge_jpg__WEBPACK_IMPORTED_MODULE_4___default.a
        }
      }
    },
    payment: false,
    classComponent: true,
    functionComponent: false,
    hooks: false,
    api: false,
    redux: false,
    MongoDbi: false
  }
}];

/***/ }),

/***/ "./src/components/context/NavLinks.js":
/*!********************************************!*\
  !*** ./src/components/context/NavLinks.js ***!
  \********************************************/
/*! exports provided: NavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
const NavLink = [{
  id: 1,
  name: "home",
  path: "/"
}, {
  id: 2,
  name: "projects",
  path: "/project"
}, {
  id: 3,
  name: "contact",
  path: "/contact"
}];

/***/ }),

/***/ "./src/components/context/SocialLinks.js":
/*!***********************************************!*\
  !*** ./src/components/context/SocialLinks.js ***!
  \***********************************************/
/*! exports provided: SocialLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLinks", function() { return SocialLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/components/context/SocialLinks.js";


const SocialLinks = [{
  id: 1,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaFacebook"], {
    className: "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }),
  url: "https://www.facebook.com"
}, {
  id: 2,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaTwitter"], {
    className: "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }),
  url: "https://www.twitter.com"
}, {
  id: 3,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaInstagram"], {
    className: "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }),
  url: "https://www.instagram.com"
}, {
  id: 4,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaYoutube"], {
    className: "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }),
  url: "https://www.youtube.com"
}];

/***/ }),

/***/ "./src/components/context/context.js":
/*!*******************************************!*\
  !*** ./src/components/context/context.js ***!
  \*******************************************/
/*! exports provided: ProjectProvider, ProjectConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectProvider", function() { return ProjectProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectConsumer", function() { return ProjectConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SocialLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialLinks */ "./src/components/context/SocialLinks.js");
/* harmony import */ var _NavLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavLinks */ "./src/components/context/NavLinks.js");
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Data */ "./src/components/context/Data.js");
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/components/context/context.js";




const ProjectContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

class ProjectProvider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      links: _NavLinks__WEBPACK_IMPORTED_MODULE_2__["NavLink"],
      social: _SocialLinks__WEBPACK_IMPORTED_MODULE_1__["SocialLinks"],
      allProjects: [],
      filteredProjects: [],
      featuredProject: [],
      type: "all",
      search: "",
      payment: false,
      classComponent: false,
      functionComponent: false,
      hooks: false,
      api: false,
      redux: false,
      MongoDbi: false
    };

    this.setProjects = projects => {
      //store all products in variable
      let allProjects = projects.map(item => {
        let {
          id
        } = item.sys;
        let image = item.fields.image.fields.file.url;
        let project = {
          id,
          ...item.fields,
          image
        };
        return project;
      });
      this.setState({
        allProjects,
        filteredProjects: allProjects
      });
    };

    this.handleChange = e => {
      const name = e.target.name;
      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      this.setState({
        [name]: value
      }, this.sortProjects);
    };

    this.sortProjects = () => {
      const {
        type,
        allProjects,
        payment,
        classComponent,
        functionComponent,
        hooks,
        api,
        redux,
        MongoDbi
      } = this.state;
      let tempProject = [...allProjects]; //check payment check box

      if (payment) {
        tempProject = tempProject.filter(item => item.payment === true);
      } //check class component check box


      if (classComponent) {
        tempProject = tempProject.filter(item => item.classComponent === true);
      } // check function component checkbox


      if (functionComponent) {
        tempProject = tempProject.filter(item => item.functionComponent === true);
      } //check hooks component checkbox


      if (hooks) {
        tempProject = tempProject.filter(item => item.hooks === true);
      } //check api component checkbox


      if (api) {
        tempProject = tempProject.filter(item => item.api === true);
      } //check mongo component checkbox


      if (MongoDbi) {
        tempProject = tempProject.filter(item => item.MongoDbi === true);
      } //check redux component checkbox


      if (redux) {
        tempProject = tempProject.filter(item => item.redux === true);
      } //check drop function


      if (type !== "all") {
        tempProject = tempProject.filter(item => item.type === type);
      }

      this.setState({
        filteredProjects: tempProject
      });
    };
  }

  componentDidMount() {
    this.setProjects(_Data__WEBPACK_IMPORTED_MODULE_3__["items"]);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectContext.Provider, {
      value: { ...this.state,
        handleChange: this.handleChange
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 4
      }
    }, this.props.children);
  }

}

const ProjectConsumer = ProjectContext.Consumer;


/***/ }),

/***/ "./src/components/project/FilterProject.js":
/*!*************************************************!*\
  !*** ./src/components/project/FilterProject.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterProject; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./src/components/context/context.js");
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/components/project/FilterProject.js";


function FilterProject() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_1__["ProjectConsumer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, value => {
    const {
      allProjects,
      handleChange,
      type,
      style,
      payment,
      classComponent,
      functionComponent,
      hooks,
      api,
      redux,
      MongoDbi
    } = value;
    let types = new Set();
    types.add("all");

    for (let type in allProjects) {
      types.add(allProjects[type]["type"]);
    }

    types = [...types];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "type",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "type",
      id: "type",
      className: "type-container",
      value: type,
      onChange: handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, types.map((type, id) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: id,
        value: type,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 12
        }
      }, type, " ");
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "payment",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, "payment option"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "payment",
      onChange: handleChange,
      checked: payment && true,
      id: "payment",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "classComponent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, "class component"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "classComponent",
      onChange: handleChange,
      checked: classComponent && true,
      id: "classComponent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "functionComponent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }
    }, "functional component"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "functionComponent",
      onChange: handleChange,
      checked: functionComponent && true,
      id: "functionComponent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "hooks",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }, "hooks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "hooks",
      onChange: handleChange,
      checked: hooks && true,
      id: "hooks",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "api",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }
    }, "api"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "api",
      onChange: handleChange,
      checked: api && true,
      id: "api",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "redux",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }
    }, "redux"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "redux",
      onChange: handleChange,
      checked: redux && true,
      id: "redux",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "MongoDbi",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }
    }, "MongoDbi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "MongoDbi",
      onChange: handleChange,
      checked: MongoDbi && true,
      id: "MongoDbi",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }))));
  });
}

/***/ }),

/***/ "./src/components/project/ProjectDisplay.js":
/*!**************************************************!*\
  !*** ./src/components/project/ProjectDisplay.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectDisplay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/components/project/ProjectDisplay.js";

function ProjectDisplay({
  project
}) {
  const {
    title,
    description,
    type,
    image,
    liveDemo,
    gitHub,
    style
  } = project;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image,
    alt: "project",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, style), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-stats",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: gitHub,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "gitHub"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "type",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 8
    }
  }, " code")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "5123",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }, " -click-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 8
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 8
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: liveDemo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "live")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "type",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 8
    }
  }, " demo"))))));
}

/***/ }),

/***/ "./src/components/project/project.js":
/*!*******************************************!*\
  !*** ./src/components/project/project.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./src/components/context/context.js");
/* harmony import */ var _ProjectDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectDisplay */ "./src/components/project/ProjectDisplay.js");
/* harmony import */ var _FilterProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterProject */ "./src/components/project/FilterProject.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Title */ "./src/components/Title.js");
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/components/project/project.js";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_1__["ProjectConsumer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, value => {
    const {
      filteredProjects
    } = value;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 6
      }
    }, "Total:", filteredProjects.length, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "projects",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FilterProject__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "grid-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, filteredProjects.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, " Sorry no items match your search") : filteredProjects.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectDisplay__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      project: item,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 10
      }
    }))));
  });
});

/***/ }),

/***/ "./src/images/HAJJ-2018.png":
/*!**********************************!*\
  !*** ./src/images/HAJJ-2018.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/HAJJ-2018.b4d981e7.png";

/***/ }),

/***/ "./src/images/blackdodge.jpg":
/*!***********************************!*\
  !*** ./src/images/blackdodge.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/blackdodge.5e57a781.jpg";

/***/ }),

/***/ "./src/images/body.png":
/*!*****************************!*\
  !*** ./src/images/body.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/body.febabbb6.png";

/***/ }),

/***/ "./src/images/defaultBcg.jpeg":
/*!************************************!*\
  !*** ./src/images/defaultBcg.jpeg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/defaultBcg.bcea13ff.jpeg";

/***/ }),

/***/ "./src/images/face.png":
/*!*****************************!*\
  !*** ./src/images/face.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/face.d6999b42.png";

/***/ }),

/***/ "./src/images/hat1.jpg":
/*!*****************************!*\
  !*** ./src/images/hat1.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/hat1.25563c28.jpg";

/***/ }),

/***/ "./src/images/react.png":
/*!******************************!*\
  !*** ./src/images/react.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/react.5b34a252.png";

/***/ }),

/***/ "./src/images/singleProductBcg.jpeg":
/*!******************************************!*\
  !*** ./src/images/singleProductBcg.jpeg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/context */ "./src/components/context/context.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_context__WEBPACK_IMPORTED_MODULE_4__["ProjectProvider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 2
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 4
  }
})), " "), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Title */ "./src/components/Title.js");
/* harmony import */ var _images_body_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/body.png */ "./src/images/body.png");
/* harmony import */ var _images_body_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_body_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/pages/About.js";



class About extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "about me",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "about-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "model-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_body_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "model",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "about-text-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "about-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "about-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 8
      }
    }, "Designer and developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "about-wording",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 8
      }
    }, " ", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nemo adipisci amet delectus magni, cupiditate quibusdam aliquam placeat consectetur id sed molestias in aut ipsam numquam cum! Aperiam, veritatis dicta!")))));
  }

}

/***/ }),

/***/ "./src/pages/Contact.js":
/*!******************************!*\
  !*** ./src/pages/Contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/pages/Contact.js";

class Contact extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 10
      }
    }, "hello from contact");
  }

}

/***/ }),

/***/ "./src/pages/Error.js":
/*!****************************!*\
  !*** ./src/pages/Error.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_face_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/face.png */ "./src/images/face.png");
/* harmony import */ var _images_face_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_face_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./src/components/Hero.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/pages/Error.js";




class HomePage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 18
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
      highlight: "Seems like you've gone to a wrong page",
      name: `oops `,
      children: "Home",
      img: _images_face_png__WEBPACK_IMPORTED_MODULE_1___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, " ", " ", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "link-btn",
      children: "view",
      to: "/project/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 39
      }
    }, "home ", " ", " "), " ", " "), " ");
  }

}

/***/ }),

/***/ "./src/pages/HomePage.js":
/*!*******************************!*\
  !*** ./src/pages/HomePage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ "./src/pages/About.js");
/* harmony import */ var _images_face_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/face.png */ "./src/images/face.png");
/* harmony import */ var _images_face_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_face_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero */ "./src/components/Hero.js");
/* harmony import */ var _components_project_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/project/project */ "./src/components/project/project.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/pages/HomePage.js";






class HomePage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], {
      highlight: "Full Stack Web Developer",
      name: `i'm Ralphael Oshun`,
      skills: "HTML/CSS | Bootstrap| Javascript | REACT",
      img: _images_face_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      className: "link-btn",
      children: "view",
      to: "/project/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 6
      }
    }, "projects", " "), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_About__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_project__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }
    }));
  }

}

/***/ }),

/***/ "./src/pages/Project.js":
/*!******************************!*\
  !*** ./src/pages/Project.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_project_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/project/project */ "./src/components/project/project.js");
var _jsxFileName = "/Users/afoyenyen/Desktop/portfolio/src/pages/Project.js";


class Project extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 18
      }
    }, "hello from project ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_project__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 32
      }
    }));
  }

}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/afoyenyen/Desktop/portfolio/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/afoyenyen/Desktop/portfolio/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/afoyenyen/Desktop/portfolio/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map