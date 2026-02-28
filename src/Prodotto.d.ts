import { IProdotto, ICliente } from './interfaces';
export declare class Prodotto implements IProdotto {
    idUnivoco: string | number;
    taglia: string;
    colore: string;
    tipo: 'costume da bagno' | 'pareo' | 'cappello';
    stato: 'disponibile' | 'esaurito';
    clienteAssegnato: ICliente | null;
    constructor(id: string | number, taglia: string, colore: string, tipo: 'costume da bagno' | 'pareo' | 'cappello');
    assegnaCliente(cliente: ICliente): void;
}
//# sourceMappingURL=Prodotto.d.ts.map