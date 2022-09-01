// const typeScriptObject:{
//     name:string,
//     age:number
// } = {
//     name:"Garvit",
//     age:20
// }
// console.log(typeScriptObject.name)
// const arrayTuple:{
//     name:string,
//     age:number,
//     hobies:string[]
//     role:[number,string]
// }={
//     name:"Garvit",
//     age:30,
//     hobies:["Sports","Coding"],
//     role:[2,'admin']
// }
// console.log(arrayTuple.role)
// for(const hobby of arrayTuple.hobies){
//     console.log("Hobbies are",hobby)
// }
var Role;
(function (Role) {
    Role[Role["Admin"] = 6] = "Admin";
    Role[Role["Read_only"] = 7] = "Read_only";
    Role[Role["Author"] = 9] = "Author";
})(Role || (Role = {}));
console.log(Role.Admin, Role.Author);
