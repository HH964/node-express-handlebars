const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", (req,res) => {
    res.redirect("/burgers");
});

router.get("/burgers", (req,res) => {
    burger.selectAll( (data) => {
        const hbsObj = {
            burgers:data
        };
        res.render("index",hbsObj);
    });
});

router.post("/:id", (req,res) => {
    const id = req.params.id;
    
    // console.log(id);

    burger.updateOne(id, () => {
        res.redirect("/");
    });
});

router.post("/", (req,res) => {
    burger.insertOne(req.body.burger_name, () => {
        res.redirect("/");
    });
});

module.exports = router;