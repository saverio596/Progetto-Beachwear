import type { IProdotto, ICliente } from './interfaces.js';

export class Cliente implements ICliente{
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;

    constructor(nome:string , cognome: string, email:string, metodoPagamento: string){
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }

    ordinaProdotto(prodotto: IProdotto): void{
        if(prodotto.stato === 'disponibile'){
            console.log(`${this.nome} sta ordinando il prodotto ${prodotto.idUnivoco}...`);
            prodotto.assegnaCliente(this);
        }else{
            console.log(`Spiacenti, il prodotto ${prodotto.idUnivoco} non è disponibile.`);
        }
    }

}



 