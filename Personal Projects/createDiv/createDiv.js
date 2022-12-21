const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const colorInput = document.getElementById('color');
const borderRadiusInput = document.getElementById('border-radius');
const borderWidthInput = document.getElementById('border-width');
const borderColorInput = document.getElementById('border-color');
const createDivBtn = document.getElementById('createDiv');
const container = document.getElementById('container');
const preview = document.getElementById('preview');
const opacityInput = document.getElementById('opacity');

createDivBtn.addEventListener('click', () => {
    const width = widthInput.value;
    const height = heightInput.value;
    const color = colorInput.value;
    const borderRadius = borderRadiusInput.value;
    const borderWidth = borderWidthInput.value;
    const borderColor = borderColorInput.value;
    const opacity = opacityInput.value;
    
    const div = document.createElement('div');
    div.classList.add('div');

    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = color;
    div.style.borderRadius = `${borderRadius}px;`
    div.style.borderWidth = `${borderWidth}px`;
    div.style.borderColor = borderColor;
    div.style.borderStyle = 'solid';
    div.style.opacity = opacity.value;

    container.appendChild(div);
});

function updatePreview() {
    const width = widthInput.value;
    const height = heightInput.value;
    const color = colorInput.value;
    const borderRadius = borderRadiusInput.value;
    const borderWidth = borderWidthInput.value;
    const borderColor = borderColorInput.value;
    const opacity = opacityInput.value;

    preview.style.width = width + "px";
    preview.style.height = height + "px";
    preview.style.backgroundColor = color;
    preview.style.borderRadius = borderRadius + "px";
    preview.style.borderWidth = borderWidth + "px";
    preview.style.borderColor = borderColor;
    preview.style.opacity = opacity;
}

widthInput.addEventListener('input', updatePreview);
heightInput.addEventListener('input', updatePreview);
colorInput.addEventListener('input', updatePreview);
borderRadiusInput.addEventListener('input', updatePreview);
borderWidthInput.addEventListener('input', updatePreview);
borderColorInput.addEventListener('input', updatePreview);
opacityInput.addEventListener('input', updatePreview);