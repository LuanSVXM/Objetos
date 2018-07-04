class ATM {
    constructor(numeroSerie) {
        this._numeroSerie = numeroSerie;
        this._valor = 0;
        this._vetor= [[5,10,20,50,100], [0,0,0,0,0]];
        this._valores = []
    }
    get valor() {
        this._valor = 0
        for(let i = 0; i < this._vetor[0].length ; i++){
            this._valores[i] = (this._vetor[0][i] * this._vetor[1][i])
            this._valor+=(this._vetor[0][i] * this._vetor[1][i])
        }
        return this._valor;
    }
    get numeroSerie() {
        return this._numeroSerie;
    }

    abastecer(n1, n2) {
       if(this._vetor[0].indexOf(n2) > -1){
           this._vetor[1][this._vetor[0].indexOf(n2)]+=n1;
           return  this._vetor[1][this._vetor[0].indexOf(n2)];
       } else {
           return 0;
       }
       this._valor = 0
        for(let i = 0; i < this._vetor[0].length ; i++){
            this._valores[i] = (this._vetor[0][i] * this._vetor[1][i])
            this._valor+=(this._vetor[0][i] * this._vetor[1][i])
        }
    }
    cedulas(b) {
        if (this._vetor[0].indexOf(b) !== -1) {
            return this._vetor[1][this._vetor[0].indexOf(b)];
        } else {
            return 0;
        }
    }
    get retirar(a){
        if(a<= this._valor){
     for (let i = 0 ; i < 5; i++){
        
     }
    }
    }

}

const atm = new ATM(2344499);
console.log(atm.numeroSerie === 2344499);
// a linha a seguir não deve fazer efeito
atm.numeroSerie = 34883444;
console.log(atm.numeroSerie === 2344499);
// o ATM não tem dinheiro no início
console.log(atm.valor); // 0
console.log(atm.valor === 0);
// abastecendo com 33 notas de 100
atm.abastecer(33, 100);
// verificando a quantidade de cédulas de 100
console.log(atm.cedulas(100)); // 33
// espera-se 33 cédulas
console.log(atm.cedulas(100) === 33);
// e 33 * R$ 100 totalizando R$ 3300
console.log(atm.valor === 3300);
// espera-se nenhuma cédula de qualquer outro valor
console.log(atm.cedulas(5)); // 0
console.log(atm.cedulas(5) === 0);
console.log(atm.cedulas(50)); // 0
console.log(atm.cedulas(50) === 0);
// mesmo os que não existem podem ser consultados, mas retornam 0
console.log(atm.cedulas(3)); // 0
console.log(atm.cedulas(3) === 0);
// abastecimento de cédulas não existentes são rejeitados
atm.abastecer(8, 3); // 8 cédulas de R$ 3,00
console.log(atm.cedulas(3) === 0);
// consultando o valor
console.log(atm.valor); // 33 * 100 = 3300 reais
console.log(atm.valor === 3300);
console.log(atm.valores);

