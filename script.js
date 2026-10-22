// ============================================================================
// QUESTÃO 1: Avaliação de Risco de Crédito
// ============================================================================
console.log("--- QUESTÃO 1: Avaliação de Risco de Crédito ---");

function avaliarRiscoDeCredito(rendaMensal, dividaAtual) {
    // Converte os parâmetros recebidos para números
    const renda = parseFloat(rendaMensal);
    const divida = parseFloat(dividaAtual);

    // Calcula a Taxa de Endividamento (TE)
    const TE = (divida / renda) * 100;

    // Retorna a classificação conforme a tabela
    if (TE < 10) {
        return "Risco Baixo";
    } else if (TE >= 10 && TE < 30) {
        return "Risco Moderado";
    } else {
        return "Risco Alto";
    }
}

// Solicita os valores ao usuário via prompt do navegador
const entradaRenda = prompt("Questão 1 - Digite sua renda mensal:");
const entradaDivida = prompt("Questão 1 - Digite sua dívida atual:");

const resultadoRisco = avaliarRiscoDeCredito(entradaRenda, entradaDivida);

// Exibe o resultado utilizando Template Literals
console.log(`Para a renda de R$ ${entradaRenda} e dívida de R$ ${entradaDivida}, o resultado é: ${resultadoRisco}`);


// ============================================================================
// QUESTÃO 2: Manipulação de array com métodos de array
// ============================================================================
console.log("\n--- QUESTÃO 2: Manipulação de Array ---");

const numeros = [];
let continuar = true;

// Recebe quantos números o usuário quiser
while (continuar) {
    const entrada = prompt("Questão 2 - Digite um número (ou clique em 'Cancelar' para parar):");
    
    if (entrada === null) {
        continuar = false;
    } else {
        const numero = parseFloat(entrada);
        if (!isNaN(numero)) {
            numeros.push(numero);
        }
    }
}

if (numeros.length > 0) {
    console.log("Array original:", numeros);

    // a) Maior e menor valor
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);
    console.log(`Maior valor: ${maior} | Menor valor: ${menor}`);

    // b) Novo array com o dobro (map)
    const dobro = numeros.map(num => num * 2);
    console.log("Array com o dobro:", dobro);

    // c) Filtrar números maiores que 5 (filter)
    const maioresQueCinco = numeros.filter(num => num > 5);
    console.log("Números maiores que 5:", maioresQueCinco);
} else {
    console.log("Nenhum número foi inserido.");
}


// ============================================================================
// QUESTÃO 3: Criação e manipulação de objeto (sem classe)
// ============================================================================
console.log("\n--- QUESTÃO 3: Objeto Literal ---");

// Criação do objeto literal
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    exibirInfo: function() {
        console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano}`);
    }
};

// a) Chamar o método exibirInfo()
carro.exibirInfo();

// b) Adicionar dinamicamente a propriedade cor
carro.cor = "Preto";

// c) Atualizar o valor do ano para o ano atual (2025 conforme o enunciado)
carro.ano = 2025;

// d) Exibir o objeto completo
console.log("Objeto carro atualizado:", carro);


// ============================================================================
// QUESTÃO 4: Orientação a Objetos (com classe e instância)
// ============================================================================
console.log("\n--- QUESTÃO 4: Orientação a Objetos (Classe) ---");

class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    detalhes() {
        console.log(`Livro: ${this.titulo} | Autor: ${this.autor} | Ano: ${this.ano}`);
    }
}

// a) Criar duas instâncias com dados diferentes
const livro1 = new Livro("O Alquimista", "Paulo Coelho", 1988);
const livro2 = new Livro("Dom Casmurro", "Machado de Assis", 1899);

// b) Chamar o método detalhes() para ambos
livro1.detalhes();
livro2.detalhes();


// ============================================================================
// QUESTÃO 5: Laços, condicionais e manipulação de string
// ============================================================================
console.log("\n--- QUESTÃO 5: Palíndromo ---");

const palavra = prompt("Questão 5 - Informe uma palavra:");

if (palavra) {
    // a) Exibir a quantidade de caracteres
    console.log(`A palavra "${palavra}" possui ${palavra.length} caracteres.`);

    // b) Verificar se é um palíndromo
    // Converte para minúsculo para evitar problemas com maiúsculas/minúsculas
    const palavraMinuscula = palavra.toLowerCase(); 
    const palavraInvertida = palavraMinuscula.split('').reverse().join('');

    if (palavraMinuscula === palavraInvertida) {
        console.log(`A palavra "${palavra}" é um palíndromo!`);
    } else {
        console.log(`A palavra "${palavra}" NÃO é um palíndromo.`);
    }
} else {
    console.log("Nenhuma palavra foi informada.");
}
