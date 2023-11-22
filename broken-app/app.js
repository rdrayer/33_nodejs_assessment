const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    // promise.all to wait for all requests to complete
    let results = await Promise.all(
      req.body.developers.map(async d => {
        let response = await axios.get(`https://api.github.com/users/${d}`);
        return response.data;
      })
    );
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.json(out); //use res.json to send json response
  } catch (err){
    next(err);
  }
});

app.listen(3000, function() {
  console.log('app listening on port 3000');
});
