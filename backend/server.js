import express from "express";
import mongoose from "mongoose";
import Cors from 'cors'
import Cards from "./dbCards.js";

// App Config
const app = express();
const port = process.env.PORT || 8001
const connectionUrl = 'mongodb+srv://admin:od1R3ap7TEHBj35x@cluster0.7rycc.mongodb.net/tinderdb?retryWrites=true&w=majority'

// Middlewares
app.use(express.json())
app.use(Cors())

// DB Config
mongoose.connect(connectionUrl, {
    // useCreateIndex: true, 
    // useFindAndModify: false, 
    // useNewUrlParser: true, 
    // useUnifiedTopology: true 
 }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
 })

// API Endpoints
app.get('/',(req,res) => res.status(200).send('Hello world'))

app.post('/tinder/card', (req,res) => {
    const dbCard = req.body

    Cards.create(dbCard,(err,data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/card',(req,res) =>{
    Cards.find((err,data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () =>console.log(`listening on localhost: ${port}`))