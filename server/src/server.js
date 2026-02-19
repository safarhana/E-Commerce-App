const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

const isLoggedIn = (req, res, next) => {
  console.log("isLoggedIn middleware called");
  next();
};

app.get("/test", (req, res) => {
  res.status(200).send({
    message: 'api testing is working fine!',
  });
});

app.get("/api/user",isLoggedIn, (req, res) => {
  res.status(200).send({
    message: 'user profile is returned!',
  });
});


app.listen(3001, () => {
  console.log(`Server is running on port http://localhost:3001`);
});