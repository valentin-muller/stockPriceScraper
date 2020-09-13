const fetch = require('node-fetch');
const cheerio = require('cheerio');

(async function() {

    const res = await fetch(
      "https://www.investing.com/equities/apple-computer-inc"
    );
    const text = await res.text();
    const $ = cheerio.load(text);
    const price = $("#quotes_summary_current_data span").first().text();
    console.log(price);
    
    
})();