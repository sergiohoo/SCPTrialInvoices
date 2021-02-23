// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "namespace/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel,HelloDialog) {
        return UIComponent.extend("namespace.SAPUI5.Component", {
            metadata: {
                manifest : "json"
            },
            init : function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);
                //set data model on the view
                this.setModel(Models.createRecipient());
                //set 18n model on the view
                var i18nModel = new ResourceModel(
                    { bundleName: "namespace.SAPUI5.i18n.i18n" })
                this.setModel(i18nModel, "i18n");
                this._helloDialog = new HelloDialog(this.getRootControl());
            },
            exit : function () {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },
            openHelloDialog : function () {
                this._helloDialog.open();
            }
        })
    });