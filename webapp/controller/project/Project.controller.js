sap.ui.define([
    "sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("sap.ui.demo.nav.controller.project.Project", {

        onInit: function () {
            var oRouter = this.getRouter();
            var oModel= newJSONModel();
            oModel.loadData("model/Project.json");
            this.getView().setModel(oModel);

            oItem = oEvent.getSource();
            oCtx = oItem.getBindingContext();

            this.getRouter().navTo("project", {
                peojectId: oCtx.getProperty("ProjectID")
                
            });

            oRouter.getRoute("projects").attachMatched(this._onRouteMatched, this);

            // Hint: we don't want to do it this way
            /*
             oRouter.attachRouteMatched(function (oEvent){
                 var sRouteName, oArgs, oView;

                 sRouteName = oEvent.getParameter("name");
                 if (sRouteName === "employee"){
                      this._onRouteMatched(oEvent);
                 }
             }, this);
             */

        },

        _onRouteMatched: function (oEvent) {
            var oArgs, oView;

            oArgs = oEvent.getParameter("arguments");
            oView = this.getView();

            oView.bindElement({
                path: "/Projects(" + oArgs.projectId + ")",
                events: {
                    change: this._onBindingChange.bind(this),
                    dataRequested: function (oEvent) {
                        oView.setBusy(true);
                    },
                    dataReceived: function (oEvent) {
                        oView.setBusy(false);
                    }
                }
            });
        },

        _onBindingChange: function (oEvent) {
            // No data for the binding
            if (!this.getView().getBindingContext()) {
                this.getRouter().getTargets().display("notFound");
            }
        },

        onShowResume: function (oEvent) {
            var oCtx = this.getView().getBindingContext();

            this.getRouter().navTo("projectResume", {
               projectId: oCtx.getProperty("ProjectID")
            });
        }

    });

});
