const Stock = require("../models/stockmodels");
const router = require("express").Router();
const axios = require("axios");

router.get("/get10stock", async (req, res) => {
  try {
    const res = await axios.get("https://api.wazirx.com/api/v2/tickers");

    const stockArray = Object.values(res.data);

    stockArray.sort((a, b) => b.baseVolume - a.baseVolume);

    const get10stcok = stockArray.slice(0, 10);

    await Stock.deleteMany({});
    await Stock.insertMany(get10stcok);

    res.json({ message: 'Top 10 tickers saved to the database.' });

  } catch (error) {
    res.status(500).json("failed to fetch");
  }
});


// GET ALL STOCKS

router.get("/stocks", async (req, res) => {
  try {
    const top10Stocks = await Stock.find();
    res.json(top10Stocks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch data from the database." });
  }
});



// GET SINGLE STOCK

router.get("/stock/:id", async (req, res) => {
  try {
    const getSingStock = await Stock.findById(req.params.id);
    res.json(getSingStock);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch data from the database." });
  }
});

module.exports = router;
