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

Wait for a minute while Table is being created.

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

### Query Movies Table based on Primary key (year) and Sort key (title)

```
AWS_PROFILE={YOUR_PROFILE_NAME} node query02.js
e.g AWS_PROFILE=mahtab-sysops node query02.js
```

### Scan Movies Table and then Filter results

```
AWS_PROFILE={YOUR_PROFILE_NAME} node scan01.js
e.g AWS_PROFILE=mahtab-sysops node scan01.js
```

### Update an Item in Movies Table

```
AWS_PROFILE={YOUR_PROFILE_NAME} node updateItem.js
e.g AWS_PROFILE=mahtab-sysops node updateItem.js
```


