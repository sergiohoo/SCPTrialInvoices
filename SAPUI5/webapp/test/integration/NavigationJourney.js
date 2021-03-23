sap.ui.define([
    "namespace/SAPUI5/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/HelloPanel"
],
    /**
     * @param {typeof sap.ui.test.opaQunit} opaQunit 
     */
    function (mockserver, opaQunit) {

        QUnit.module("Navigation");

        opaQunit("Should open Hello Dialog", function (Given, When, Then) {

            //initialize mock server 
            mockserver.init();

            //Arrangements
            Given.iStartMyUIComponent({
                componentConfig: {
                    name: "namespace.SAPUI5"
                }
            });

            //Actions
            When.onTheAppPage.iSayHelloDialogButton();
            //Assertions
            Then.onTheAppPage.iSeeTheHelloDialog();
            //Cleanup
            Then.iTeardownMyApp();

        });
    });




