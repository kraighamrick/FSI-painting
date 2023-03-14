const painting = document.querySelector('.painting');
let color = 'white';

let colors = ['blue', 'red', 'yellow', 'green']; 
for (let i = 0; i < colors.length; i++) { 
     const chooser = document.querySelector('#' + colors[i]);
     chooser.addEventListener('click', () => {
         color = colors[i];
    });
}
painting.addEventListener('click', (e) => {
    e.target.style.backgroundColor = color
})