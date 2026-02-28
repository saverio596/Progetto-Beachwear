import type { IProdotto, IProcessoProduzione } from './interfaces.js';

export class ProcessoProduzione implements IProcessoProduzione{
    nomeProcesso: string;
    descrizione: string;
    prodottiProduzione: IProdotto[] = [];
    
    constructor(nome:string, descrizione: string){
        this.nomeProcesso = nome;
        this.descrizione = descrizione;
    }

    aggiungiProdotto(prodotto: IProdotto): void{
        this.prodottiProduzione.push(prodotto);
        console.log(`Prodotto ${prodotto.idUnivoco} (${prodotto.tipo}) aggiunto al processo di produzione: ${this.nomeProcesso}.`);
    }
}