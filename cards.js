//app to create a card element for the dom
let currentCard = 1
const buildCard = (text) => {
    const card = document.createElement("card")
    card.textContent = text
    card.setAttribute("id", "card--"+currentCard)
    currentCard++
    const button = document.createElement("button")
    button.textContent = "delete"
    button.setAttribute("id", "button--"+currentCard)
    card.appendChild(button)
    return card
}