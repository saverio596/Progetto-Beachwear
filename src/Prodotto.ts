import type { IProdotto, ICliente } from './interfaces.js';

export class Prodotto implements IProdotto{
    idUnivoco: string | number;
    taglia: string;
    colore: string;
    tipo: 'costume da bagno' | 'pareo' | 'cappello';
    stato: 'disponibile' | 'esaurito';
    clienteAssegnato: ICliente | null = null;

    constructor(id:string | number, taglia: string, colore:string, tipo: 'costume da bagno' | 'pareo' | 'cappello'){
        this.idUnivoco = id;
        this.taglia = taglia;
        this.colore = colore;
        this.tipo = tipo;
        this.stato = 'disponibile';
    }

    assegnaCliente(cliente: ICliente): void{
        this.clienteAssegnato = cliente;
        this.stato = 'esaurito';
        console.log(`Prodotto ${this.idUnivoco} (${this.tipo}) assegnato a ${cliente.nome} ${cliente.cognome}.`);
    }

}