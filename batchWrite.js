var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  RequestItems: {
    "Movies": [
       {
         PutRequest: {
           Item: {
               "year": { "N": "2012" },
               "title": { "S": "After the Battle" },
               "rating": { "N": "5.4" }
           }
         }
       },
       {
         PutRequest: {
           Item: {
               "year": { "N": "2013" },
               "title": { "S": "Void" },
               "rating": { "N": "8.0" }
           }
         }
       },
       {
         PutRequest: {
           Item: {
               "year": { "N": "2012" },
               "title": { "S": "Asham" },
               "rating": { "N": "6.8" }
           }
         }
       },
       {
         PutRequest: {
           Item: {
               "year": { "N": "2014" },
               "title": { "S": "Krim Belkacem" }
           }
         }
       }
    ]
  }
};

ddb.batchWriteItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});