const tech = [
    {label: 'HTML'},
    {label: 'CSSL'},
    {label: 'JavaScript'},
    {label: 'Node.js'},
    {label: 'React'},
    {label: 'Vue'},
    {label: 'Next'},
    {label: 'Mobx'},
    {label: 'Redux'},
    {label: 'React Router'},
    {label: 'GraphQL'},
    {label: 'PostgreSQL'},
    {label: 'MongoDB'},

];

// ЗАДАЧА: відфільтрувати елементи списку по введеному куску текту

const refs ={
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};
//нам треба знати, що було введено, тому на input вішаємо слухача
// refs.input.addEventListener('input', onFilterChange);
// проблема в тому, що функція буде викликатися при кожному натисканні клавіші
// тому ми можемо її _.debounce уповільнити
refs.input.addEventListener('input', _.debounce(onFilterChange, 300));



const listItemsMarkup = createListItemsMarkup(tech);
// якщо елемент пустий, то використовуємо innerHTML
// refs.list.innerHTML = listItemsMarkup;
populateList(listItemsMarkup);

console.log(listItemsMarkup);
// зарендерим масив елементів

function createListItemsMarkup (items) {
    return items.map(item => `<li>${item.label}</li>`).join('');
}

function onFilterChange(event) {
    // ми можем прочитати знчення фільтру(що введено в інпут) і приводимо до нижнього регистру(маленьких букв) і інпут і наші данні
// console.log(event.target.value);
const filter = event.target.value.toLowerCase();
// зробимо новий масив із відфільтрованих елементі що співпадають і event.target.value
// якщо наше значення відповідає тому, що зараз в інпуті
const filterItem = tech.filter(t => t.label.toLowerCase().includes(filter));

console.log(filterItem);
// відфільтруємо той масив, що вийшов після першого фільтрування
// і повністю замінимо їх на новий масив
const listItemsMarkup = createListItemsMarkup (filterItem);
// якщо додати наступний refs.list.innerHTML з оригінально масиву будуть залишатися тільки ті, що мають валює інпута
// заміняємо розмітку оригінального масиву
// refs.list.innerHTML = listItemsMarkup;
populateList(listItemsMarkup)
}

// те, що повторюється в коді можна виносити в окемі функції
// потім змінюємо на populateList все, що повторюється
function populateList (markup) {
    refs.list.innerHTML = markup;
}


// Fuse.js - пушистий пошук дозволить шукати навіть с помилками


