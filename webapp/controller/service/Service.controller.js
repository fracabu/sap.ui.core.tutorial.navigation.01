sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("sap.ui.demo.nav.controller.service.Service", {

		onInit: function () {
			var oRouter = this.getRouter();

			oRouter.getRoute("services").attachMatched(this._onRouteMatched, this);

		},

		_onRouteMatched: function (oEvent) {
			var oArgs, oView;

			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();

			oView.bindElement({
				path: "/Services(" + oArgs.serviceId + ")",
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

			this.getRouter().navTo("serviceResume", {
				serviceId: oCtx.getProperty("ServiceID")
			});
		}

	});

});
