/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */

import refreshList from './components/menu.js';
import data from './dataBase/menu.json';
import refs from './utils/refs.js';

refreshList(data, refs.menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const res = localStorage.getItem('theme')


if (res === null){
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.add('light-theme');
} else if (res === Theme.LIGHT) {
    refs.switch.checked = false;
    refs.body.classList.add('light-theme');
} else {
    refs.switch.checked = true;
    refs.body.classList.add('dark-theme');
}

function clickThem({ target }) {
  if (target.checked === true) {
    localStorage.setItem('theme', Theme.DARK);
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
  }
}
refs.switch.addEventListener('click', clickThem);