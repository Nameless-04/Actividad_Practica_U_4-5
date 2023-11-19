function c1(){
    let nombre = document.getElementById('nombre').value;
    let gastos = Math.abs(Number(document.getElementById('costo').value));
    let gastos2 = Math.abs(Number(document.getElementById('costodia').value));
    let gastos3 = Math.abs(Number(document.getElementById('costovarios').value));
    let gastos4 = Math.abs(Number(document.getElementById('costomed').value));
    let gastos5 = document.getElementById('diash').value;
    let deducciones = document.querySelector('input[name="op"]:checked');
    if (deducciones) {
        var selec = deducciones.value;
    } else {
        var selec = 0;
    }
    let g1 = gastos + (gastos2*gastos5) + gastos3 + gastos4;
    let g2 = g1 - ((g1/100)*selec);
    document.getElementById('mostrar').innerHTML = 'El nombre es: ' + nombre + '<br> Costo de la consulta: ' 
    + gastos + '<br> Costo de la hospitalizacion por dia: ' + gastos2 + '<br> Costos varios: ' + gastos3 + 
    '<br> Costo medicamentos: ' + gastos4 + '<br> Total: ' + g1 + '<br> Total menos deducciones: ' + g2;
}