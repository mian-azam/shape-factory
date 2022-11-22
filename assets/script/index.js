
'use strict';

import { onEvent, select } from "./functions.js";
import { Shapes } from "./shapes.js";

const btn = select('.btn');
const parent = select('.parent');
const shapes = select('.shapes');
const colors = select('.colors');

const myColors = {
    Blue: '#0f9',
    Green: '#9f0',
    Orange: '#f90',
    Pink: '#f09',
    Purple: '#90f'
}



onEvent('click', btn, function () {
    let div = document.createElement('div');
    div.classList.add(shapes.value);
    parent.appendChild(div);
    div.style.backgroundColor = myColors[colors.value];
});


