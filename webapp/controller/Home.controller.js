sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	"sap/ui/core/Control",
	"sap/m/Button",
	"sap/m/MessageToast"
], function (BaseController, MessageToast, Control, Button) {
	"use strict";



	return BaseController.extend("sap.ui.demo.nav.controller.Home", {

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
		onAddProjectPress: function() {
			var oView = this.getView();
		
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment(oView.getId(), "my.addProjectDialog", this);
				oView.addDependent(this._oDialog);
			}
		
			this._oDialog.open();
		},
		
		onCloseDialog: function() {
			this._oDialog.close();
		},
		
		onPressAddNewService: function() {
			var oDialog = this.getView().byId("newServiceDialog");
			oDialog.open();
		},
		onPressCancelNewService: function() {
			var oDialog = this.getView().byId("newProjectDialog");
			oDialog.close();
		},
		onPressSaveNewService: function() {
			var oDialog = this.getView().byId("saveServiceDialog");
			oDialog.close();
		}
		
		
		
		

	



	});

	// funzione che permetta di esplodere i panel allo scroll



});


