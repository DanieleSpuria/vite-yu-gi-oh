Vite Yu-Gi-Oh  
===

**Descrizione:**  
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.  
Al caricamento della pagina, effettuate una chiama ajax all’API di Vite Yu Gi Oh  
Documentazione: https://ygoprodeck.com/api-guide/  

Oggi terminate l’esercizio inserendo la ricerca per “Type”.  
La ricerca deve partire da una select posta in un componente figlio rispetto a dove viene fatta la chiamata API.

**Bonus:**  
Creare un componente che mostri il numero totale di risultati ottenuti.

## Sviluppo
- aggiunto h1 nell'Header
- aggiunto main e container
- aggiunta card
- creata classe card e col
- aggiunto store.js con url dell'api
- importato axios e aggiunta funzione getApi()
- aggiunta cardList nello store
- stampate tutte le card tramte ciclo
- aggiunto loading
- aggiunto numero totale di card trovate
- aggiunta impaginazione e bottoni per la navigazione
- aggiunto componente select e inserito nel main
- aggiunto array che viene riempito dai vari type dopo una chiamata parallela
- aggiunte opzioni alla select prendendole da typeList
- aggiunto bottone per la ricerca e proprietà nello store che memorizza il valore selezionato nella select
- visualizzati risultati ricerca e aggiunto tasto reset
- aggiunta funzione search() per eseguire la ricerca dall'inizio della lista e non a partire dalla pagina selezionata