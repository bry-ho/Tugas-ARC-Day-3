const axios = require('axios');

const url = 'https://animechan.xyz/api/quotes';

axios.get(url)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });