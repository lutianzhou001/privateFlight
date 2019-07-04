var unirest = require('unirest')

const query = {

    async queryFlight(parent, args, ctx, info) {

    var country = args.country
    var currency = args.currency
    var locale = args.locale
    var originPlace = args.originPlace
    var destinationPlace = args.destinationPlace
    var outboundpartialdate = args.outboundpartialdate
    var inboundpartialdate = args.inboundpartialdate

    unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/" + country + "/" + currency + "/" + locale + "/" + originPlace + "/" + destinationPlace + "/" + outboundpartialdate + "?inboundpartialdate=" + inboundpartialdate)
    .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "458f95aeb6msh06f46e4014c22a2p14b835jsn34ff7bf923f4")
    .end(function (result) {
        if (result.status == 200){
          var minPrice = result.body.Quotes[0].MinPrice;
          var isDirect = result.body.Quotes[0].Direct;
          for (i = 0; i < result.body.Quotes.length; i++){
            if (result.body.Quotes[i].MinPrice < minPrice){
              minPrice = result.body.Quotes[i].MinPrice
              isDirect = result.body.Quotes[i].Direct
            }
          }
          var List = {
            minPrice : minPrice,
            isDirect : isDirect
          }
          console.log(List)
          return List
        };
    })
 }
}

module.exports = { query }
