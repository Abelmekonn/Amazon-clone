const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express=require("express");
const cors=require('cors');
const { messaging } = require("firebase-admin");
const dotenv=require("dotenv").config();
const stripe=require("stripe")(
    process.env.STRIPE_KEY
)

const app=express()
app.use(cors({origin:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).json({
        messaging:"success",
    })
})


exports.api=onRequest(app)