//app to handle when people click the delete button function is called each time a new card is created
const makeDeleteButtonsWork = () => {

    //obtain ref to needed dom elements
    const deleteButtons =  document.querySelectorAll(".deleteButton")
    const cards = document.querySelectorAll("card")
    const output = document.querySelector("#output")



    //for each delete button add event listener
    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {

            //obtain a unique reference to the button that wqs clicked
            const buttonArrayId = event.target.getAttribute("id").split('-')
            const uniqueButtonID = buttonArrayId[2]

            //start iterating through cards to find the matching card component
            cards.forEach(card => {

                //obtain unique reference to card
                const cardArrayId = card.getAttribute("id").split('-')
                const uniqueCardID = cardArrayId[2]

                //if the unique id's in the number match, delete the card
                if (uniqueCardID === uniqueButtonID) {
                    console.log(card)
                    output.removeChild(card)
                }
            })
        })
    })
}