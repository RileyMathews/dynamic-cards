//app to create a card element for the dom
let currentCard = 1
const buildCard = (text) => {
    const card = document.createElement("card")
    card.textContent = text
    card.setAttribute("id", "card--"+currentCard)
    const button = document.createElement("button")
    button.textContent = "delete"
    button.setAttribute("id", "button--"+currentCard)
    currentCard++
    button.setAttribute("class", "deleteButton")
    button.addEventListener("click", () => {

        //obtain a unique reference to the button that wqs clicked
        const buttonArrayId = event.target.getAttribute("id").split('-')
        const uniqueButtonID = buttonArrayId[2]

        //start iterating through cards to find the matching card component
        const cards = document.querySelectorAll("card")
        cards.forEach(card => {

            //obtain unique reference to card
            const cardArrayId = card.getAttribute("id").split('-')
            const uniqueCardID = cardArrayId[2]

            //if the unique id's in the number match, delete the card
            if (uniqueCardID === uniqueButtonID) {
                output.removeChild(card)
            }
        })
    })
    card.appendChild(button)
    return card
}