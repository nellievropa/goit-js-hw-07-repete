// ввод тексту в інпут, рухи мишкою, скроли, ресайз(збільшення/зменшення), перетягування  і тп
// проблему в тому, що ми вішаємо слухача і викликаємо функцію багато разів
// підхід throttle заторможує виклик Функції 

const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

// поверне нашу функцію, але не частіше ніж 1 раз на 500 мілісекунд
// const throttledOnMouseMove = _.throttle(onMouseMove, 500)

// window.addEventListener('mousemove', throttledOnMouseMove);

// можно записати так - в один рядок
window.addEventListener('mousemove', _.throttle(onMouseMove, 500));
// window.addEventListener('mousemove', _.debounce(onMouseMove, 200));

function onMouseMove(event) {
    mouseMoveCbInvocationCounter += 1;

    coordsOutputRef.textContent = `
    Кількість визовів onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y: ${event.clientY}
     `;
}




// відкладений пошук - debound
// функція буде викликана тільки тоді, коли припинеться потік подій


const inputRef =document.querySelector('.js-input');
const outputRef =document.querySelector('.js-output');

let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 2000));

function onInputChange(event) {
    inputCbInvocationCounter += 1;

    outputRef.textContent = `
    Кількість викликів onInputChange: ${inputCbInvocationCounter},
    Значення: ${event.target.value}
    `;
}


