var ROOT_SERVER_URL = 'http://localhost:3000';
if(process.env.NODE_ENV == 'production') {
  ROOT_SERVER_URL = 'http://askanexpert-server.herokuapp.com';
}

export default ROOT_SERVER_URL;
