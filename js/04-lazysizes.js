// потрібно обов'язково правильно задати атрибут!!!

// const lazyImages = document.querySelectorAll('img[data-src]');

// console.log(lazyImages);

// // на кожну картинку повісимо слухача

// lazyImages.forEach(image => {
//     image.addEventListener('load', onImageLoaded, { once: true });
// });
// // {once: true} - дозволить функції спрацювати 1 раз, а потім видалить її автоматично- самовидалиться

// function onImageLoaded (event) {
//     console.log('Картинка загрузилась');
//     // event.target-це той, елемент Img, що потрібен, що до нього застосувати стилі
//     console.log(event.target);
//     event.target.classList.add('appear');
// }

if ('loading' in HTMLImageElement.prototype) {
    console.log('Браузер поддерживает ленивки')
  } else {
    console.log('Браузер НЕ поддерживает ленивки')
  }


// якщо браузер робить щось нативно, НЕ потрібно підключати бібліотеки!
// якщо НІ- то треба бібіліотеку використовувати





// https://web.dev/browser-level-image-lazy-loading/
// проитати!

// if ('loading' in HTMLImageElement.prototype) {
  // supported in browser
// } else {
    // fetch polyfill/third-party library
//   }