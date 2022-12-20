const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const colorInput = document.getElementById('color');
const createDivBtn = document.getElementById('createDiv');
const container = document.getElementById('container');

createDivBtn.addEventListener('click', () => {
    const width = widthInput.value;
    const height = heightInput.value;
    const color = colorInput.value;

    const div = document.createElement('div');
    div.classList.add('div');
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = color;

    container.appendChild(div);
});