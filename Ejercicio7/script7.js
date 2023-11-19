function calcularAreaCirculo() {
            var radio = parseFloat(document.getElementById("radio").value);
            var area = Math.PI * Math.pow(radio, 2);
            document.getElementById("resultadoCirculo").innerHTML = "Área: " + area.toFixed(2);
        }

        function calcularPerimetroCirculo() {
            var radio = parseFloat(document.getElementById("radio").value);
            var perimetro = 2 * Math.PI * radio;
            document.getElementById("resultadoCirculo").innerHTML = "Perímetro: " + perimetro.toFixed(2);
        }

        function calcularVolumenCirculo() {
            var radio = parseFloat(document.getElementById("radio").value);
            var volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
            document.getElementById("resultadoCirculo").innerHTML = "Volumen: " + volumen.toFixed(2);
        }
        function calcularAreaTriangulo() {
            var base = parseFloat(document.getElementById("base").value);
            var altura = parseFloat(document.getElementById("altura").value);
            var area = (base * altura) / 2;
            document.getElementById("resultadoTriangulo").innerHTML = "Área: " + area.toFixed(2);
        }

        function calcularPerimetroTriangulo() {
            var base = parseFloat(document.getElementById("base").value);
            var altura = parseFloat(document.getElementById("altura").value);
            var lado = Math.sqrt(Math.pow(base / 2, 2) + Math.pow(altura, 2));
            var perimetro = base + (2 * lado);
            document.getElementById("resultadoTriangulo").innerHTML = "Perímetro: " + perimetro.toFixed(2);
        }

        function calcularVolumenTriangulo() {
            var base = parseFloat(document.getElementById("base").value);
            var altura = parseFloat(document.getElementById("altura").value);
            var volumen = (base * altura) / 3;
            document.getElementById("resultadoTriangulo").innerHTML = "Volumen: " + volumen.toFixed(2);
        }

        function calcularAreaCuadrado() {
            var lado = parseFloat(document.getElementById("lado").value);
            var area = Math.pow(lado, 2);
            document.getElementById("resultadoCuadrado").innerHTML = "Área: " + area.toFixed(2);
        }

        function calcularPerimetroCuadrado() {
            var lado = parseFloat(document.getElementById("lado").value);
            var perimetro = 4 * lado;
            document.getElementById("resultadoCuadrado").innerHTML = "Perímetro: " + perimetro.toFixed(2);
        }

        function calcularVolumenCuadrado() {
            var lado = parseFloat(document.getElementById("lado").value);
            var volumen = Math.pow(lado, 3);
            document.getElementById("resultadoCuadrado").innerHTML = "Volumen: " + volumen.toFixed(2);
        }

        function calcularAreaTrapecio() {
            var baseMayor = parseFloat(document.getElementById("baseMayor").value);
            var baseMenor = parseFloat(document.getElementById("baseMenor").value);
            var altura = parseFloat(document.getElementById("alturaTrapecio").value);
            var area = ((baseMayor + baseMenor) / 2) * altura;
            document.getElementById("resultadoTrapecio").innerHTML = "Área: " + area.toFixed(2);
        }

        function calcularPerimetroTrapecio() {
            var baseMayor = parseFloat(document.getElementById("baseMayor").value);
            var baseMenor = parseFloat(document.getElementById("baseMenor").value);
            var altura = parseFloat(document.getElementById("alturaTrapecio").value);
            var lado = Math.sqrt(Math.pow((baseMayor - baseMenor) / 2, 2) + Math.pow(altura, 2));
            var perimetro = baseMayor + baseMenor + (2 * lado);
            document.getElementById("resultadoTrapecio").innerHTML = "Perímetro: " + perimetro.toFixed(2);
        }

        function calcularVolumenTrapecio() {
            var baseMayor = parseFloat(document.getElementById("baseMayor").value);
            var baseMenor = parseFloat(document.getElementById("baseMenor").value);
            var altura = parseFloat(document.getElementById("alturaTrapecio").value);
            var volumen = ((baseMayor + baseMenor) / 2) * altura;
            document.getElementById("resultadoTrapecio").innerHTML = "Volumen: " + volumen.toFixed(2);
        }

        function calcularAreaHexagono() {
            var lado = parseFloat(document.getElementById("ladoHexagono").value);
            var area = (3 * Math.sqrt(3) * Math.pow(lado, 2)) / 2;
            document.getElementById("resultadoHexagono").innerHTML = "Área: " + area.toFixed(2);
        }

        function calcularPerimetroHexagono() {
            var lado = parseFloat(document.getElementById("ladoHexagono").value);
            var perimetro = 6 * lado;
            document.getElementById("resultadoHexagono").innerHTML = "Perímetro: " + perimetro.toFixed(2);
        }

        function calcularVolumenHexagono() {
            var lado = parseFloat(document.getElementById("ladoHexagono").value);
            var volumen = Math.pow(lado, 3) * Math.sqrt(3) / 2;
            document.getElementById("resultadoHexagono").innerHTML = "Volumen: " + volumen.toFixed(2);
        }
function mostrarFormulas(figura) {
    var infoFormulas = document.getElementById("formulas" + figura);
    infoFormulas.style.display = "block";
}

function ocultarFormulas(figura) {
    var infoFormulas = document.getElementById("formulas" + figura);
    infoFormulas.style.display = "none";
}

function mostrarFormulasT(figura) {
    var infoFormulas = document.getElementById("formulas" + figura);
    infoFormulas.style.display = "block";
}

function ocultarFormulasT(figura) {
    var infoFormulas = document.getElementById("formulas" + figura);
    infoFormulas.style.display = "none";
}

function mostrarFormulasC(figura) {
    var infoFormulas = document.getElementById("formulas" + figura);
    infoFormulas.style.display = "block";
}

function ocultarFormulasC(figura) {
    var infoFormulas = document.getElementById("formulas" + figura);
    infoFormulas.style.display = "none";
}

function mostrarFormulasTr(figura) {
    var infoFormulas = document.getElementById("formulas" + figura);
    infoFormulas.style.display = "block";
}

function ocultarFormulasTr(figura) {
    var infoFormulas = document.getElementById("formulas" + figura);
    infoFormulas.style.display = "none";
}

function mostrarFormulasHe(figura) {
    var infoFormulas = document.getElementById("formulas" + figura);
    infoFormulas.style.display = "block";
}

function ocultarFormulasHe(figura) {
    var infoFormulas = document.getElementById("formulas" + figura);
    infoFormulas.style.display = "none";
}


