const elementos = ['a', 'b', 'a', 'c', 'b', 'a', 'd', 'b', 'c', 'd'];

const conteoElemenetos = elementos.reduce((acumulador, valorActual) => {
    if(!acumulador[valorActual]) {
        acumulador[valorActual] = 1;
    } else {
        acumulador[valorActual]++;
    }
    return acumulador;
}, []);
console.log(conteoElemenetos);
    