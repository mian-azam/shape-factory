
'use strict';

import { onEvent, select } from "./functions.js";

const btn = select('.btn');

onEvent('click', btn, function () {
    btn.style.color = '#fff';
});
