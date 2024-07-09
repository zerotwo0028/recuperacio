// Ejercicio 2.5: Volumen del Cilindro
document.getElementById('formulario-25').addEventListener('submit', function(event) {
    event.preventDefault();
    const radio = parseFloat(document.getElementById('radio').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const errorElement = document.getElementById('error-25');
    const resultadosElement = document.getElementById('resultados-25');

    if (isNaN(radio) || isNaN(altura) || radio <= 0 || altura <= 0) {
        errorElement.textContent = 'Por favor, ingrese valores válidos para el radio y la altura.';
    } else {
        errorElement.textContent = '';
        const volumen = Math.PI * Math.pow(radio, 2) * altura;
        const nuevaFila = `<tr><td>${radio}</td><td>${altura}</td><td>${volumen.toFixed(2)}</td></tr>`;
        resultadosElement.insertAdjacentHTML('beforeend', nuevaFila);
    }
});

// Ejercicio 2.4: Agregar Números y verificar si son primos
let numeros24 = [];

document.getElementById('formulario-24').addEventListener('submit', function(event) {
    event.preventDefault();
    const numero = document.getElementById('numero-24').value.trim();
    const errorElement = document.getElementById('error-24');
    const resultadosElement = document.getElementById('resultados-24');

    if (numero.length === 0 || isNaN(numero)) {
        errorElement.textContent = 'Ingrese un número válido';
    } else {
        errorElement.textContent = '';
        numeros24.push(numero);
        imprimirNumeros24(numeros24, resultadosElement);
        limpiar24();
    }
});

function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function imprimirNumeros24(numeros, resultadosElement) {
    resultadosElement.innerHTML = '';
    numeros.forEach((num, index) => {
        const nuevaFila = `<tr><td>${index + 1}</td><td>${num}</td><td>${esPrimo(parseInt(num)) ? 'Sí' : 'No'}</td></tr>`;
        resultadosElement.insertAdjacentHTML('beforeend', nuevaFila);
    });
}

function limpiar24() {
    document.getElementById('numero-24').value = '';
    document.getElementById('numero-24').focus();
}

// Ejercicio 2.6: Longitud del Lado del Cuadrado
document.getElementById('formulario-26').addEventListener('submit', function(event) {
    event.preventDefault();
    const lado = parseFloat(document.getElementById('lado').value);
    const errorElement = document.getElementById('error-26');
    const resultadosElement = document.getElementById('resultados-26');

    if (isNaN(lado) || lado <= 0) {
        errorElement.textContent = 'Ingrese una longitud válida para el lado del cuadrado';
    } else {
        errorElement.textContent = '';
        const area = lado * lado;
        const perimetro = lado * 4;
        const nuevaFila = `<tr><td>${lado}</td><td>${area.toFixed(2)}</td><td>${perimetro.toFixed(2)}</td></tr>`;
        resultadosElement.insertAdjacentHTML('beforeend', nuevaFila);
    }
});

// Ejercicio 2.10: Agregar Marca y Modelo
let marcasModelos = [];

document.getElementById('formulario-210').addEventListener('submit', function(event) {
    event.preventDefault();
    const marca = document.getElementById('marca').value.trim();
    const modelo = document.getElementById('modelo').value.trim();
    const errorElement = document.getElementById('error-210');
    const resultadosElement = document.getElementById('resultados-210');

    if (marca.length === 0 || modelo.length === 0) {
        errorElement.textContent = 'Ingrese una marca y un modelo válidos';
    } else {
        errorElement.textContent = '';
        marcasModelos.push({ marca, modelo });
        imprimirMarcasModelos(marcasModelos, resultadosElement);
        limpiar210();
    }
});

function imprimirMarcasModelos(marcasModelos, resultadosElement) {
    resultadosElement.innerHTML = '';
    marcasModelos.forEach((item, index) => {
        const nuevaFila = `<tr><td>${item.marca}</td><td>${item.modelo}</td></tr>`;
        resultadosElement.insertAdjacentHTML('beforeend', nuevaFila);
    });
}

function limpiar210() {
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('marca').focus();
}

// Verificador de Números Primos
document.getElementById('formulario-primos').addEventListener('submit', function(event) {
    event.preventDefault();
    const numero = parseInt(document.getElementById('numero-primos').value);
    const errorElement = document.getElementById('error-primos');
    const resultadosElement = document.getElementById('resultados-primos');

    if (isNaN(numero)) {
        errorElement.textContent = 'Ingrese un número válido';
    } else {
        errorElement.textContent = '';
        const nuevaFila = `<tr><td>${numero}</td><td>${esPrimo(numero) ? 'Sí' : 'No'}</td></tr>`;
        resultadosElement.insertAdjacentHTML('beforeend', nuevaFila);
    }
});

// Suma de Números Pares entre 2 y 1000
document.getElementById('formulario-pares1000').addEventListener('submit', function(event) {
    event.preventDefault();
    const numero = parseInt(document.getElementById('numero-pares1000').value);
    const errorElement = document.getElementById('error-pares1000');
    const resultadosElement = document.getElementById('resultados-pares1000');

    if (isNaN(numero) || numero < 2 || numero > 1000) {
        errorElement.textContent = 'Ingrese un número válido entre 2 y 1000';
    } else {
        errorElement.textContent = '';
        const resultados = sumaNumerosPares(numero);
        imprimirNumerosPares(resultados, resultadosElement);
    }
});

function sumaNumerosPares(limite) {
    let suma = 0;
    let numero = 2;
    let resultados = [];

    while (numero <= limite) {
        suma += numero;
        resultados.push({ numero, suma });
        numero += 2;
    }

    return resultados;
}

function imprimirNumerosPares(resultados, resultadosElement) {
    resultadosElement.innerHTML = '';
    resultados.forEach((resultado, index) => {
        const nuevaFila = `<tr><td>${index + 1}</td><td>${resultado.numero}</td><td>${resultado.suma}</td></tr>`;
        resultadosElement.insertAdjacentHTML('beforeend', nuevaFila);
    });
}

// Suma de Números Pares entre 2 y 100
document.getElementById('formulario-pares100').addEventListener('submit', function(event) {
    event.preventDefault();
    const numero = parseInt(document.getElementById('numero-pares100').value);
    const errorElement = document.getElementById('error-pares100');
    const resultadosElement = document.getElementById('resultados-pares100');

    if (isNaN(numero) || numero < 2 || numero > 100) {
        errorElement.textContent = 'Ingrese un número válido entre 2 y 100';
    } else {
        errorElement.textContent = '';
        const resultados = sumaNumerosPares(numero);
        imprimirNumerosPares(resultados, resultadosElement);
    }
});

// Calculadora de Salario Semanal
document.getElementById('formulario-salario').addEventListener('submit', function(event) {
    event.preventDefault();
    const horas = parseFloat(document.getElementById('horas').value);
    const errorElement = document.getElementById('error-salario');
    const resultadosElement = document.getElementById('resultados-salario');
    const tarifa = 10;

    if (isNaN(horas) || horas < 0) {
        errorElement.textContent = 'Ingrese una cantidad válida de horas trabajadas';
    } else {
        errorElement.textContent = '';
        let salario = 0;
        if (horas <= 40) {
            salario = horas * tarifa;
        } else {
            salario = (40 * tarifa) + ((horas - 40) * tarifa * 1.5);
        }
        const nuevaFila = `<tr><td>${horas}</td><td>${salario.toFixed(2)}</td></tr>`;
        resultadosElement.insertAdjacentHTML('beforeend', nuevaFila);
    }
});
