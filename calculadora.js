
//Funcion para mostrar los numeros por la pantalla de la calculadora 
function numero(numero) {
    if (!isOn) return;
    const screen = document.querySelector('.screen');
    if (!isNaN(parseFloat(numero)) && isFinite(numero)) { 
        screen.value = screen.value + numero;
    }
    limiteNum(); 
}

/*------------------OPERACIONES-----------------------*/ 
let operator = '';

function sumar() {    
    if (!isOn) return;
    operator = '+';
    const screen =  document.querySelector('.screen');
    screen.value = screen.value + '+';
}

function restar() {
    if (!isOn) return;
    operator = '-';
    const screen =  document.querySelector('.screen');
    screen.value = screen.value + '-';
}

function multiplicar() {
    if (!isOn) return;
    operator = '*';
    const screen =  document.querySelector('.screen');
    screen.value = screen.value + '*';
}

function dividir() {
    if (!isOn) return;
    operator = '/';
    const screen =  document.querySelector('.screen');
    screen.value = screen.value + '/';
}

function raizCuadrada() {
    if (!isOn) return;
    operator = '√';
    const screen = document.querySelector('.screen');
    const resultado = Math.sqrt(parseFloat(screen.value));
    if (!isNaN(resultado)) { 
        screen.value = resultado.toString();
    } else {
        screen.value = 'Syntax Error';
    }
}


/*------------------OTRAS FUNCIONES-----------------------*/ 

function igual() {
    if (!isOn) return;
    const screen =  document.querySelector('.screen');
    const valor = parseFloat(screen.value);
    if (!isFinite(valor)) { 
        alert("No es un número válido.");
    } else {
        const resultado = eval(screen.value);
        screen.value = resultado;
    }
    screen.value = resultado;
}

function borrar() {
    if (!isOn) return;
    const screen =  document.querySelector('.screen');
    screen.value = '';
}

function decimal() {
    if (!isOn) return;
    const screen = document.querySelector('.screen');
    if (screen.value === '' || screen.value === '-') {
        screen.value += '0.';
    } else if (!screen.value.includes('.')) {
        screen.value += '.';
    }
}

function limiteNum() {
    const screen = document.querySelector('.screen');
    const limite = parseFloat(screen.value);
    if (limite > 999999999999999) { 
        alert("Se ha excedido el límite de números");
        borrar();
    }
}

let isOn = true; 

function onOff() {
    const powerButton = document.querySelector('.power');
    isOn = !isOn; 
    if (!isOn) {
        document.querySelector('.screen').value = '';
        operator = '';
    }
    powerButton.classList.toggle('off', !isOn);
}