const switcher = document.querySelector('#cbx'),
  more = document.querySelector('.more'),
  modal = document.querySelector('.modal'),
  videos = document.querySelectorAll('.videos__item');
let player;

function bindSlideToggle(trigger, boxBody, content, openClass) {
  let button = {
    'element': document.querySelector(trigger),
    'active': false,
  };
  const box = document.querySelector(boxBody),
    boxContent = document.querySelector(content);
  button.element.addEventListener('click', () => {
    if (button.active === false) {
      button.active = true;
      box.style.height = boxContent.clientHeight + 'px';
      box.classList.add(openClass); //добавить активный класс для меню с опасити
    } else {
      button.active = false;
      box.style.height = 0 + 'px';
      box.classList.remove(openClass);
    }
  });
}
bindSlideToggle('.hamburger', '[data-slide="nav"]', '.header__menu', 'slide-active');
// console.log(document.querySelector('.header__menu').classList);

function switchMode() {
  if (nightMode === false) {
    // document.body.style.backgroundColor = '#111';
    nightMode = true;
    document.body.classList.add('night');
    document.querySelectorAll('.hamburger > line').forEach(function reColor(color) {
      color.style.stroke = '#fff';
    });
    document.querySelectorAll('.videos__item-descr').forEach(function reColor(color) {
      color.style.color = '#fff';
    });
    document.querySelector('.header__item-descr').style.color = '#fff';
    document.querySelector('.logo > img').src = "logo/youtube_night.svg";
  } else {
    nightMode = false;
    document.body.classList.remove('night');
    document.querySelectorAll('.hamburger > line').forEach(function reColor(color) {
      color.style.stroke = '#111';
    });
    document.querySelectorAll('.videos__item-descr').forEach(function reColor(color) {
      color.style.color = '#111';
    });
    document.querySelector('.header__item-descr').style.color = '#000';
    document.querySelector('.logo > img').src = "logo/youtube.svg";
  }
}
let nightMode = false;
switcher.addEventListener('change', () => {
  switchMode();
});
// console.log(document.querySelectorAll('line').contains('stroke'));
const data = [
  ['img/thumb_3.webp', 'img/thumb_4.webp', 'img/thumb_5.webp'],
  ['#3 Верстка на flexbox CSS | Блок преимущества и галерея | Марафон верстки | Артем Исламов',
     '#2 Установка spikmi и работа с ветками на Github | Марафон вёрстки Урок 2',
     '#1 Верстка реального заказа landing page | Марафон верстки | Артем Исламов'],
  ['3,6 тыс. просмотров', '4,2 тыс. просмотров', '28 тыс. просмотров'],
  ['X9SmcY3lM-U', '7BvHoh0BrMw', 'mC8JW_aG2EM']
];

more.addEventListener('click', () => {
  const videosWrapper = document.querySelector('.videos__wrapper');
  more.remove();
  // if (more.classList.contains("more")) {
  //   more.classList.toggle("more-hidden");
  // } 
  // let moreBtn = document.createElement('button');
  // moreBtn.classList.add('more');
  // moreBtn.innerHTML = `Загрузить еще`; 
  // console.log(moreBtn); 

  for(let i=0; i < data[0].length; i++) {
    let card = document.createElement('a');
    card.classList.add('videos__item', 'videos__item-active');
    card.setAttribute('data-url', data[3][i]);
    card.innerHTML = `
      <img src="${data[0][i]}" alt="thumb">
      <div class="videos__item-descr">
        ${data[1][i]}
      </div>
      <div class="videos__item-views">
        ${data[2][i]}
      </div>
    `;
    videosWrapper.appendChild(card);
    setTimeout(() => {
      card.classList.remove('videos__item-active');
    }, 10);
  }
  
  // videosWrapper.appendChild(moreBtn);



  // else if (more.classList.contains("more-hidden")) {
  //   more.classList.toggle("more-hidden");
  // }

  /*
  let iArr = [];
  data.forEach(function getItems(item, i) {
    // console.log("yes i" + data[i]);
    for(j=0; j<data[i].length; j++) {
      // temp = {
      //   'i': data[i],
      //   'j': data[i][j],
      // };
      
    }
    // let card = document.createElement('a');
    // card.classList.add('videos__item');
    // data[i].forEach(function createElem(elem, j) {
      
    // });
  });
  console.log(temp.i);
  console.log("yes");
  console.log(temp.j);
  */
});