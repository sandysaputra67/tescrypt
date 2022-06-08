//publicPath is set as crypto for production you can change it according to your application
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/crypto/' : '/' ,
  filenameHashing: false
};