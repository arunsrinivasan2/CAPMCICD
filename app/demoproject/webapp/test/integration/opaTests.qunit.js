sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'demoproject/test/integration/FirstJourney',
		'demoproject/test/integration/pages/ProductsList',
		'demoproject/test/integration/pages/ProductsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('demoproject') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage
                }
            },
            opaJourney.run
        );
    }
);