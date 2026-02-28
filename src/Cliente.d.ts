import { IProdotto, ICliente } from './interfaces';
export declare class Cliente implements ICliente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;
    constructor(nome: string, cognome: string, email: string, metodoPagamento: string);
    ordinaProdotto(prodotto: IProdotto): void;
}
//# sourceMappingURL=Cliente.d.ts.map