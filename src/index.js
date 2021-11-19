/**
 * Import your modules and use them!
 */
import { externalModule } from './js/myModule';

/**
 * Import your styles!
 */
import './styles/main.scss';

externalModule.greet();

// my code to refactor: 

import Notebook from './images/header-svg/notebook.svg'


// const loadSvgNote = () => {
//     const SVG = `<object  data="${Notebook}" type="image/svg+xml"></object>`
//     document.querySelector('.container-svg').innerHTML = (SVG);
// }

// document.addEventListener('DOMContentLoaded', loadSvgNote())