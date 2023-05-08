sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	"sap/ui/core/Control",
	"sap/m/Button"
], function (BaseController, Control, Button) {
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
		}

	

	});

	// funzione che permetta di esplodere i panel allo scroll
	
	

});

	
	