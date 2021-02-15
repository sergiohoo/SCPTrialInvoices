sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast
     * */
    function (Controller, MessageToast) {
        return Controller.extend("namespace.SAPUI5.controller.App", {
            onInit: function () {

            },
            onShowHello: function () {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }
        })
    });