window
  .fetch("https://data.messari.io/api/v1/assets/btc/metrics/market-data")
  .then(res => res.json())
  .then(messariRes => messariRes.data)
  .then(
    payload =>
      (document.querySelector(".bitcoin").innerHTML =
        '$' + payload.market_data.price_usd.toLocaleString())
);
  
window
  .fetch("https://data.messari.io/api/v1/assets/eth/metrics/market-data")
  .then(res => res.json())
  .then(messariRes => messariRes.data)
  .then(
    payload =>
      (document.querySelector(".eth").innerHTML =
        '$' + payload.market_data.price_usd.toLocaleString())
);
  
window
  .fetch("https://data.messari.io/api/v1/assets/sol/metrics/market-data")
  .then(res => res.json())
  .then(messariRes => messariRes.data)
  .then(
    payload =>
      (document.querySelector(".sol").innerHTML =
        '$' + payload.market_data.price_usd.toLocaleString())
);
  
window
  .fetch("https://data.messari.io/api/v1/assets/bnb/metrics/market-data")
  .then(res => res.json())
  .then(messariRes => messariRes.data)
  .then(
    payload =>
      (document.querySelector(".bnb").innerHTML =
        '$' + payload.market_data.price_usd.toLocaleString())
);
  
window
  .fetch("https://data.messari.io/api/v1/assets/trx/metrics/market-data")
  .then(res => res.json())
  .then(messariRes => messariRes.data)
  .then(
    payload =>
      (document.querySelector(".trx").innerHTML =
        '$' + payload.market_data.price_usd.toLocaleString())
);
  
window
  .fetch("https://data.messari.io/api/v1/assets/ada/metrics/market-data")
  .then(res => res.json())
  .then(messariRes => messariRes.data)
  .then(
    payload =>
      (document.querySelector(".ada").innerHTML =
        '$' + payload.market_data.price_usd.toLocaleString())
  );