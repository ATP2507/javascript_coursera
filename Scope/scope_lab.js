var globalVar = "Global variable"
let globalLet="Global variable using let"
const globalConst= "Global constant"

{
    var blockVar="Block scoped var"
    let blockLet="Block let"
    const blockConst="Block constant"

}
console.log(globalVar)
console.log(globalConst)
console.log(globalLet)
//console.log(blockVar)
//console.log(blockLet)

function show(){
    var functionVar="Block scope var"
    let functionLet="Block scope Let"
    const functionConst="Block scope const"
}
show();

console.log(functionVar)
console.log(functionLet)
console.log(FunctionConst)