class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height + 'px';
        this.width = width + 'px';
        this.bg = bg;
        this.fontSize = fontSize + 'px';
        this.textAlign = textAlign;
    }
    oneDiv() {
        let div = document.createElement('div');
        div.textContent = 'Привет мир!!!';
        div.style.cssText = `display: inline-block; height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
        document.body.appendChild(div);
    }
}

let newDiv = new Options(300, 600, '#999999', 28, 'center');
newDiv.oneDiv();
