const express = require("express");

const app =  express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const db = require("./models");

// db.sequelize.sync();

db.sequelize.sync({force: true}).then(() => {
    console.log("DB started and all tables were dropped and new created");
})

app.get("/",(req,res) => {
    res.json({message: "Hello world"});
});

// require("./routes/bicycle.routes")

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Service listening on port: "+PORT);
});