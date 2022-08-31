// const typeScriptObject:{
//     name:string,
//     age:number
// } = {
//     name:"Garvit",
//     age:20
// }
// console.log(typeScriptObject.name)
var arrayObject = {
    name: "Garvit",
    age: 30,
    hobies: ["Sports", "Coding"]
};
console.log(arrayObject.hobies);
for (var _i = 0, _a = arrayObject.hobies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log("Hobbies are", hobby);
}
