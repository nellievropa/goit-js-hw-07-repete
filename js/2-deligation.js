// Делегування події - це коли е група однотопних кнопок з однотипними подіями
//     (тількі різні данні відправляються)
//     і щоб не вішати слухача на кожну кнопку -ми вішаемо одного слухача на їх батька-div

const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);
// якщо клікнути на дів -отримаємо весь його зміст

function onClick(event) {
    // console.log(event);
    // внутрі банка можна отримати посилання на той елемент, який ми клікнули за допомогою event.target
    // console.log(event.target)
    // у кнопки можна взяти її зміст
    // console.log(event.target.textContent);

    // ПАТЕРН gardClose - якщо це не те- то виходим- записується так
    // логіка * от противного*
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }
        
    // так ми перевіряємо, що клікнули кнопку, і далі можемо працювати з нею
    
    // властивість nodeName - повертає назву об'єкту - кнопка чи дів
    console.log(event.target.nodeName);
}
// ФіЛЬТРУВАТИ можна по типу кнопки або чи є клас

// Додавання кнопок в список
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
    const btn = document.createElement('button');
    btn.textContent = `Кнопка ${labelCounter}`;
    btn.type = 'button';

    container.appendChild(btn);
    labelCounter += 1;

}
