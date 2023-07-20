// Usar npm install -y caso nao apareca json
//  let prompt = require("prompt-sync")()

//  let nome_recebido = prompt("Digite seu nome: ")
//  let idade_recebida = parseInt(prompt("Digite sua idade: "))

//  olaPessoa(nome_recebido, idade_recebida)


// for (let contador = 0; contador < Infinity; contador++) {

//     let pessoa = {
//         nome: nome_recebido,
//         idade: idade_recebida,
//     }

//     console.log("Ola " + pessoa.nome + "! Voce esta com " + pessoa.idade + " Ano")
// }

import PromptSync from "prompt-sync"

import { exercicio1 } from "./moduloExercicio1.js";
import { exercicio2 } from "./moduloExercicio2.js";
import { exercicio3 } from "./moduloExercicio3.js";
import { exercicio4 } from "./moduloExercicio4.js";
import { exercicio5 } from "./moduloExercicio5.js";
import { exercicio6 } from "./moduloExercicio6.js";

let prompt = PromptSync();

let resposta;

// Digite o numero do exercicio que voce quer exibir
do {
    console.log("Bem vindo ao menu de exercicios! ")

    resposta = prompt("Digite um numero de 1 a 6, para escolher um exercicio, ou 'sair' para interromper o programa : ")

    switch (resposta) {
        case "1":
            //Chamar exercicio 1
            console.log("Voce escolheu o exercicio 1")
            exercicio1()

            break;

        case "2":
            //Chamar exercicio 2
            console.log("Voce escolheu o exercicio 2")
            exercicio2()

            break

        case "3":
            //Chamar exercicio 3
            console.log("Voce escolheu o exercicio 3")
            exercicio3()

            break

        case "4":
            //Chamar exercicio 4
            console.log("Voce escolheu o exercicio 4")
            exercicio4()

            break

        case "5":
            //Chamar exercicio 5
            console.log("Voce escolheu o exercicio 5")
            exercicio5()

            break

        case "6":
            //Chamar exercicio 6
            console.log("Voce escolheu o exercicio 6")
            exercicio6()

            break

        default:
            console.log("Voce nao escolheu nunhum exercicio")
            break;
    }

} while (resposta != "sair")

// exercicio1()



// function olaPessoa(nome_, idade_) {

//     let pessoa = {
//         nome: nome_,
//         idade: idade_,
//     }

//     console.log("Ola " + pessoa.nome + "! Voce esta com " + pessoa.idade + " Ano")
// }

// olaPessoa("Thiago", 25)
// olaPessoa("Jessica", 23)
// olaPessoa("Odirlei", 52)