import './styles/main.scss';

// Dynamic data coming form server 

const LINE_ONE = "עיתון הארץ";
const LINE_TWO = "תרגיל בית";

// end of data from server

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }
 

const intersectCallback = (entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            entry.target.removeAttribute('class', 'mark');
            const markerTwo = document.querySelector('#marker-two'); 
            markerTwo.removeAttribute('class', 'show'); // makes the second marker after the first one
        } else {
            entry.target.setAttribute('class', 'mark');
        }
    });
};

const addTexts = (textOne, textTwo) => {
    const textElm = document.querySelectorAll('svg .text text');
    textElm[1].innerHTML = textOne;
    textElm[0].innerHTML = textTwo;
}

const cascadeAnimationMarkers = () => { // makes the second marker after the first one
    const markerOne = document.querySelector('#marker-one');
    const markerTwo = document.querySelector('#marker-two');

    markerOne.onanimationend = () => {
    markerTwo.setAttribute('class', 'show');
    };
}
    
  
const bootstrapDom = () => {
    addTexts(LINE_ONE,LINE_TWO);
    let target = document.querySelector('#Layer_1');
    let observer = new IntersectionObserver(intersectCallback, options);
    observer.observe(target);
    cascadeAnimationMarkers();
}

document.addEventListener('DOMContentLoaded', bootstrapDom())