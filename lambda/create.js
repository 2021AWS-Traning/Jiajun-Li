const response = require('cfn-response');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function(event, context) {
  console.log("Request received:\n", JSON.stringify(event));
  const responseData = {};
  if (event.RequestType === 'Create') {
    const params = {
      Bucket: event.ResourceProperties.Bucket,
      Key: event.ResourceProperties.Key,
      Body: event.ResourceProperties.Body
    };
    s3.putObject(params).promise().then(function(data) {
      response.send(event, context, response.SUCCESS, responseData);
    }).catch(function(err) {
      console.log(JSON.stringify(err));
      response.send(event, context, response.FAILED, responseData);
    });
  } else if (event.RequestType === 'Delete') {
    const deleteParams = {
      Bucket: event.ResourceProperties.Bucket,
      Key: event.ResourceProperties.Key
    };
    s3.deleteObject(deleteParams).promise().then(function(data) {
      response.send(event, context, response.SUCCESS, responseData);
    }).catch(function(err) {
      console.log(JSON.stringify(err));
      response.send(event, context, response.FAILED, responseData);
    });
  } else {
    response.send(event, context, response.SUCCESS, responseData);
  }
};
