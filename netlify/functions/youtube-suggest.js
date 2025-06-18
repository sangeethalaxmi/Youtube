const fetch = require("node-fetch");

exports.handler = async (event) => {
  const query = event.queryStringParameters.q; // Get query param like q=ds

  if (!query) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Query is required" }),
    };
  }

  // 1. Calls the original YouTube suggest API from the server (no CORS issue)
  const res = await fetch(
    `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(
      query
    )}`
  );
  const data = await res.json();

  // 2. Sends response back to the frontend
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": "*", // so React frontend can access
    },
  };
};
