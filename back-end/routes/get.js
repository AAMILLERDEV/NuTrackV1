const fetch = require("node-fetch");
const express = require('express');
const router = express.Router();
const params = {
  api_key: 'n4EqjuH3IhpLyHwdtow2WZS5YNZm9N2U4i46h4Rs',
  query: 'bananas',
  dataType: ["Survey (FNDDS)","Branded"],
  pagesize: 5,
};

const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURI(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`

  function getData() {
  return fetch (api_url)
    .then(response => response.json())
  }
for (let i = 0; i < 5; i++){
  getData().then(data => console.log(data.foods[i].description))
}

