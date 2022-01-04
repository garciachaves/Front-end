let listaPecas = ["Disco de freio", "Amortecedor", "Virabrequim", "Vela", "Bateria", "Radiador", "Carter", "Correia", "Ignição", "Embreagem", "Fio" ];

if (listaPecas.length < 10) {
    console.log("A lista ainda possui espaço para mais peças.");
} else {
    console.log("Não há mais espaço disponível na lista, a capacidade máxima foi atingida");
}

let peso = 99;
if(peso > 100) {
    console.log("A peça possui um peso adequado, pode ser cadastrdo!");
}else {
    console.log("A peça não pode ser cadastrada, não possui o pesso mínimo");
}

let nomePeca = listaPecas[10];

if (nomePeca.length > 3) {
    console.log("Nome da peça é válido, pode seguir com o cadastro");
} else {
    console.log("Nome de peça inválido, o nome deve ter mais de 3 caracteres");
}
