const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../data/pricing.json');

const Pricing = {
  getAll: () => {
    const data = fs.readFileSync(DATA_PATH, 'utf8');
    return JSON.parse(data);
  },

  getMarketById: (marketId) => {
    const pricing = Pricing.getAll();
    return pricing.markets.find((market) => market.id === marketId.toLowerCase());
  }
};

module.exports = Pricing;
