function soma(){
    let numero1=document.getElementById("valor1").value
    let numero2=document.getElementById("valor2").value

resultado = parseFloat(numero1)+parseFloat(numero2)
document.getElementById("resultado1").innerHTML=resultado
}

function subtracao(){
    let numero1=document.getElementById("valor3").value
    let numero2=document.getElementById("valor4").value

resultado = parseFloat(numero1)-parseFloat(numero2)
document.getElementById("resultado2").innerHTML=resultado
}

function multiplicacao(){
    let numero1=document.getElementById("valor5").value
    let numero2=document.getElementById("valor6").value

resultado = parseFloat(numero1)*parseFloat(numero2)
document.getElementById("resultado3").innerHTML=resultado
}

function divisao(){
    let numero1=document.getElementById("valor7").value
    let numero2=document.getElementById("valor8").value

resultado = parseFloat(numero1)/parseFloat(numero2)
document.getElementById("resultado4").innerHTML=resultado
}