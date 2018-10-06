# DynamoDB Node.js Demo

```
git clone https://github.com/eMahtab/dynamodb-node.js-demo

cd dynamodb-node.js-demo

npm install

```


### Create DynamoDB Table (Movies)

```
AWS_PROFILE={YOUR_PROFILE_NAME} node createTable.js
e.g AWS_PROFILE=mahtab-sysops node createTable.js
```

### Write a single Item to Movies Table

```
AWS_PROFILE={YOUR_PROFILE_NAME} node singleWrite.js
e.g AWS_PROFILE=mahtab-sysops node singleWrite.js
```

### Write multiple Items in batch to Movies Table

```
AWS_PROFILE={YOUR_PROFILE_NAME} node batchWrite.js
e.g AWS_PROFILE=mahtab-sysops node batchWrite.js
```

### Read a single Item from Movies Table

```
AWS_PROFILE={YOUR_PROFILE_NAME} node getItem.js
e.g AWS_PROFILE=mahtab-sysops node getItem.js
```

### Query Movies Table based on Primary key (year)

```
AWS_PROFILE={YOUR_PROFILE_NAME} node query01.js
e.g AWS_PROFILE=mahtab-sysops node query01.js
```
