sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/routing/History'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.core.routing.History} History
     */
    function (Controller, History) {
        return Controller.extend("namespace.SAPUI5.controller.Details", {
            onInit: function () {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("Details").attachPatternMatched(
                    this._onObjectMatch, this);
            },
            _onObjectMatch: function (oEvent) {
                this.getView().bindElement({
                    path: "/" + window.decodeURIComponent(
                        oEvent.getParameter("arguments").invoicePath),
                    model: "northwind"
                })
            },
            onNavBack: function () {
                const oHistory = History.getInstance();
                const sPreviousHash = oHistory.getPreviousHash();
                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("RouteApp", {}, true);
                }
            }
        })
    });


    