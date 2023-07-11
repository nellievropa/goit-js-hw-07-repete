// виберемо всі картинки з АТРИБУТОМ [loading="lazy"]

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

console.log(lazyImages);

// на кожну картинку повісимо слухача

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, { once: true });
});
// {once: true} - дозволить функції спрацювати 1 раз, а потім видалить її автоматично- самовидалиться

function onImageLoaded (event) {
    console.log('Картинка загрузилась');
    // event.target-це той, елемент Img, що потрібен, що до нього застосувати стилі
    console.log(event.target);
    event.target.classList.add('appear');
}