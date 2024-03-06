import axios from 'axios';

const url = 'http://dog-api.kinduff.com';

axios.get(url)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });