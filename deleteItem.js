var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
    
ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

var params = {
  TableName: 'Movies',
  Key: {
    'year' : {N: '2014'},
    'title' : {S: 'Krim Belkacem'}
  }
};

// Call DynamoDB to delete the item from the table
ddb.deleteItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});