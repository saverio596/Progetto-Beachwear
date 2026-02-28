import type { IProdotto, IProcessoProduzione } from './interfaces.js';
export declare class ProcessoProduzione implements IProcessoProduzione {
    nomeProcesso: string;
    descrizione: string;
    prodottiProduzione: IProdotto[];
    constructor(nome: string, descrizione: string);
    aggiungiProdotto(prodotto: IProdotto): void;
}
//# sourceMappingURL=ProcessoProduzione.d.ts.map