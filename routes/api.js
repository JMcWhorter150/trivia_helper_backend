var express = require('express');
var router = express.Router();
const axios = require('axios');




router.get('/currentnews', async (req, res) => {
  const url = `http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${process.env.NEWSAPI_KEY}`;
  const result = await axios.get(url);
  res.json(result.data);
});

router.get('/sportsnews', async (req, res) => {
  const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI_KEY}`;
  const result = await axios.get(url);
  res.json(result.data);
});

router.get('/randomquestion', async (req, res) => {
  const url = `https://api.apify.com/v2/actor-tasks/7GCxpRZuB3myEffh6/runs/last/dataset/items?token=${process.env.APIFY_KEY}`;
  const result = await axios.get(url);
  res.json(result.data);
});

router.get('/sportstrivia', async (req, res) => {
  const url = `https://api.apify.com/v2/actor-tasks/J5K8SwHCw5kWjSdPb/runs/last/dataset/items?token=${process.env.APIFY_KEY}`;
  const result = await axios.get(url);
  res.json(result.data);
});

router.get('/filmtrivia', async (req, res) => {
  const url = `https://api.apify.com/v2/actor-tasks/NHADsLTRDGnTZJhPu/runs/last/dataset/items?token=${process.env.APIFY_KEY}`;
  const result = await axios.get(url);
  res.json(result.data);
});

router.get('/musictrivia', async (req, res) => {
  const url = `https://api.apify.com/v2/actor-tasks/QjL2MXmqzG6zHXaGr/runs/last/dataset/items?token=${process.env.APIFY_KEY}`;
  const result = await axios.get(url);
  res.json(result.data);
});

module.exports = router;
