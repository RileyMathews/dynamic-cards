//app to handle when user clicks the submit button
const createButton = document.querySelector("#create")
createButton.addEventListener("click", () => {
    const textContent = document.querySelector("#text-input").value
    printCard(textContent)
})