console.log('Loading function');

const aws = require('aws-sdk');

const s3 = new aws.S3({ apiVersion: '2006-03-01' });

const targetBucketName = 'jiajun-target-bucket'

exports.handler = async (event) => {
  const sourceBucketName = event.Records[0].s3.bucket.name;
  const sourceKey = event.Records[0].s3.object.key;
  try {

    const result = await s3.copyObject({
      Bucket: targetBucketName,
      CopySource: `${sourceBucketName}/${sourceKey}`,
      Key: sourceKey
    }).promise();
    console.log('upload to target bucket', JSON.stringify(result));

    return result;
  } catch (err) {
    console.log(err);
  }
};
