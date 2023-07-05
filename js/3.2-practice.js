// 2. Треба вибрати декілька активних елементів

// const tagsContainer = document.querySelector('.js-tags');
// щоб зберігати вибрані дані треба створити масив
// const selectedTags = [];

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(event) {
//     // перевіряємо що клікнули в кнопку
//     if (event.target.nodeName !== 'BUTTON') {
//         return;
//     }
//     console.log(event.target)
//     // toggle працює так: якщо немає класу-то додасть, якщо є - то зніме
//     event.target.classList.toggle('tags__btn--active');

//     // додаємо елементи по дата атрибуту: у нас це value
//     selectedTags.push(event.target.dataset.value);
//     console.log(selectedTags);
//     // але в масив будуть додаватися навіть ті, з яких ми знімаємо клас актив
    


// 3 Зробимо не через масив, а через SET
// SET- це набір УНІКАЛЬНИХ елементів(дубляжіне допускаються)
// але 2 об'єкти однакові він запише, бо це різні ячейки пам'яті

const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set;
//  // обекти не видаляються з SET, але й не дублюються
// selectedTags.add(5);
// selectedTags.add(5);
// selectedTags.add(5)

// selectedTags.add(4);
// selectedTags.add(4);

// selectedTags.add({ a: 1})
// selectedTags.add({ a: 1})

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }
    const deleteBtn = event.target;

    // перевірка чи є в елемента такий клас
    // console.log(deleteBtn.classList.contains('tags__btn--active'));
    // після першого кліку буде folse, бо його ще не було
    // а після 2-го кліку буде true
    const isActive = deleteBtn.classList.contains('tags__btn--active');

    if (isActive) {
        selectedTags.delete(deleteBtn.dataset.value);
    } else {
        selectedTags.add(deleteBtn.dataset.value);
    }

    deleteBtn.classList.toggle('tags__btn--active');
    
   
    console.log(selectedTags)
}


