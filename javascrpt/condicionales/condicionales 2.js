 let nota1 = prompt("ingrese un número")
if (nota1%3)
{
    console.log("Fizz")
}else{
if (nota1%5)
{
    console.log("Buzz")
}else{
if (nota1%3 & 5)
{
    console.log("FizzBuzz")
}
}
}