function convertHex() {
    const hexInput = document.getElementById('hexInput').value;
    const decimal = parseInt(hexInput, 16).toString(10);
    const decimalNumber = parseInt(hexInput, 16);
    const binaryNumber = decimalNumber.toString(2);
    const octalNumber = decimalNumber.toString(8);
    document.getElementById('decimalInput').value = decimal;
    document.getElementById('binaryOutput').value = binaryNumber;
    document.getElementById('octalOutput').value = octalNumber;
}