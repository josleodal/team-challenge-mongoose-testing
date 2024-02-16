const express = require('express');
const dotenv = require('dotenv');
const { dbConnection } = require('./config/confing');
const postRoutes = require('./routes/post');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/post', postRoutes);

dbConnection();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} http://localhost:3000`);
});

module.children =app;
