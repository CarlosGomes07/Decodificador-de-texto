let textArea = document.querySelector("#texto-principal");
textArea.addEventListener('input', autoResize, false);
textArea.addEventListener('keydown', autoResize, false);
textArea.addEventListener('paste', autoResize, false);

function autoResize() {
    this.style.height = 'auto';

    const maxHeight = 400;

    if(this.scrollHeight < maxHeight) {
        this.style.height = this.scrollHeight + 'px';
    } else {
        this.style.overflow = 'auto';
        this.style.height = maxHeight + 'px';
    }
}
