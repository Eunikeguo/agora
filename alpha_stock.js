'use strict';

const request = require( 'request' );


const options = {
    
    method: 'GET',
    url: 'https://www.alphavantage.co/query',
    qs: {
        
        function: 'TIME_SERIES_DAILY',
        symbol: 'AMZN',
        apikey: '5YE3EPHXYKWTBA13'
    },
};


request( options, ( error, response, body ) => {
    
    if( error ) {
      
        throw new Error( error );
    }

    const processedData = JSON.parse( body );

    const nicelyFormattedData = JSON.stringify( processedData, null, 4 );

    console.log( nicelyFormattedData );
});