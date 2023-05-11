sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/m/Button"
], function (BaseController, JSONModel, MessageToast, Button) {
	"use strict";

	return BaseController.extend("sap.ui.demo.nav.controller.Home", {

		onInit: function () {
			var oViewModel = new JSONModel({
				recipient: {
					name: "World",
					description: "",
					status: "Open",
					priority: "High"
				}
			});
			this.getView().setModel(oViewModel, "view");
		},

		onPressAddNewService: function () {
			this.byId("newServiceDialog").open();
		},

		onPressSaveNewService: function () {
			const oModel = this.getView().getModel("mockdata");
			oModel.refresh();
			const oNewService = oModel.getData();
			const oServices = oModel.getProperty("/services");
			const iNewServiceId = oServices.length + 1; // calcola l'id del nuovo servizio

			// Add the new service to the "services" array
			oServices.push({
				id: iNewServiceId,
				name: oNewService.name,
				description: oNewService.description,
				status: oNewService.status
			});

			// Update the model and close the dialog
			oModel.setProperty("/services", oServices);
			this.byId("newServiceDialog").close();

			// Navigate to the custom list item page
			const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("customListItem", { serviceId: iNewServiceId });
		},

		// Function to handle the "Annulla" button press
		onPressCancelNewService: function () {
			// Reset the model data and close the dialog
			const oModel = this.getView().getModel("mockdata");
			oModel.setData({});
			this.byId("newServiceDialog").close();
		},

		onDisplayNotFound: function () {
			// display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget: "home"
			});
		},

		onNavToEmployees: function () {
			this.getRouter().navTo("employeeList");
		},

		onNavToProject: function () {
			this.getRouter().navTo("projectList");
		},

		onCloseDialog: function () {
			this._oDialog.close();
		}
	});
});
