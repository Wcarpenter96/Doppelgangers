const axios = require("axios")
const cheerio = require("cheerio")

const scraper = {
  scrapeAll: async (req, res) => {
    try {
      let celebs = []
      let scrapeContent = await axios.get("https://www.imdb.com/list/ls058011111/")
      let $ = cheerio.load(scrapeContent.data)

      $("div.lister-item").each((index, element) => {
        let result = {}
        result.image = $(element).find("img").attr("src")
        result.name = $(element).find("h3.lister-item-header").find("a").text()
        celebs.push(result)
      })

      console.log(celebs)
      res.json(celebs)
    } catch (e) {
      res.json(e)
    }
  }
}

module.exports = scraper 
