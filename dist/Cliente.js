export class Cliente {
    nome;
    cognome;
    email;
    metodoPagamento;
    constructor(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    ordinaProdotto(prodotto) {
        if (prodotto.stato === 'disponibile') {
            console.log(`${this.nome} sta ordinando il prodotto ${prodotto.idUnivoco}...`);
            prodotto.assegnaCliente(this);
        }
        else {
            console.log(`Spiacenti, il prodotto ${prodotto.idUnivoco} non è disponibile.`);
        }
    }
}
//# sourceMappingURL=Cliente.js.map