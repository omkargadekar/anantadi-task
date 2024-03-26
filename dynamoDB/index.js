const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const dynamodb = new AWS.DynamoDB.DocumentClient();

const tableName = "item-table";
const getPath = "/getItem";
const postPath = "/createItem";

exports.handler = async (event) => {
  let response;
  if (event.httpMethod === "GET" && event.path === getPath) {
    response = await getSingleItem(event.queryStringParameters.itemId);
  } else if (event.httpMethod === "POST" && event.path === postPath) {
    response = await createItem(JSON.parse(event.body));
  } else {
    const resBody = {
      Message: "404 Not Found",
    };
    response = buildResponse(404, resBody);
  }
  return response;
};

const buildResponse = (statusCode, body = "", headers = {}) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
    headers: { ...headers, "Content-Type": "application/json" },
  };
};

const getSingleItem = async (itemId) => {
  const params = {
    TableName: tableName,
    Key: { itemId: itemId },
  };

  try {
    data = await dynamodb.get(params).promise();
    return buildResponse(200, data.Item);
  } catch (error) {
    console.log("Error getting single item from database: ", error);
    return buildResponse(500, error);
  }
};

const createItem = async (reqBody) => {
  const params = {
    TableName: tableName,
    Item: reqBody,
  };

  try {
    await dynamodb.put(params).promise();
    const body = {
      Operation: "POST",
      Message: "Item Created",
      Item: reqBody,
    };
  } catch (error) {
    console.log("Error creating new item in the database");
  }
};
