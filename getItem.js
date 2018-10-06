var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
    
ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

var params = {
  TableName: 'Movies',
  Key: {
    'year' : {N: '2012'},
    'title' : {S: 'Zaytoun'}
  }
};

// Call DynamoDB to read the item from the table
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", JSON.stringify(data.Item));
  }
});