import type { IProdotto, ICliente } from './interfaces.js';
export declare class Cliente implements ICliente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;
    constructor(nome: string, cognome: string, email: string, metodoPagamento: string);
    ordinaProdotto(prodotto: IProdotto): void;
}
//# sourceMappingURL=Cliente.d.ts.map