const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())


app.get('/', (res,req) => {
    res.send("Hello world")
});

app.use('/api/products', require('./routes/productRoute'));

app.listen(5000, async () => {
    try{
        await connectDB();
        console.log("MongoDB connected to the server");

    } catch(err){
        console.log(err);
    }
    console.log("Server running on http://localhost:5000");
})
