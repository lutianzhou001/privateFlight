var unirest = require('unirest')

async 

unirest.post("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0")
.header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
.header("X-RapidAPI-Key", "458f95aeb6msh06f46e4014c22a2p14b835jsn34ff7bf923f4")
.header("Content-Type", "application/x-www-form-urlencoded")
.send("inboundDate=2019-09-10")
.send("cabinClass=business")
.send("children=0")
.send("infants=0")
.send("country=US")
.send("currency=USD")
.send("locale=en-US")
.send("originPlace=SFO-sky")
.send("destinationPlace=LHR-sky")
.send("outboundDate=2019-09-01")
.send("adults=1")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
