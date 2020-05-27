import gee from "../../images/hat1.jpg";
import hotel from "../../images/defaultBcg.jpeg";
import tech from "../../images/singleProductBcg.jpeg";
import defaultCover from "../../images/react.png";
import car from "../../images/blackdodge.jpg";
import imam from "../../images/HAJJ-2018.png";

export const items = [{
        sys: { id: 0 },
        fields: {
            title: "hotel",
            type: "lifestyle",

            style: "Class component",
            gitHub: "https://github.com/Afoghandi/Resort-Beach-Tut.git",
            liveDemo: "https://react-beach-app-tut.netlify.app",
            description: "I used class based component to build this visualling appealling website. You have options to search the products too",
            image: { fields: { file: { url: hotel } } },
            payment: false,
        },
    },
    {
        sys: { id: 1 },
        fields: {
            title: "Gee swag",
            type: "e-commerce",
            style: "function component",
            description: " I used function based component to build this visualling appealling website. You have options to search the products too",
            gitHub: "https://github.com/Afoghandi/gee-swag.git",
            liveDemo: "https://gee-swag.netlify.app",
            image: { fields: { file: { url: gee } } },
            payment: false,
        },
    },
    {
        sys: { id: 2 },
        fields: {
            title: "Tech- star",
            type: "e-commerce",
            style: "Function component",
            description: "This website has a paypal payment option and a form submittion as well!!. I used function based component to build this visualling appealling website. You have options to search the products too",
            gitHub: "https://github.com/Afoghandi/tech-store.git",
            liveDemo: "https://amazontech.netlify.app",
            image: { fields: { file: { url: tech } } },
            payment: true,
        },
    },
    {
        sys: { id: 3 },
        fields: {
            title: "To Do List",
            type: "App",
            style: "React Hooks",
            description: "This is a staple for all react. One has to build a To do list. I used React Hooks and function based component to build this visualling appealling website. ",
            gitHub: "https://github.com/Afoghandi/to-do-list.git",
            liveDemo: "https://todo-with-huks.netlify.app",
            image: { fields: { file: { url: defaultCover } } },
            payment: false,
        },
    },
    {
        sys: { id: 4 },
        fields: {
            title: "Budget",
            type: "App",
            style: "React Hooks",
            description: "This is a staple for all react. One has to build a budget calculator. I used React Hooks and function based component to build this visualling appealling website. ",
            gitHub: "https://github.com/Afoghandi/budget-calculator.git",
            liveDemo: "https://hook-budget-calculator.netlify.app",
            image: { fields: { file: { url: defaultCover } } },
            payment: false,
        },
    },
    {
        sys: { id: 5 },
        fields: {
            title: "city-tours",
            type: "LifeStyle",
            style: "Class Components",
            description: "One of my first projects I made. Had lots of fun doing it. It's simple but demonstrates the key skill I needed to continue my growth ",
            gitHub: "https://github.com/Afoghandi/budget-calculator.git",
            liveDemo: "https://city-tours-firstever.netlify.app",
            image: { fields: { file: { url: defaultCover } } },
        },
    },
    {
        sys: { id: 6 },
        fields: {
            title: "imam",
            type: "Travel",
            style: "Class Components",
            description: "Iused class based component to build this visualling appealling website. You have options to search the products too. ",
            liveDemo: "https://www.imamtravels.com",
            gitHub: "https://github.com/Afoghandi/imam-travels.git",
            image: { fields: { file: { url: imam } } },
        },
    },
    {
        sys: { id: 7 },
        fields: {
            title: "car",
            type: "Luxury",
            style: "Class Components",
            description: "I really went for style on this one to show case my CSS prowress. The site was built on classed based component and deployed via Netlify ",
            liveDemo: "https://luxury-cars.netlify.app",
            gitHub: "https://github.com/Afoghandi/luxury-cars.git",
            image: { fields: { file: { url: car } } },
            payment: false,
        },
    },
];