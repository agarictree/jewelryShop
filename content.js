function importAll(r) {
    return r.keys().map(r);
  }
  
let content = [
    {
        img: "./img/content/leavesf/hlZYIyrrx7E.jpg",
        images: "./img/content/leavesf",
        srcSet: "img/hlZYIyrrx7E.jpg 1000w, img/hlZYIyrrx7E_500.jpg 500w, img/hlZYIyrrx7E_200.jpg 200w",
        text: "Серьги 'Духи листьев'",
        description: "",
        materials: ["clay"],
        inStock: false,
        sizes: "(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w",
        pack: importAll(require.context("./img/content/leavesf", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/inkgoldf/I_PtqO_bbfc.jpg",
        images: "./img/content/inkgoldf",
        srcSet: "img/I_PtqO_bbfc.jpg 1000w, img/I_PtqO_bbfc_500.jpg 500w, img/I_PtqO_bbfc_200.jpg 200w",
        text: "Брошь 'Золото Инков'",
        description: "",
        materials: ["clay"],
        inStock: false,
        sizes: "(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w",
        pack: importAll(require.context("./img/content/inkgoldf", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/medusa/jyoVDfkbbaE.jpg",
        images: "./img/content/medusa",
        srcSet: "img/jyoVDfkbbaE.jpg 1000w, img/jyoVDfkbbaE_500.jpg 500w, img/jyoVDfkbbaE_200.jpg 200w",
        text: "Колье 'Медуза Горгона'",
        description: "",
        materials: ["tin"],
        inStock: true,
        sizes: "(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w",
        pack: importAll(require.context("./img/content/medusa", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/fauns/pxgBKof1kiE.jpg",
        images: "./img/content/fauns",
        srcSet: "img/pxgBKof1kiE.jpg 1080w, img/pxgBKof1kiE_500.jpg 500w, img/pxgBKof1kiE_200.jpg 200w",
        text: "Броши 'Лесные фавны'",
        description: "",
        materials: ["clay"],
        inStock: false,
        sizes: "(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w",
        pack: importAll(require.context("./img/content/fauns", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/thristlef/qRmItrc6KkM.jpg",
        images: "./img/content/thristlef",
        srcSet: "img/qRmItrc6KkM.jpg 1000w, img/qRmItrc6KkM_500.jpg 500w, img/qRmItrc6KkM_200.jpg 200w",
        text: "Колье 'Фея Чертополоха'",
        description: "",
        materials: ["clay"],
        inStock: false,
        sizes: "(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w",
        pack: importAll(require.context("./img/content/thristlef", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/moonf/qz2HW3U8D2U.jpg",
        images: "./img/content/moonf",
        srcSet: "img/qz2HW3U8D2U.jpg 1000w, img/qz2HW3U8D2U_500.jpg 500w, img/qz2HW3U8D2U_200.jpg 200w",
        text: "Брошь 'Лунная Фея'",
        description: "",
        materials: ["clay"],
        inStock: false,
        sizes: "(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w",
        pack: importAll(require.context("./img/content/moonf", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/sunset/VBWVXq641JI.jpg",
        images: "./img/content/sunset",
        srcSet: "img/VBWVXq641JI.jpg 640w, img/VBWVXq641JI.jpg_200.jpg 200w",
        text: "Брошь 'Закат'",
        description: "",
        materials: ["clay"],
        inStock: false,
        sizes: "(min-width: 500px) 640w, (max-width: 500px) 200w",
        pack: importAll(require.context("./img/content/sunset", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/ironf/YAD2_sZtc7A.jpg",
        images: "./img/content/ironf",
        srcSet: "img/YAD2_sZtc7A.jpg 1000w, img/YAD2_sZtc7A_500.jpg 500w, img/YAD2_sZtc7A_200.jpg 200w",
        text: "Колье 'Фея' из сплава 'пьютер'",
        description: "",
        materials: ["tin"],
        inStock: true,
        sizes: "(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w",
        pack: importAll(require.context("./img/content/ironf", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/bolo/ZhebS-59MTo.jpg",
        images: "./img/content/bolo",
        srcSet: "",
        text: "Галстук-боло",
        description: "",
        materials: ["clay"],
        inStock: false,
        sizes: "",
        pack: importAll(require.context("./img/content/bolo", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/broochf/INlnOnKGIvA.jpg",
        images: "./img/content/broochf",
        srcSet: "",
        text: "Брошь-игла 'Фея'",
        description: "",
        materials: ["clay"],
        inStock: false,
        sizes: "",
        pack: importAll(require.context("./img/content/broochf", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/fungalf/ArG66wlP2Jg.jpg",
        images: "./img/content/fungalf",
        srcSet: "",
        text: "Грибная фея",
        description: "",
        materials: ["clay"],
        inStock: false,
        sizes: "",
        pack: importAll(require.context("./img/content/fungalf", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/greenf/v_c81r73UWM.jpg",
        images: "./img/content/greenf",
        srcSet: "",
        text: "Подвеска 'Зелёная фея'",
        description: "",
        materials: ["clay"],
        inStock: false,
        sizes: "",
        pack: importAll(require.context("./img/content/greenf", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/hel/m-ESbgh65Xg.jpg",
        images: "./img/content/hel",
        srcSet: "",
        text: "Кольцо 'Хель'",
        description: "",
        materials: ["clay"],
        inStock: false,
        sizes: "",
        pack: importAll(require.context("./img/content/hel", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/ironmodern/lcK3OR1C--M.jpg",
        images: "./img/content/ironmodern",
        srcSet: "",
        text: "Подвеска с цветком из пьютера",
        description: "",
        materials: ["tin"],
        inStock: false,
        sizes: "",
        pack: importAll(require.context("./img/content/ironmodern", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/mushroomsk/FtWL18OCduY.jpg",
        images: "./img/content/mushroomsk",
        srcSet: "",
        text: "Брошь 'Череп и мухоморы'",
        description: "",
        materials: ["clay"],
        inStock: false,
        sizes: "",
        pack: importAll(require.context("./img/content/mushroomsk", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/mushroomsk2/Soy4gQBH9AQ.jpg",
        images: "./img/content/mushroomsk2",
        srcSet: "",
        text: "Брошь 'Череп и поганки'",
        description: "",
        materials: ["clay"],
        inStock: false,
        sizes: "",
        pack: importAll(require.context("./img/content/mushroomsk2", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/unic1/29mlm9DnEmA.jpg",
        images: "./img/content/unic1",
        srcSet: "",
        text: "Подвеска 'Единорог",
        description: "",
        materials: ["tin"],
        inStock: true,
        sizes: "",
        pack: importAll(require.context("./img/content/unic1", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }, {
        img: "./img/content/whitef/fTn7INuKYI0.jpg",
        images: "./img/content/whitef",
        srcSet: "",
        text: "Подвеска 'Белая фея'",
        description: "",
        materials: ["clay"],
        inStock: true,
        sizes: "",
        pack: importAll(require.context("./img/content/whitef", false, /\.(png|jpe?g|svg)$/)).map(el => el.default)
    }
];

export default content;