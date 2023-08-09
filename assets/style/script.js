function convertToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value;
    const decimalNumber = parseInt(binaryInput, 2);
    document.getElementById('decimalInput').value = decimalNumber;
    convertToOctal();
    convertToHex();
    }

    function convertToOctal() {
        const decimalInput = document.getElementById('decimalInput').value;
        const octalNumber = parseInt(decimalInput, 10).toString(8);
        document.getElementById('octalInput').value = octalNumber;
    }

    function convertToHex() {
        const decimalInput = document.getElementById('decimalInput').value;
        const hexNumber = parseInt(decimalInput, 10).toString(16).toUpperCase();
        document.getElementById('hexInput').value = hexNumber;
    }


const boxMode = document.querySelector(".checkbox");
const slide = document.querySelector(".slide-container");
boxMode.addEventListener("change",function(){
    document.body.classList.toggle("dark-mode");
    slide.classList.toggle("slide-mode");
});