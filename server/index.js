import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
dotenv.config()
//dotenv.config({ silent: process.env.NODE_ENV === 'production' });
const app = express();
//setup Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req,res) => {
    res.send('Hello to Melancholia API')
})
//mongoDB cloud atlas for APP on Heroku
const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.9tsln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
//mongoDB CONNECTION_URL for localhost
/*
`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.gztyf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`    
*/
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then( () => app.listen(PORT, () =>
    console.log(`Server running on port: ${PORT}`)
))
.catch( (err) => console.log(err.message))

mongoose.set('useFindAndModify', false);