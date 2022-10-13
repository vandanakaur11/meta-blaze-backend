const axios = require("axios");
const { env } = require("process");

// console.log("env", env);

exports.createSubscription = (req, res) => {
  console.log("req.body.email >>>>>>>>>", req.body.email);

  const encodedParams = new URLSearchParams();
  encodedParams.append("email", req.body.email);

  const options = {
    method: "POST",
    url: "https://aweber2.p.rapidapi.com/1.0/accounts/%7BaccountId%7D/lists/%7BlistId%7D/subscribers",
    params: { "ws.op": "create" },
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: "undefined",
      "X-RapidAPI-Key": env.X_RapidAPI_Key,
      "X-RapidAPI-Host": "aweber2.p.rapidapi.com",
    },
    data: encodedParams,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log("response.data >>>>>>>>>>", response.data);
      res.setTimeout(20).send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
