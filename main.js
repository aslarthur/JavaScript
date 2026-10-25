let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite outro número: "));
if (num1 > num2){
    console.log(`O número ${num1} é maior que ${num2}`);
}
else if (num1 == num2){
    console.log(`O número ${num1} é igual a ${num2}`);
}
else{
    console.log(`O número ${num2} é maior que ${num1}`);
}