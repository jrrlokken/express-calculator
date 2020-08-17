const express = require('express');

const ExpressError = require('./expressError');
const { mean, median, mode, validateQueryParams } = require('./helpers');

const app = express();

app.use(express.json());

app.get('/mean', function (req, res, next) {
  try {
    if (!req.query.nums) {
      throw new ExpressError("Please provide a list of numbers", 400);
    }
    const nums = req.query.nums.split(',');
    if (!validateQueryParams(nums)) {
      throw new ExpressError("Invalid query parameters", 400);
    }
    const result = mean(nums);
    return res.status(200).json({ response: { operation: "mean", value: result }});
  } catch (error) {
    next(error)
  }
});

app.get('/median', function (req, res, next) {
  try {
    if (!req.query.nums) {
      throw new ExpressError("Please provide a list of numbers", 400);
    }
    const nums = req.query.nums.split(',')
    if (!validateQueryParams(nums)) {
      throw new ExpressError("Invalid query parameters", 400);
    }
    const result = median(nums);
    return res.status(200).json({ response: { operation: "median", value: result }});
  } catch (error) {
    next(error)
  }
});

app.get('/mode', function (req, res, next) {
  try {
    if (!req.query.nums) {
      throw new ExpressError("Please provide a list of numbers", 400);
    }
    const nums = req.query.nums.split(',')
    if (!validateQueryParams(nums)) {
      throw new ExpressError("Invalid query parameters", 400);
    }
    const result = mode(nums);
    return res.status(200).json({ response: { operation: "mode", value: result }});
  } catch (error) {
    next(error)
  }
});

// If no other route matches, respond with a 404
app.use((req, res, next) => {
  const error = new ExpressError("Page Not Found", 404)
  next(error)
})

app.use(function (err, req, res, next) {
  let status = err.status || 500;
  let message = err.msg;

  return res.status(status).json({
    error: { message, status }
  });
});

app.listen(3000, () => {
  console.log("Server listening on localhost:3000...")
});