// 1. треба вибрати і додати клас актив тільки одному елементу \
// а з попереднього зняти цей клас, якщо він був

const tagsContainer = document.querySelector('.js-tags');
// console.log(tagsContainer);
let slectiveTeg = 0;

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(event) {
    // event.target покаже де відбулася подія в div li чи button
   // перевіримо, що клікнули саме кнопку
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }
   
     // тому зробимо змінну і пошукаємо по КЛАСУ чи активна вона
    const currentActiveBtn = document.querySelector('.tags__btn--active')

    // console.log(currentActiveBtn); 
    // в консоль виведеться NULL, а він дорівнює FOLSE
    // // тобто нам потрібно зняти клас .tags__btn--active з попереднього активного елементу
    // і ми перевіряємо, якщо активний є, виконається умова і клас зніменться,
    // якщо немає активних класів виконається строка 28
    if (currentActiveBtn) {
        currentActiveBtn.classList.remove('tags__btn--active');
       
        // додамо клас, якщо кнопка активна
        // але тільки одному активному елементу
        //  event.target.classList.add('tags__btn--active');
        // після цього ьраузер вважає активною ьільки першу натиснуту кнопку
    }   
    // заміна if за новими правилами
    // currentActiveBtn?.classList.remove('tags__btn--active');
     // тому стровимо змінну для наступної активної кнопки і додамо цей клас їй
        
        const nextActivBtn = event.target;
        nextActivBtn.classList.add('tags__btn--active');
    slectiveTeg = nextActivBtn.dataset.value;

    console.log(slectiveTeg);
}

//  не всі if можно замінити, якщо об'єкт складний з багатьма вкладеннями
// то треба перевіряти всі влстивості , наприклад

const settings = {
    theme: {
        userDefinned: {
            color: 'teal'
        }
    }
}
if (settings && settings.theme && settings.theme.userDefinned) {
    console.log(settings.theme.userDefinned.color)
}
// заміна цьому if виглядає так і читається ящко settings - це б'єк
// і theme:- об'ет і  userDefinned, то тоді візьми його колір
console.log(settings?.theme?.userDefinned?.color)