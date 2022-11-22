// Na function a entrada é o nome/number passado depois da string

const resultado = fizzBuzz(5);
console.log(resultado)

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
    return 'Não é um número'
    if (entrada % 3 === 0)
    return 'Fizz';
    if (entrada % 5 === 0)
    return 'Buzz';
    if (entrada % 3 && 5 === 0)
    return entrada;
}

