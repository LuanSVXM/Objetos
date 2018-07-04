class Tela {
    constructor(marca, potencia) {
        this.__marca = marca;
        this._potencia = potencia;
        this._power = false;
        this._ligadonoPC = false;
    }
    get marca() {
        return this.__marca;
    }
    get potencia() {
        return this._potencia;
    }
    get power() {
        return this._power;
    }
    get ligadonoPC() {
        return this._ligadonoPC;
    }
    ligar() {
        if (this._power === false) {
            this._power = true;
            return this._power;
        } else {
            this._power = false;
            return this._power;
        }
    }
    ligarnoPC() {
        if (this._ligadonoPC === false) {
            this._ligadonoPC = true;
            return this._ligadonoPC;
        } else {
            this._ligadonoPC = false;
            return this._ligadonoPC;
        }
    }
}

const tela = new Tela('LG', 110);
tela.marca = 'Asus'; // nao funcionar
console.log(tela.marca === 'LG'); // true
console.log(tela.ligadonoPC === false); // inicia desligado
console.log(tela.power === false); // tela desligada
tela.ligar();
console.log(tela.power === true); // Está ligada agora
tela.ligarnoPC();
console.log(tela.ligadonoPC === true); // está ligado
console.log(tela.power === true); // tela desligada
tela.ligar();
console.log(tela.power === false); // tela desligada
console.log(tela.ligadonoPC === true); // tela desligada mais conectanda
tela.ligarnoPC();
console.log(tela.ligadonoPC === false); // desligada do pc

