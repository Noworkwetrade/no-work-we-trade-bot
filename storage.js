let candleData = []

function saveCandle(candle) {
  candleData.push(candle)

  console.log("candle saved:", candle)

  localStorage.setItem(
    "noWorkWeTradeCandles",
    JSON.stringify(candleData)
  )
}

function getCandles() {
  return JSON.parse(
    localStorage.getItem("noWorkWeTradeCandles")
  ) || []
}
