const express = require('express');
//const request = require('request');
const fetch = require('node-fetch');
require('dotenv').config();
//console.log(process.env);

const app = express();
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`The server is listening at port ${port}.`);
});
app.use(express.static('public'));
app.use(express.json());

app.get('/weatherapi/:selectedCity',async(req,res)=>{
console.log("Greetings from the node server");
const selectedCity=req.params.selectedCity;
console.log(selectedCity);
let api_key=process.env.API_KEY;
const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=imperial&appid=${api_key}`

const fetch_response=await fetch(api_url);
const json_data = await fetch_response.json();
console.log(json_data.main);
res.json(json_data.main);

//Instead of node_fetch(), we can use request function shown as below:
//let request = require('request');
/*request(api_url,(error,response,body)=>{
let data = JSON.parse(body);
if (response.statusCode === 200){
    res.send("Some message")
}
}) 
Note: body has all the data. response is for the status*/

});