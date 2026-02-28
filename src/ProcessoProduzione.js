import { IProdotto, IProcessoProduzione } from './interfaces';
export class ProcessoProduzione {
    nomeProcesso;
    descrizione;
    prodottiProduzione = [];
    constructor(nome, descrizione) {
        this.nomeProcesso = nome;
        this.descrizione = descrizione;
    }
    aggiungiProdotto(prodotto) {
        this.prodottiProduzione.push(prodotto);
        console.log(`Prodotto ${prodotto.idUnivoco} (${prodotto.tipo}) aggiunto al processo di produzione: ${this.nomeProcesso}.`);
    }
}
//# sourceMappingURL=ProcessoProduzione.js.map