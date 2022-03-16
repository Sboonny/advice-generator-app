const slipAdvice = document.querySelector("p")
const slipId = document.querySelector("h1")

async function getAdvice(ADVICE_API) {
  const adviceData = await fetch(ADVICE_API)
  const slipContainer = await adviceData.json()
  slipId.textContent= `Advice ${slipContainer.slip.id}`
  slipAdvice.textContent= `${slipContainer.slip.advice}`
}
getAdvice( "https://api.adviceslip.com/advice")