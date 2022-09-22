//Array Destructuring;
// Nesnenin Özelliklerini Değişkenlere Atamak İçin Kullanırız.
// let names = ["emre","mahmut","osman"]
// let [name1,name2,name3,name4] = names;
// console.log(names)
// name4 = "emre"
// console.log("name1:" ,name1,"name2:",name2,"name3:",name3,"name4",name4);
// function deleteInfo(){
//     return null;
// }
// let [name,surname] = deleteInfo() || []; // değişkenler array içerisinde bulunduğu için "or array[]" kullandık.
// console.log([name,surname])
// // (2) [undefined, undefined]
// name = "osman"
// function deleteNames(){
//     return null;
// }
// let {firstname,secondaryname} = deleteNames() || {};
// console.log({firstname,secondaryname})
//{firstname: undefined, secondaryname: undefined}
// Silmek istediğimiz değişkenler herhangi bir değere sahip olsaydı ise ; 
// let firstname = "emre";
// let secondaryname = "memiş"
// function deleteNames(){
//     return null
// }
// let [firstname,secondaryname] = deleteNames() || []; // Daha önce değer verdiğimiz için "already been declared" hatası alıcaz. Değersiz değişkenlerde çalışır!
let oneHuman = [{
    id: 1,
    info: {
        name: "emre",
        secondaryname: "memiş",
        adress: {
            city:"gaziantep",
            street:"şahinbey"
        }
    }
}];
let [{
    id,
    info: {
    name,
    secondaryname,
    adress: {
        city,
        street
    }
},
}] = oneHuman;
// console.log(street)
console.log(street)
console.log(city)
let display = (personInfos) => {
     console.log(`${personInfos.name} ${personInfos.surname}`)
}
let personInfos = {
    name: "osman",
    surname: "oğluosman"
}
let displayTwo = ({name,surname}) => {
    console.log(`${name} ${surname}`)
}
display(personInfos)
displayTwo(personInfos)
console.log(personInfos.name)
console.log(`${personInfos.name} ${personInfos.surname}`)