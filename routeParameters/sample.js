const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.static('public'))
//home page
app.get('/product',(req,res)=>{
    res.send("product page ");
})

/*app.get('/product/laptop',(req,res)=>{
    res.send("laptop ");
})
app.get('/product/mobile',(req,res)=>{
    res.send("mobilephone ");
})*/

app.get('/product/:catogary/:brand',(req,res)=>{
    //res.send(req.params.catogary);
    const{catogary} = req.params;
    const{brand}    = req.params;
    /*if(catogary === 'laptop'){
        res.send("this is laptop page");
    }else if(catogary === 'mobile'){
        res.send("is is mobile");
    }else{
        res.send("other products");
    } */

    res.send(`product is ${catogary} and brand is ${brand}`);
   
})

app.listen(port,()=>{
    console.log(`app lisented on port:${port}`);
})
