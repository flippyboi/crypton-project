window
  .fetch("https://data.messari.io/api/v1/assets/btc/metrics")
  .then(res => res.json())
  .then(messariRes => messariRes.data)
  .then(
    payload =>
      (document.querySelector(".btc-mcap").innerHTML =
        'MCap: $' + Math.trunc((payload.marketcap.current_marketcap_usd / 1000000000)).toLocaleString() + 'B')
);
  
window
  .fetch("https://data.messari.io/api/v1/assets/eth/metrics")
  .then(res => res.json())
  .then(messariRes => messariRes.data)
  .then(
    payload =>
      (document.querySelector(".eth-mcap").innerHTML =
      'MCap: $' + Math.trunc((payload.marketcap.current_marketcap_usd / 1000000000)).toLocaleString() + 'B')
);
  
window
  .fetch("https://data.messari.io/api/v1/assets/sol/metrics")
  .then(res => res.json())
  .then(messariRes => messariRes.data)
  .then(
    payload =>
      (document.querySelector(".sol-mcap").innerHTML =
      'MCap: $' + Math.trunc((payload.marketcap.current_marketcap_usd / 1000000000)).toLocaleString() + 'B')
);
  
window
  .fetch("https://data.messari.io/api/v1/assets/bnb/metrics")
  .then(res => res.json())
  .then(messariRes => messariRes.data)
  .then(
    payload =>
      (document.querySelector(".bnb-mcap").innerHTML =
      'MCap: $' + Math.trunc((payload.marketcap.current_marketcap_usd / 1000000000)).toLocaleString() + 'B')
);
  
window
  .fetch("https://data.messari.io/api/v1/assets/trx/metrics")
  .then(res => res.json())
  .then(messariRes => messariRes.data)
  .then(
    payload =>
      (document.querySelector(".trx-mcap").innerHTML =
      'MCap: $' + Math.trunc((payload.marketcap.current_marketcap_usd / 1000000000)).toLocaleString() + 'B')
);
  
window
  .fetch("https://data.messari.io/api/v1/assets/ada/metrics")
  .then(res => res.json())
  .then(messariRes => messariRes.data)
  .then(
    payload =>
      (document.querySelector(".ada-mcap").innerHTML =
      'MCap: $' + Math.trunc((payload.marketcap.current_marketcap_usd / 1000000000)).toLocaleString() + 'B')
  );