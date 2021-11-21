import './styles/main.scss';

const options = {
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

const addTexts = (textOne, textTwo) => {
    const textElm = document.querySelector('svg.text');
    const lineOneContent = document.createTextNode(textOne);
    const lineTwoContent = document.createTextNode(textTwo);
    const lineOne = document.createElement('text').setAttribute('x',"250");
    const lineTwo = document.createElement('text');
    lineOne.appendChild(lineOneContent);
    lineTwo.appendChild(lineTwoContent);
    textElm.appendChild(lineOne);
}
    
  
const bootstrapDom = () => {
    let target = document.querySelector('#Layer_1');
    let observer = new IntersectionObserver(intersectCallBack, options);
    observer.observe(target);
}

document.addEventListener('DOMContentLoaded', bootstrapDom())