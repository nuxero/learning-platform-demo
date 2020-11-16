module.exports = {
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  s3Bucket: process.env.S3_BUCKET,
  nodeEnv: process.env.NODE_ENV || 'development',
  vonageApiKey: process.env.VONAGE_API_KEY,
  vonageApiSecret: process.env.VONAGE_API_SECRET,
  vonageVideoApiKey: process.env.VONAGE_VIDEO_API_KEY,
  vonageVideoApiSecret: process.env.VONAGE_VIDEO_API_SECRET,
  vonageSenderNumber: process.env.VONAGE_SENDER_NUMBER
}