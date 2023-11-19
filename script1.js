function a(){
    let art = (document.getElementsByTagName('h3')).length;
    document.getElementById('m1').innerHTML = 'a) Numero de articulos del HTML: ' + art;
}

function b(){
    let divs = (document.getElementsByTagName('hr')).length;
    document.getElementById('m2').innerHTML = '<br>b) Numero de líneas divisoras dento del HTML: ' + divs;
}

function c(){
    let ele = (document.getElementsByTagName('li')).length;
    let ele2 = document.getElementById('elemen');
    let ele3 = ele2.getElementsByTagName('li').length;
    document.getElementById('m3').innerHTML = '<br>c) Número de elementos de la lista Elementos: ' + ele3 + 
    '<br>Número de elementos en total: ' + ele;
}

function d(){
    let de = document.getElementById('elemen');
    let de2 = (de.getElementsByTagName('li')).length;
    for (let i = 0; i < de.length; i++) {
        var i2 = de[i].getAttribute('href');
    }
    //let de3 = de2.getElementsByTagName('li');
    // for (let i = 0; i < de.length; index++) {
    //     let enlace = de2[i].getElementsByTagName('a')[0];
    //     let codenlace = enlace.getAttribute('href');
    //     document.getElementById('m4').innerHTML = '<br>Elemento ' + (i+1) + ':<br>' + 'Codigo del enlace: '
    //     + codenlace;
    // }
    document.getElementById('m4').innerHTML = 'd) Elementos: ' + i2;
    // for (let i = 0; i < de3.length; i++) {
    //     let enlace = de3[i].getAttribute('src');
    //     document.getElementById('m4').innerHTML = 'Enlace ' + (i+1) + ': ' + enlace;   
    // }

}

function e(){
    let de = document.getElementById('menu');
    let de2 = (de.getElementsByTagName('li')).length;
    //let de3 = de2.getElementsByTagName('li');
    // for (let i = 0; i < de.length; index++) {
    //     let enlace = de2[i].getElementsByTagName('a')[0];
    //     let codenlace = enlace.getAttribute('href');
    //     document.getElementById('m5').innerHTML = 'Elemento ' + (i+1) + ':<br>' + 'Codigo del enlace: '
    //     + codenlace;
    // }
    document.getElementById('m5').innerHTML = 'e) Elementos: ' + de2;
}

function f(){
    let efe = (document.getElementsByTagName('img')).length;
    document.getElementById('m6').innerHTML = 'f) Numero de imagenes dentro del HTML: ' + efe;
}

function g(){
    let ge = document.querySelectorAll('figure.imgAR2');
    let ge2 = ge.length;
    if (ge.length > 0) {
        let primeraimg = ge[0].querySelector('img');
        if (primeraimg) {
            document.getElementById('m7').innerHTML = 'g) Fuente src de la primera imagen: ' + 
            primeraimg.getAttribute('src') + '<br>Imágenes en total: ' + ge2;
        }
    }
}

function h(){
    let h1 = document.getElementById('imgAr3');
    let h2 = h1.getElementsByTagName('img').length;
    //let h1 = document.querySelectorAll('figure.imgAr3');
    //let h2 = h1.length;
    if (h2 > 0) {
        //let h3 = h2[1].querySelector('img');
        let h4 = h1[0].getElementsByTagName('img');
        if (h4) {
            document.getElementById('m8').innerHTML = 'h) A ver: ' + h3 + h4;
        }
    }
    //document.getElementById('m8').innerHTML = 'h) Imagenes del articulo 3: ' + h2;
}

function i(){
    let enlaces = document.getElementsByTagName('a');
    for (let index = 0; index < enlaces.length; index++) {
        document.getElementById('m9').innerHTML = 'Enlace ' + (index + 1) + ': ' + enlaces[index].textContent;
    }
    let numE = enlaces.length;
    //document.get
}

function j() {
    
}

function todo(){
    a();
    b();
    c();
    d();
    e();
    f();
    g();
    //h();
    //i();
    // j();
}