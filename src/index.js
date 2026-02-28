import { Prodotto } from './Prodotto';
import { Cliente } from './Cliente';
import { ProcessoProduzione } from './ProcessoProduzione';
// 1. Inizializziamo il processo di produzione
const produzioneRiciclo = new ProcessoProduzione("RecyclePET-Basic", "Produzione da plastica recuperata");
// 1. Inizializziamo il processo di produzione
const costume1 = new Prodotto(1, "M", "Blu", "costume da bagno");
const pareo1 = new Prodotto(2, "Unica", "Rosso", "pareo");
produzioneRiciclo.aggiungiProdotto(costume1);
produzioneRiciclo.aggiungiProdotto(pareo1);
// 3. Creiamo un cliente
const cliente1 = new Cliente("Saverio", "Benedetto", "saverio.benedetto96@gmail.com", "Carte di Credito");
cliente1.ordinaProdotto(costume1);
console.log(`Stato prodotto 1: ${costume1.stato}`);
//# sourceMappingURL=index.js.map