function red(){
    let r = document.getElementById('pags');
    let r1 = r.value;
    if (r1) {
        window.location.href = r1;
    }
}

function cal(){
    var tem = Number(document.getElementById('cant').value);
    var tem1 = document.getElementById('temperaturas1').value;
    var tem2 = document.getElementById('temperaturas2').value;
    var res = 0;
    if (tem1 == tem2) {
        document.getElementById('res').innerHTML = 'Las temperaturas son iguales';    
    }else if(tem1 == 1 && tem2 == 2){
        res = ((tem - 32)/(1.8));
        document.getElementById('res').innerHTML = tem + ' °F <br>' + res + ' °C';
    }else if(tem1 == 1 && tem2 == 3){
        res = ((tem - 32)/(1.8)+273.15);
        document.getElementById('res').innerHTML = tem + ' °F <br>' + res + ' °K';
    }else if(tem1 == 2 && tem2 == 1){
        res = ((tem*1.8)+32);
        document.getElementById('res').innerHTML = tem + ' °C <br>' + res + ' °F';
    }else if(tem1 == 2 && tem2 == 3){
        res = ((tem) + 273.15);
        document.getElementById('res').innerHTML = tem + ' °C <br>' + res + ' °K';
    }else if(tem1 == 3 && tem2 == 2){
        res = (tem - 273.15);
        document.getElementById('res').innerHTML = tem + ' °K <br>' + res + ' °C';
    }else if(tem1 == 3 && tem2 == 1){
        res = ((tem*1.8)-459.67);
        document.getElementById('res').innerHTML = tem + ' °K <br>' + res + ' °F';
    }
}

function calc(){
    var dis = Number(document.getElementById('cant').value);
    var dis1 = document.getElementById('distancia1').value;
    var dis2 = document.getElementById('distancia2').value;
    var res = 0;
    if (dis1 == dis2) {
        document.getElementById('res').innerHTML = 'Las unidades son iguales';    
    }else if(dis1 == 1 && dis2 == 2){
        res = (dis/1609);
        document.getElementById('res').innerHTML = dis + ' metros <br>' + res + ' Millas';
    }else if(dis1 == 1 && dis2 == 3){
        res = dis * 3.281;
        document.getElementById('res').innerHTML = dis + ' metros <br>' + res + ' Pies';
    }else if(dis1 == 2 && dis2 == 1){
        res = dis * 1609;
        document.getElementById('res').innerHTML = dis + ' Millas <br>' + res + ' metros';
    }else if(dis1 == 2 && dis2 == 3){
        res = dis * 5280;
        document.getElementById('res').innerHTML = dis + ' Millas <br>' + res + ' Pies';
    }else if(dis1 == 3 && dis2 == 2){
        res = dis / 5280;
        document.getElementById('res').innerHTML = dis + ' Pies <br>' + res + ' metros';
    }else if(dis1 == 3 && dis2 == 1){
        res = dis / 3.281;
        document.getElementById('res').innerHTML = dis + ' Pies <br>' + res + ' Millas';
    }
}

function calcu(){
    var pes = Number(document.getElementById('cant').value);
    var pes1 = document.getElementById('peso1').value;
    var pes2 = document.getElementById('peso2').value;
    var res = 0;
    if (pes1 == pes2) {
        document.getElementById('res').innerHTML = 'Las unidades son iguales';    
    }else if(pes1 == 1 && pes2 == 2){
        res = pes * 2.205;
        document.getElementById('res').innerHTML = pes + ' Kilogramos <br>' + res + ' Libras';
    }else if(dis1 == 1 && dis2 == 3){
        res = pes * 35.274;
        document.getElementById('res').innerHTML = pes + ' Kilogramos <br>' + res + ' Onzas';
    }else if(dis1 == 2 && dis2 == 1){
        res = pes / 2.205;
        document.getElementById('res').innerHTML = pes + ' Libras <br>' + res + ' Kilogramos';
    }else if(dis1 == 2 && dis2 == 3){
        res = pes * 16;
        document.getElementById('res').innerHTML = pes + ' Libras <br>' + res + ' Onzas';
    }else if(dis1 == 3 && dis2 == 2){
        res = pes / 16;
        document.getElementById('res').innerHTML = pes + ' Onzas <br>' + res + ' Libras';
    }else if(dis1 == 3 && dis2 == 1){
        res = pes / 35.274;
        document.getElementById('res').innerHTML = pes + ' Onzas <br>' + res + ' Kilogramos';
    }
}