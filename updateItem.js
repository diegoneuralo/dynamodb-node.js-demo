var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

// Create DynamoDB document client
var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

var params = {
  TableName: 'Movies',
  Key: {
    'year' : 2014,
    'title' : 'Krim Belkacem'
  },
  UpdateExpression: 'set category = :c , rating = :r',
  ExpressionAttributeValues: {
  	':c' : ["History", "War"],
    ':r' : 7
  }
};

docClient.update(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});

