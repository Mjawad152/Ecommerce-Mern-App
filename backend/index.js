import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import signupRouter from './routes/signupRouter.js';
import loginRouter from './routes/loginRouter.js';
import { userModel } from './models/userModel.js';
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

  
  mongoose.connect('mongodb+srv://Ecomerce:123@cluster0.auofjqh.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


app.use('/sign-up', signupRouter);
app.use('/log-in', loginRouter);


app.post('/user-data', async (req, res) => {

  const {productName,productDescription,productPrice,productUrl} = req.body;
  const userdata = new userModel({
     productName,
     productDescription,
     productPrice,
     productUrl,
     
  });


  console.log("user add done");
  await userdata.save();
  

});
app.get('/user-items', async (req, res) => {
  try {
      console.log("fetch done for user");
      const userDetail = await userModel.find();
      res.status(200).json(userDetail);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}); 


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
