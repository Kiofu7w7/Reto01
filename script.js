function calcular(){
    totalCuenta = document.getElementById("totalCuentaInput").value
    porcentajePropina= document.getElementById("porcentajeInput").value
    labelTotal = document.getElementById("total")
    labelPropina = document.getElementById("propinaFin")
    labelTotalFin = document.getElementById("totalFin")
    labelTotal.value = totalCuenta
    var propina = (porcentajePropina*totalCuenta)/100
    labelPropina.value = propina
    var totalPagar = parseFloat(propina) + parseFloat(totalCuenta)
    labelTotalFin.value = totalPagar
}