let numbersArrayOne = [1,2,3,4,5,6,7]
let numbersArrayTwo = numbersArrayOne.map(myFunction)
document.querySelector('.text-area').innerHTML = `${numbersArrayTwo}`
function myFunction(value){
    return value*2
}
console.log(numbersArrayTwo)