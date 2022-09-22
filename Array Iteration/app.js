let numbersArrayOne;
numbersArrayOne = [1,2,3,4,5,6,7]
let numbersArrayTwo;
// numbersArrayTwo = numbersArrayOne.map(mapFunction)
// function mapFunction(value){
//     return value*2
// }
// numbersArrayTwo = numbersArrayOne.filter(filterFunction)
// function filterFunction(value){
//     return value>=2
// }
// let stringsArrayOne = ["Mahmut","ata","bak"];
// let stringsArrayTwo = stringsArrayOne.reduce(reduceFunction)
// function reduceFunction(sentence,value){
//     return sentence+" "+value
// }
// numbersArrayOne = [123,321,456]
// numbersArrayTwo = numbersArrayOne.reduce(numberReduceFunction)
// function numberReduceFunction(sum,value){
//     return sum + value}

// console.log(numbersArrayTwo)
// console.log(typeof numbersArrayTwo)
// document.querySelector('.text').textContent = `${numbersArrayTwo}`
// let test = [numbersArrayTwo+1]
// console.log(test)
// console.log(typeof test) 
// console.log(stringsArrayTwo)
// console.log(typeof stringsArrayTwo)
// let numbersArray = [0,65,34,97,56,6,65];
// let numbersArrayTwo = numbersArray.filter(function(value){
//     return value > 31; 
// })
let numbersArray = [0,65,34,97,56,6,65];
// let numbersArrayTwo = numbersArray.filter((value)=>{
//     return value>31
// })
// let numbersArrayTwo = numbersArray.find((value) =>{
//     return value>31
// })
// numbersArrayTwo = numbersArray.some((x) => x<10)

function checkPresence(array,value){
    return array.some((arrayValue)=> value === arrayValue)
}
console.log(checkPresence(numbersArray,56))




document.querySelector('.text').textContent = checkPresence(numbersArray,56)

