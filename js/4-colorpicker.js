// Створити динамічні картки по зразку
const colors = [
    { hex: '#f14336', rgb: '244,67,54' },
    { hex: '#e91e63', rgb: '233,30,99' },
    { hex: '#9c27b9', rgb: '156,39,176' },
    { hex: '#673ab7', rgb: '183,58,183' },
    { hex: '#3f51b5', rgb: '63,81,181' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#00bcd4', rgb: '0,180,212' },
    { hex: '#009688', rgb: '0,158,80' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
    { hex: '#ff9800', rgb: '255,152,0' },
    { hex: '#795548', rgb: '121,85,72' },
    { hex: '#607d8b', rgb: '96,125,139' },
];

const paletteContainer = document.querySelector('.js-palette');
// ця змінна зберігає результат виклику всієї 1-ї функції
const cardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick);
// console.log(createColorCardsMarkup(colors));

function createColorCardsMarkup(colors) {
    return colors
        .map(({ hex, rgb }) => {
        return ` 
        <div class="color-card"> 
            <div class="color-swatch" 
            data-hex="${hex}" 
            data-rgb="${rgb}" 
            style="background-color: ${hex}">
        </div>
        <div class="color-meta">
            <p>HEX: ${hex}</p>
            <p>RGB: ${rgb}</p>
        </div>
        </div>
    `;
    })
        .join('');
    
}

// ми хочем відстежити кліки тільки в колір
function onPaletteContainerClick(event) {
    // console.log(event.target);    
    // якщо це НЕ елемент color-swatch, то ми виходимо, інакше- виконується код
    // можна зробити змінну і винести тудп event.target.classlist.contains('color-swatch')
    const isColorSwatchEl = event.target.classList.contains('color-swatch');
    if (!isColorSwatchEl) {
        return;
    }

    // const swatchEl = event.target;
    // так класс додавсян на color-swatch
    // swatchEl.classlist.add('is-active');
    // а повинен додаватися на color-card
    // родителя искать не очень практично, нужно искать предка
    // в єтом поможет метод closest('.')
    // const parentColorCard = swatchEl.closest('.color-card');
// console.log(parentColorCard);
// це зовнішня функція- вона знаходиться нижче - ми не неї замінили весь код, що закоментований
removeActiveCardClass();
    // спочатку такий елемент знаходим
    // const currentActiveCard = document.querySelector('.color-card.is-active');
    // коли знайшли- видаляємо is-active спочатку
// соли ми знайшли предка, НЕ батька, додаємо класс is-active
    // parentColorCard.classlist.add('is-active');

    // але клас is-active треба зняти з попереднього і додати на наступний

    // if(currentActiveCard) {
    //     currentActiveCard.classList.remove('is-active');
    // }
    // а потім робимо активни наступний елемент
    const swatchEl = event.target;
    const parentColorCard = swatchEl.closest('.color-card');
    addActiveCardClass(parentColorCard);
    // додавання класу також винесли в окрему функцію
    // parentColorCard.classList.add('is-active');
    // зробимо бекгроунд такого ж кольору, як активний
    // document.body.style.backgroundColor = swatchEl.dataset.hex;
    // замінимо її на зовнішню фукнкцію строка 91
    setBodyBgColor(swatchEl.dataset.hex);
    // console.log(event.targetdataset.hex);

}

function setBodyBgColor (color) {
    document.body.style.backgroundColor = color;
}

// винесемо в окрему функцію і зняття активного класу 
function removeActiveCardClass (){
    const currentActiveCard = document.querySelector('.color-card.is-active');
    
    if(currentActiveCard) {
        currentActiveCard.classList.remove('is-active');
    }

}
// зробим функцію додавання активного классу також окремою

function addActiveCardClass (card) {
card.classList.add('is-active');
}



    // по цьому зразку треба створити карточки з динамічною зміною кольору,
    // і щоб потім виводились дані (другий дів)
    // робити це будем чере створенння шаблонних рядків
//  <div class="color-card"> 
//             <div class="color-swatch" 
//             data-hex="#955014" 
//             data-rgb="149,80,20" 
//             style="background-color: #955014">
//         </div>
//         <div class="color-meta">
//             <p>HEX: #955014</p>
//             <p>RGB: 149,80,20</p>
//         </div>
//         </div>