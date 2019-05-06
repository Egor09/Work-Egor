let column = document.querySelectorAll('.column')[1],
    adv = document.querySelectorAll('.adv')[0],
    ul = document.querySelector('.menu'),
    li = document.querySelectorAll('.menu-item'),
    title = document.querySelector('.title'),
    body = document.querySelector('body'),
    prt = document.querySelector('#prompt');

    prt.textComtent = prompt('Как вы относитесь к технике Apple?');
   
    
    column.removeChild(adv);

    body.style.backgroundImage = "url(img/apple_true.jpg)";

    let fifth = document.createElement('fifth');
    fifth.classList.add('menu-item');
    fifth.innerHTML = 'Пятый пункт';
    ul.appendChild(fifth);
    ul.insertBefore(li[2], li[1]);
    title.textContent = 'Мы продаем только подлинную технику Apple';






