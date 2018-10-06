var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-10-08'});

console.log("Querying for movies released in 2012 and title starts with an alphabet");

var params = {
    TableName : "Movies",
    ProjectionExpression:"#yr, title, rating",
    KeyConditionExpression: "#yr = :yyyy and title between :letter1 and :letter2",
    ExpressionAttributeNames:{
        "#yr": "year"
    },
    ExpressionAttributeValues: {
        ":yyyy": 2012,
        ":letter1": "A",
        ":letter2": "z"
    }
};

docClient.query(params, function(err, data) {
    if (err) {
        console.log("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log(" -", item.year + ": " + item.title+": " +item.rating);
        });
    }
});