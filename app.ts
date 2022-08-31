// const typeScriptObject:{
//     name:string,
//     age:number
// } = {
//     name:"Garvit",
//     age:20
// }
// console.log(typeScriptObject.name)

const arrayObject:{
    name:string,
    age:number,
    hobies:string[]

}={
    name:"Garvit",
    age:30,
    hobies:["Sports","Coding"]
}

console.log(arrayObject.hobies)

for(const hobby of arrayObject.hobies){
    console.log("Hobbies are",hobby)
}