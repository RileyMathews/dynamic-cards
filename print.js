//app to print cards to the dom
const printCard = (text) => {
    const output = document.querySelector("#output")
    output.appendChild(buildCard(text))
}