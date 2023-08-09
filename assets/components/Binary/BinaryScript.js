function convertOctal() {
    const octalInput = document.getElementById('octalInput').value;
    const decimal = parseInt(octalInput, 8).toString(10);
    const decimalNumber = parseInt(octalInput, 8);
    const binaryNumber = decimalNumber.toString(2);
    const hexNumber = decimalNumber.toString(16).toUpperCase();
    document.getElementById('decimalInput').value = decimal;
    document.getElementById('binaryOutput').value = binaryNumber;
    document.getElementById('hexOutput').value = hexNumber;
}