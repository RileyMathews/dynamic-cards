//app to create a card element for the dom
const buildCard = (text) => {
    const card = document.createElement("card")
    card.textContent = text
    const button = document.createElement("button")
    button.textContent = "delete"
    card.appendChild(button)
    return card
}