const express = require ('express')
const mongoose= require ('mongoose')
const cors = require('cors')
const apiRouter = require('./routes/api');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://vipulwasnik0:Vipul123@cluster0.rykmcm3.mongodb.net/');

app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
