var ROOT_SERVER_URL = 'http://askanexpert-server.herokuapp.com';
if(process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test') {
  ROOT_SERVER_URL = 'http://localhost:3000';
}

export default ROOT_SERVER_URL;
