let zero = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    big = document.getElementsByClassName('big'),
    small = document.querySelectorAll('.small'),
    oneSmall = document.querySelector('.small'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

big[0].style.backgroundColor = 'red';
big[1].style.backgroundColor = 'yellow';
big[2].style.backgroundColor = 'green';

// for (let i = 0; i < small.length; i++) {
//     small[i].style.backgroundColor = 'blue';
// }

// small.forEach(function(item, i, smalls) {
//     item.style.backgroundColor = 'red';
// });

let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');


    div.classList.add('black');

    // document.body.appendChild(div);

    // wrapper.appendChild(div);

div.innerHTML = '<h1>Hellow World!</h1>';

// div.textContent = 'Hello World!';


    document.body.insertBefore(div, big[1]);
    document.body.removeChild(big[1]);
    wrapper.removeChild(small[2]);

    document.body.replaceChild(btn[1], big[1]);
console.log(div);

