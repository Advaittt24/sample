const num1 = parseInt(prompt("Enter !st number : "))
const num2 = parseInt(prompt("Enter 2nd number:"))

let oprator = prompt("Enter a oprator")

if (oprator =="+"){
    console.log(num1+num2)

}
else if (oprator =="-"){
    console.log(num1-num2)

}
else if (oprator =="/"){
    console.log(num1/num1)

}
else if (oprator =="*"){
    console.log(num1*num2)
}
else {
    console.log("Enter a valid oprator")
}