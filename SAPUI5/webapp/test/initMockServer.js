sap.ui.define([
    '../localService/mockserver',
    'sap/m/MessageBox',

],
    /**
     * @param{typeof sap.m.MessageBox} MessageBox
     */
    function (mockserver, MessageBox) {
        var aMockservers = [];

        //Initialize the mock server
        aMockservers.push(mockserver.init());

        Promise.all(aMockservers).catch(function (oError) {
            MessageBox.error(oError.message);
        }).finally(function () {
            sap.ui.require(["module:sap/ui/core/ComponentSupport"])
        });
    });