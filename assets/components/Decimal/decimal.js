function convertingDecimal(){
    const dec = document.getElementById("decimalInput").value;
    const binary = parseInt(dec,10).toString(2);
    const octal = parseInt(dec,10).toString(8);
    const hex = parseInt(dec,10).toString(16).toUpperCase();
    document.getElementById("binaryInput").value = binary;
    document.getElementById("octalInput").value = octal;
    document.getElementById("hexOutput").value = hex;
}