//Array Destructuring;
let names = ["emre","mahmut","osman"]
let [name1,name2,name3,name4] = names;
console.log(names)
name4 = "emre"
console.log("name1:" ,name1,"name2:",name2,"name3:",name3,"name4",name4);
function deletePerson(){
    return null;
}
let deleteNames = deletePerson() || [];
console.log(deleteNames)