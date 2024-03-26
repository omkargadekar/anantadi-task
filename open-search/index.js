const { Client } = require("@elastic/elasticsearch");

exports.handler = async (event) => {
  const client = new Client({
    node: "https://search-sample-47iqru7z3qc7ilmjau3ouoy5by.us-east-1.es.amazonaws.com",
  });

  try {
    const { body } = await client.search({
      index: "index",
      body: {
        query: {
          match_all: {},
        },
      },
    });

    const responseData = body.hits.hits.map((hit) => hit._source);

    return {
      statusCode: 200,
      body: JSON.stringify(responseData),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
