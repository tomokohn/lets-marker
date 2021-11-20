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

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }
 

const intersectCallBack = (entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.toggle('mark');
    });
};
    
  
const bootstrapDom = () => {
    console.log('bootstrapDom');
    let target = document.querySelector('#Layer_1');
    let observer = new IntersectionObserver(intersectCallBack, options);
    observer.observe(target);
}

document.addEventListener('DOMContentLoaded', bootstrapDom())