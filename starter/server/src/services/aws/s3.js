const AWS = require('aws-sdk');
const s3Bucket = require('../../util/envs').s3Bucket;
const s3 = new AWS.S3();

/**
 * Presigns a url for uploading documents
 * @param {String} keyName A string of the document name
 * @param {boolean} isPublic A boolean that indicates the acl of the file
 * @return {Object} An object that contains the url and the authentication details
 */
const presignedPostDocument = (keyName, isPublic = false) => {
  const acl = isPublic ? 'public-read' : 'private';
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: s3Bucket,
      Fields: {
        Key: keyName,
      },
      Expires: 300,
      Conditions: [
        ['content-length-range', 0, 5242880],
        ['eq', '$Content-Type', 'application/pdf'],
        { acl },
      ],
    };
    s3.createPresignedPost(params, (err, data) => {
      if (err) {
        reject('Error while creating presigned post', err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = {
  presignedPostDocument
};
