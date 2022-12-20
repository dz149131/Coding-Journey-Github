const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const colorInput = document.getElementById('color');
const borderRadiusInput = document.getElementById('border-radius');
const borderWidthInput = document.getElementById('border-width');
const borderColorInput = document.getElementById('border-color');
const createDivBtn = document.getElementById('createDiv');
const container = document.getElementById('container');

createDivBtn.addEventListener('click', () => {
    const width = widthInput.value;
    const height = heightInput.value;
    const color = colorInput.value;
    const borderRadius = borderRadiusInput.value;
    const borderWidth = borderWidthInput.value;
    const borderColor = borderColorInput.value;
    
    const div = document.createElement('div');
    div.classList.add('div');
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = color;
    div.style.borderRadius = `${borderRadius}px;`
    div.style.borderWidth = `${borderWidth}px`;
    div.style.borderColor = borderColor;
    div.style.borderStyle = 'solid';

    container.appendChild(div);
});