function fixN() {
    var numberd = document.getElementById("precioUno").value;
    var numberdfix = Number(numberd);
    document.getElementById("precioUno").value = Math.round(numberdfix * 100) / 100

}