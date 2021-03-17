QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";
    sap.ui.require([
        "namespace/SAPUI5/test/integration/NavigationJourney"
    ], function () {
        QUnit.start();
    });
});





