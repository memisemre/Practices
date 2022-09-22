// let numbersArrayOne;
// numbersArrayOne = [1,2,3,4,5,6,7]
// let numbersArrayTwo;
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
// let numbersArray = [0,65,34,97,56,6,65];
// let numbersArrayTwo = numbersArray.filter((value)=>{
//     return value>31
// })
// let numbersArrayTwo = numbersArray.find((value) =>{
//     return value>31
// })
// numbersArrayTwo = numbersArray.some((x) => x<10)

// function checkPresence(array,value){
//     return array.some((arrayValue)=> value === arrayValue)
// }
// console.log(checkPresence(numbersArray,56))
// const exampleArr = ["1,2,3,4,5,6"]
// const valuesArr = exampleArr.values();
// for (const sum of valuesArr){
//     document.querySelector('.text').textContent = sum
// }
// let arrayExample = [5,3,7,2]
// // arrayExample.sort();
// // console.log(arrayExample)
// // let stringArrayExample = ["mahmut","osman","murtaza","onur"]
// // stringArrayExample.sort()
// // console.log(stringArrayExample);
// arrayExample.pop();
// console.log(arrayExample)
// let numbers= [0,1,2,3,4,5,6]
// // numbers.push(7)
// // console.log(numbers)
// // console.log(numbers.length)
// let numberTwo = [7,8,9,10]
// numbers.push(numberTwo)
// document.querySelector('.text').textContent = numbers.join()
// console.log(...numbers)
// console.log(numbers.includes(4))
// console.log(numbers.indexOf(numberTwo))
// console.log(numbers.join())
// let stringArrayExample = ["ahmet","emre","osman"]
// document.querySelector('.text').textContent = stringArrayExample.join("")
let data = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
let entriesData = Object.entries(data);
document.querySelector('.text').textContent = entriesData;