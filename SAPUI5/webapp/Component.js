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
    function (UIComponent, Models, ResourceModel, HelloDialog) {
        return UIComponent.extend("namespace.SAPUI5.Component", {
            metadata: {
                manifest: "json"
            },
            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);
                //set data model on the view
                this.setModel(Models.createRecipient());

                //set device model
                this.setModel(Models.createDeviceModel(), "device");

                this._helloDialog = new HelloDialog(this.getRootControl());

                //create views based on url/hash
                this.getRouter().initialize();
            },
            exit: function () {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },
            openHelloDialog: function () {
                this._helloDialog.open();
            },
            getContentDensityClass: function () {
                if (!sap.ui.Device.support.touch) {
                    this._sContentDensityClass = "sapUiSizeCompact";
                }
                else {
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
                return this._sContentDensityClass;
            }
        })
    });