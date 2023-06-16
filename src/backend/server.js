const express = require("express");
const axios = require("axios");
const qs = require("qs");
const authConfig = require("./auth_config.json");

// App
const app = express();
const port = 5002;

app.get("/api/oauth/token/:code", function (req, res) {
  const code = req.params.code;

  let data = qs.stringify({
    code: code,
    client_id: authConfig.clientId,
    redirect_uri: authConfig.redirectUrl,
    grant_type: "authorization_code",
  });

  let config = {
    method: "post",
    url: `https://${authConfig.domain}/oauth/token`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
      res.status(400).send(error);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
