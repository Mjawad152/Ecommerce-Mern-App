import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import signupRouter from './routes/signupRouter.js';
import loginRouter from './routes/loginRouter.js';
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

  
  mongoose.connect('mongodb+srv://Ecomerce:123@cluster0.auofjqh.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


app.use('/sign-up', signupRouter);
app.use('/log-in', loginRouter);





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
