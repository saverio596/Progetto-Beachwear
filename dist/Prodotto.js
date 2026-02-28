export class Prodotto {
    idUnivoco;
    taglia;
    colore;
    tipo;
    stato;
    clienteAssegnato = null;
    constructor(id, taglia, colore, tipo) {
        this.idUnivoco = id;
        this.taglia = taglia;
        this.colore = colore;
        this.tipo = tipo;
        this.stato = 'disponibile';
    }
    assegnaCliente(cliente) {
        this.clienteAssegnato = cliente;
        this.stato = 'esaurito';
        console.log(`Prodotto ${this.idUnivoco} (${this.tipo}) assegnato a ${cliente.nome} ${cliente.cognome}.`);
    }
}
//# sourceMappingURL=Prodotto.js.map