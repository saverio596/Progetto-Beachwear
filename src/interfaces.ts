export interface IProdotto{
    idUnivoco: string | number;
    taglia: string;
    colore: string;
    tipo: 'costume da bagno' | 'pareo' | 'cappello';
    stato: 'disponibile' | 'esaurito';

    assegnaCliente(cliente: ICliente):void;
}

export interface ICliente{
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;

    ordinaProdotto(prodotto: IProdotto): void;
}

export interface IProcessoProduzione{
    nomeProcesso: string;
    descrizione: string;
    prodottiProduzione: IProdotto[];

    aggiungiProdotto(prodotto: IProdotto): void;
}