# Blocktracr
Progetto per il corso Linguaggi e Tecnologie per il Web, Ingegneria Informatica e Automatica, Università La Sapienza 
## Descrizione
Il progetto è strutturato in cartelle.
Nella root directory troviamo il file `server.js` contenente le funzioni per interfacciarsi con il database.
Troviamo poi la cartella models che contiene il file `User.js` contenente lo schema del database.
A seguire, nella cartella public troviamo il file `index.html` che è il vero e proprio entry point del sito. Qui viene montato il componente `App.vue` e vengono importate le librerie necessarie quali Bootstrap e ccxt.
Quindi troviamo la cartella `src`.
A partire da qui abbiamo una cartella assets contentente i font e le immagini utilizzate.
Poi nella cartella `components` troviamo i singoli componenti delle pagine:
- `Coin.vue` è la pagina in cui forniamo la descrizione di ogni singola criptovaluta. Quando viene montata legge la props passata dal componente `LiveStats.vue` in base a quale moneta l'utente vuole visualizzare ed esegue la dovuta chiamata all'API.
- `CoinsBar.vue` è il componente che realizza la barra superiore in cui scorrono i prezzi delle monete
- `Dashboard.vue` è la vera a propria dashboard dell'utente. Contiene funzioni per interfacciarsi con il database e per il recupero dei dati da ccxt
- `Footer.vue` contiene il footer della pagina. E' l'unico componente statico del sito
- `LiveStats.vue` fornisce la lista delle criptovalute presenti sul mercato. Contiene una funzione di gestione del pagination e funzioni per ottenere dati dalla API di CoinGecko
- `Login.vue` e `Register.vue` sono i componenti che implementano le omonime funzioni attraverso funzioni che interagiscono con il database. La pagina di login emette inoltre un evento che verrà catturato dai componenti Home e Navbar
- `Home.vue` è la homepage del sito che implementa un gestore di eventi con cui stabiliamo se mostrare i bottoni Login/Register oppure il bottone Dashboard
- `Navbar.vue` contiene la navbar del sito, anche questa con un gestore di eventi per mostrare i redirect corretti oltre ad una funzione di logout che si interfaccia con il database

Nella cartella `router` troviamo un file `index.js` che descrive le regole di indirizzamento nel sito, ovvero stabilisce quali componenti montare al verificarsi di un dato evento.
In `views` troviamo altri componenti Vue che fanno da "wrapper" ai componenti presenti nella cartella components.
Il file `App.vue` contiene la definizione dei componenti da montare. Quelli sempre montati sono CoinsBar, Navbar e Footer, con in mezzo un router-view in cui vengono montate le view presenti nella apposita cartella.
Per concludere, in `main.js` eseguiamo la funzione di Vue per creare la nostra web app, le assegnamo le funzionalità aggiuntive quali il Vue Router ed un emitter di eventi e infine la associamo all'id del componente App.vue definito in `index.js`
I restanti file sono generati automaticamente alla creazione di un nuovo progetto Vue e contengono configurazioni e pacchetti importati
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run MongoDB server
```
npm run server
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Run built project
```
sudo npm install -g serve
serve -s dist
npm run server
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
