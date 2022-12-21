let firstNumber = prompt(`Informe o primeiro número: `)
let secondNumber = prompt(`Informe o segundo número: `)
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)
const sum = firstNumber + secondNumber
let isPair = sum % 2 == 0 ?  'par':'impar'
    

const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest = firstNumber % secondNumber



alert(`a soma é: ${sum} e é um número ` + isPair)
alert(`a subtração é:  ${sub}`)
alert(`a multiplicação é: ${mult}`)
alert(`a divisão é: ${div}`)
alert(`o resto da divisão é: ${rest}`)
