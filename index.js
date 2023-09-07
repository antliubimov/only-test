'use strict';

const locations = {
  bridge: 'Мост',
  parking: 'Парковка',
  house: 'Дом',
  gym: 'Тренажерный зал',
  station: 'Вокзал',
  cafe: 'Кафе',
  stadium: 'Стадион',
  pool: 'Бассейн',
  hotel: 'Отель',
  metro: 'Метро',
}

const container = document.querySelector('.container');
const img = document.querySelector('.img');
const buttons = document.querySelectorAll('.btn');

const closeBtn = (btn) => {
  btn.classList.remove('btn-open');
  btn.classList.add('btn-close');
  btn.innerText = '';
}

const closeAllBtns = (btns) => [...btns].forEach((btn) => closeBtn(btn));
const handleClick = (e) => {
  if (e.target.tagName === 'BUTTON') {
    const btn = e.target;
    const { value } = btn.dataset;
    if ([...btn.classList].includes('btn-close')) {
      closeAllBtns(buttons);
      btn.classList.remove('btn-close');
      btn.classList.add('btn-open');
      btn.innerText = locations[value];
    } else {
      closeBtn(btn);
    }
  } else {
    closeAllBtns(buttons);
  }
}
container.addEventListener('click', (e) => handleClick(e));