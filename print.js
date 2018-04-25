//app to print cards to the dom
const printCard = () => {
    const output = document.querySelector("#output")
    const text = document.querySelector("#text-input").value
    output.appendChild(buildCard(text))
}
