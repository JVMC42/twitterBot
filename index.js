var twit = require('twit');
const fs = require('fs')
const fetch = require('node-fetch');
const { log } = require('console');
require('dotenv').config()

const T = new twit({
    consumer_key: process.env.TAPI_KEY,
    consumer_secret: process.env.TAPI_SECRET_KEY,
    access_token: process.env.TACCESS_TOKEN,
    access_token_secret: process.env.TACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,
    
})

async function postar(){
    let filePath = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }})
    .then(res=>res.json())
    .then(data => data.joke)

    T.post('statuses/update', { status: filePath }, function(err, data, response) {
        console.log(data)
      })
}

setInterval(postar,10*1000);





