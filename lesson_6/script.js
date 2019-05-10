let btn = document.getElementsByTagName('button'),
    wrap = document.querySelector('.wrapper');

// btn[0].onclick = function() {
//     alert('вы нажали конпку');
// };

// btn[0].onclick = function() {
//     alert('вы опять нажали конпку');
// };

btn[0].addEventListener('click', function(event) {
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);   
});


wrap.addEventListener('click', function(event) {
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

// btn[0].addEventListener('mouseenter', function() {
//     alert('Вы навели, на первую кнопку!');
// });