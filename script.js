
alert("O jogo começou!")

let j1 = prompt("Bem vindo Jogador1 digite seu nome: ")
let t1 = parseInt(prompt("Digite um número: "))

let nomej1 = document.getElementById("j1")
nomej1.innerHTML = j1

let num1 = document.getElementById("n1")
num1.innerHTML = t1

alert("Carregando...")

let j2 = prompt("Bem vindo Jogador2 digite seu nome: ")
let t2 = parseInt(prompt("Digite um número: "))

let nomej2 = document.getElementById("j2")
nomej2.innerHTML = j2

let num2 = document.getElementById("n2")
num2.innerHTML = t2



let vitoria = "Jogador "
let empate = "Jogo empatado "
let erro = "Números incorretos, comece novamente"

if(t1 > t2){
    let vencedor = document.getElementById("vencedor")
    vencedor.innerHTML = vitoria + j1
} else if(t2 > t1){
    let vencedor = document.getElementById("vencedor")
    vencedor.innerHTML = vitoria + j2
} else if(t1 == t2) {
    let vencedor = document.getElementById("vencedor")
    vencedor.innerHTML = empate
} else{
    let vencedor = document.getElementById("vencedor")
    vencedor.innerHTML = erro
}

