var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-10-08'});

var params = {
    TableName:"Movies",
    Item:{
        "year": 2012,
        "title": "Zaytoun",
        "rating": 6.6,
        "category":["Adventure", "Drama", "Thriller"]
    }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});