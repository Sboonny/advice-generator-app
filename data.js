const slipAdvice = document.querySelector("p")
const slipId = document.querySelector("h1")

async function getAdvice() {
  const ADVICE_API =  "https://api.adviceslip.com/advice"
  const adviceData = await fetch(ADVICE_API)
  const slipContainer = await adviceData.json()
  slipId.textContent= `Advice ${slipContainer.slip.id}`
  slipAdvice.textContent= `${slipContainer.slip.advice}`
}
getAdvice()