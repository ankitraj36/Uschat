const { log } = require("console");
const express = require("express");

const app = express();

const port = 8080;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));


app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>{
    let diceval = Math.floor(Math.random() *6) +1;
    res.render("rolldice.ejs",{diceval: diceval});
});

app.get("/hello",(req,res) =>{
         res.send("hello");
});

const instadata = require("./data.json"); // Load once at the top

app.get("/uschat/:username", (req, res) => {
    const { username } = req.params;
    const data = instadata[username];

    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.status(404).render("error.ejs", { data: { name: "User Not Found" } });
    }
});///Uschat





app.listen(port, () =>{
      console.log(`listening to the port ${port}`);
      
});


