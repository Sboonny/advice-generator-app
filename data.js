
async function getAdvice(ADVICE_API) {
  const adviceData = await fetch(ADVICE_API)
  let advice = await adviceData.text()
  console.log(advice)
}
getAdvice( "https://api.adviceslip.com/advice")