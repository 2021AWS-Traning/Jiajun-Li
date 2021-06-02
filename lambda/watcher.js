exports.handler = function(event, context) {
  console.log("Request received:\n", JSON.stringify(event));
  const responseBody = JSON.stringify({
    "Status" : "SUCCESS",
    "UniqueId" : "Key",
    "Data" : event.Records[0].s3.object.key,
    "Reason" : ""
  });
  const https = require("https");
  const url = require("url");
  const parsedUrl = url.parse('${Handle}');
  const options = {
    hostname: parsedUrl.hostname,
    port: 443,
    path: parsedUrl.path,
    method: "PUT",
    headers: {
      "content-type": "",
      "content-length": responseBody.length
    }
  };
  const request = https.request(options, function(response) {
    console.log("Status code: " + response.statusCode);
    console.log("Status message: " + response.statusMessage);
    context.done();
  });
  request.on("error", function(error) {
    console.log("send(..) failed executing https.request(..): " + error);
    context.done();
  });
  request.write(responseBody);
  request.end();
};
