# 🌐 SAP UI5 Navigation App

**SAP UI5 Navigation App** è un'applicazione di esempio sviluppata in SAP UI5, pensata per esercitarsi con funzionalità avanzate come il data binding, la navigazione e l'integrazione di servizi OData. L'app include una struttura di routing per navigare tra diverse sezioni, come dipendenti, progetti e servizi, e utilizza modelli di dati per recuperare e visualizzare informazioni da endpoint OData simulati.

## 🎯 Obiettivo del Progetto

Questo progetto ha lo scopo di esplorare le capacità di SAP UI5 per applicazioni aziendali complesse, concentrandosi su:
- **Data binding**: Gestione dei dati tramite modelli OData, con mappatura ai componenti della vista.
- **Routing e Navigazione**: Configurazione del routing per una navigazione fluida tra più viste e sezioni dell'applicazione.
- **Modelli e Servizi OData**: Utilizzo di servizi OData locali per il recupero e l'aggiornamento dei dati.
- **Interfaccia Responsiva**: Supporto per vari dispositivi, inclusi desktop, tablet e telefoni.

## 📂 Struttura del Progetto

Il progetto include una configurazione dettagliata in `manifest.json`, dove sono definiti i data sources, le viste, il routing e le impostazioni per il caricamento asincrono.

```plaintext
sap.ui.demo.nav/
├── i18n/                              # File di internazionalizzazione
├── localService/                      # Dati OData locali e file di metadata
│   ├── metadata.xml
│   ├── mockdata/Services.json
├── view/                              # Viste dell'applicazione (XML)
│   ├── App.view.xml
│   ├── Home.view.xml
│   ├── EmployeeList.view.xml
│   ├── ProjectList.view.xml
│   ├── ServiceList.view.xml
├── controller/                        # Controller per le viste
│   ├── App.controller.js
│   ├── Home.controller.js
│   ├── EmployeeList.controller.js
│   ├── ProjectList.controller.js
│   ├── ServiceList.controller.js
└── manifest.json                      # Configurazione dell'applicazione
```

### Descrizione dei File

- **manifest.json**: Configura i data sources, il routing e i modelli dell'app.
- **localService/mockdata/Services.json**: Dati di esempio per il servizio `serviceRemote`.
- **view/**: Contiene tutte le viste XML dell'app, incluse le viste di navigazione come `Home`, `EmployeeList`, `ProjectList` e `ServiceList`.

## 🚀 Funzionalità Principali

- **Navigazione e Routing**: La configurazione di `manifest.json` permette la navigazione tra le diverse sezioni con transizioni fluide.
- **Data Binding con OData**: Il modello OData consente di mappare i dati ai componenti dell'interfaccia utente per una visualizzazione dinamica.
- **Interfaccia Multi-Device**: L'app è progettata per essere responsive, adattandosi a desktop, tablet e smartphone.
- **Pagine di Dettaglio**: Ogni sezione ha una pagina di dettaglio (es., `employee`, `project`, `service`) per visualizzare informazioni specifiche.

## 🔧 Requisiti

- **SAP UI5 CLI**: Per eseguire e gestire l'applicazione, assicurati di avere la CLI SAP UI5 installata.
- **Node.js** e **npm**: Necessari per installare e gestire le dipendenze del progetto.

## 💻 Istruzioni per l'Esecuzione

1. **Installa la CLI di SAP UI5**:
   ```bash
   npm install --global @ui5/cli
   ```

2. **Clona la Repository**:
   ```bash
   git clone https://github.com/tuo-username/sap-ui-demo-nav.git
   cd sap-ui-demo-nav
   ```

3. **Installa le dipendenze**:
   ```bash
   npm install
   ```

4. **Avvia l'Applicazione**:
   ```bash
   ui5 serve -o index.html
   ```
   L'app sarà disponibile su `http://localhost:8080`.

## 📚 Risorse Utili

- [Documentazione SAP UI5](https://ui5.sap.com/) - Guida ufficiale e risorse.
- [OData V2 Documentation](https://www.odata.org/) - Informazioni sull'utilizzo di servizi OData V2.

---

Questo progetto è un ottimo esempio di come utilizzare SAP UI5 per creare applicazioni aziendali dinamiche e scalabili, includendo navigazione, data binding, e interfaccia responsiva.
