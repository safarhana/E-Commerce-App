const express = require('express');
const app = express();


app.get("/test", (req, res) => {
  res.status(200).send({
    message: 'Welcome to the server!',
  });
});


app.get("/products", (req, res) => {
  res.status(200).send({
    message: 'products are returned successfully',
  });
});

app.listen(3001, () => {
  console.log(`Server is running on port http://localhost:3001`);
});