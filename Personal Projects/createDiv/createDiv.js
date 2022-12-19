// const createDivBtn = document.getElementById('#createDivBtn');
// createDivBtn.addEventListener('click', function() {
//     let newDiv = document.createElement('div');
//     newDiv.style.width = '100px';
//     newDiv.style.height = '100px';
//     newDiv.style.backgroundColor = 'blue';
//     newDiv.style.border = '1px solid black';
// });

// const container = document.getElementById('#container');
// container.appendChild(newDiv);
// let colorPicker = document.getElementById('#colorPicker')
// let widthInput = document.getElementById('#widthInput')
// let heightInput = document.getElementById('#heightInput')
// let resetBtn = document.getElementById('#resetBtn')
// let createBtn = document.getElementById('#createBtn')
// let divContainer = document.getElementById('#divContainer')

// createBtn.addEventListener('click', function() {
//     divContainer.innerHTML = '';
// })

const createDiv = document.querySelector('#createDiv');
createDiv.addEventListener('click', function() {
    //Gets user inputed values from form
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    let color = document.getElementById('color').value;
    
    //creates new div 
    let div = document.createElement('div');

    //set the div's style properties
    div.style.width = width;
    div.style.height = height;
    div.style.backgroundColor = color;

    //append new div to page
    document.body.appendChild(div);
})