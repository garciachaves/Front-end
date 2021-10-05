let peso = 99;

if(peso > 100) {
    console.log("A peça possui um peso adequado, pode ser cadastrdo!")
}else {
    console.log("A peça não pode ser cadastrada, não possui o pesso mínimo")
}

let listaPecas = ["Disco de freio", "Amortecedor", "Virabrequim", "Vela", "Bateria", "Radiador", "Carter", "Correia", "Ignição", "Embreagem", "Fio" ]

//[1,2,3,4,5,6,7,8,9,10]
//[0,1,2,3,4,5,6,7,8,9]
// se selecionarmos oq vai ser comentando e clicar em ctrl+; a seleção será comentada

console.log("Peça de Exemplo: " + listaPecas[0])
let numeroPecas = listaPecas.length;

if (listaPecas.len < 10) {
    console.log("A lista ainda possui espaço para mais peças.")
} else {
    console.log("Não há mais espaço disponível na lista, a capacidade máxima foi atingida")
}

let nomePeca = "Fio"

if (nomePeca.length > 3) {
    console.log("Nome da peça é válido, pode seguir com o cadastro");
} else {
    console.log("Nome de peça inválido, o nome deve ter mais de 3 caracteres")
}

let nomePeca2 = listaPecas[9];

if (nomePeca2.length > 3) {
    console.log("Nome da peça é válido, pode seguir com o cadastro");
} else {
    console.log("Nome de peça inválido, o nome deve ter mais de 3 caracteres")
}