

const inputs = document.querySelectorAll('.controls input');

function doUpdate() {
    const sufix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sufix);
}


inputs.forEach(input => input.addEventListener('change', doUpdate));
inputs.forEach(input => input.addEventListener('mousemove', doUpdate));
