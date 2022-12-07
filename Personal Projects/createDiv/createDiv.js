const createDivBtn = document.getElementById('#createDivBtn');
createDivBtn.addEventListener('click', function() {
    const newDiv = document.createElement('div');
    newDiv.style.width = '100px';
    newDiv.style.height = '100px';
    newDiv.style.backgroundColor = 'blue';
    newDiv.style.border = '1px solid black';
});

document.getElementById('#container').appendChild(newDiv);