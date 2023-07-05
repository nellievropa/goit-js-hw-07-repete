// Вспливання

const refs = {
    parent: document.querySelector('#parent'),
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child'),
};

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', onInnerChildClick);

// window.addEventListener('click', e => {
//     console.log(e.target);
//     console.log(e.currentTarget)
// });

function onParentClick(event) {
    console.log('onParentClick');
    console.log('onParentClick -> event.target', event.target);
    console.log('onParentClick -> event.currentTarget', event.currentTarget);
}

function onChildClick(event) {
    console.log('onChildClic');
    console.log('onChildClic -> event.target', event.target);
    console.log('onChildClic -> event.currentTarget', event.currentTarget);
}

function  onInnerChildClick(event) {
    console.log('onInnerChildClick');
    console.log('onInnerChildClick -> event.target', event.target);
    console.log('onInnerChildClick -> event.currentTarget', event.currentTarget);
}