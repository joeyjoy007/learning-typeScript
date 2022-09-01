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

enum Role{Admin = 6,Read_only,Author=9}

console.log(Role.Admin,Role.Author)