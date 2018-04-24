//app to create a card element for the dom
const buildCard = (text) => {
    const card = document.createElement("card")
    card.textContent = text
    return card
}