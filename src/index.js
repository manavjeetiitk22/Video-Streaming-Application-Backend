// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERRR:",error);
        throw error
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MOGNO db connection failed !!!", err);
})