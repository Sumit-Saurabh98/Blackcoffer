const express = require('express');
const connection = require('./config/db');
const DataModel = require('./model/DataModel')
const cors = require('cors')
const router = require("./controllers/controller")

const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT;

app.use('/dashboard', router);


app.listen(PORT, async()=>{
try {
    await connection();
    console.log(`server listening on ${PORT}`);
} catch (error) {
    console.log(error)
}
});