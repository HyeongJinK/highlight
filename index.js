const express = require('express');
const app = express();

app.use(express.json());

const highlightRouter = require("./route/highlightRoute");
const themeRouter = require("./route/themeRoute");
const userRouter = require("./route/userRoute");

app.use('/highlight', highlightRouter);
app.use('/theme'    , themeRouter);
app.use('/user'    , userRouter);
  
app.get('/', function (req, res) {
  res.send('Hello World!');
});
  
app.listen(3000, () => {
  console.log('Server Start');
});