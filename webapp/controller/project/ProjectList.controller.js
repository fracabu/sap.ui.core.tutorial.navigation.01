sap.ui.define([
    "sap/ui/demo/nav/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    
], function (BaseController) {
    "use strict";
    return BaseController.extend("sap.ui.demo.nav.controller.project.ProjectList", {
        onListItemPressed: function (oEvent) {
            var oItem, oCtx;
            var oModel= newJSONModel();
            oModel.loadData("model/Project.json");
            this.getView().setModel(oModel);

            oItem = oEvent.getSource();
            oCtx = oItem.getBindingContext();

            this.getRouter().navTo("project", {
                peojectId: oCtx.getProperty("ProjectID")

            });

            



        }
    });
});

// risolviamo questo errore:"List Binding is not bound against a list for "
// 1) creiamo un nuovo modello



// 2) carichiamo i dati nel modello



// 3) settiamo il modello sulla view



// 4) facciamo il binding sulla view



