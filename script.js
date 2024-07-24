function jedan() {
    let yourName = document.getElementById("input").value 
    let newSentence1 = `Hi, my name is ${yourName}`
    document.getElementById("asd").innerHTML = newSentence1

}
function dva() {
    let yourName = document.getElementById("input").value 
    let newSentence2 = `Hi, greetings from ${yourName}`
    document.getElementById("asd").innerHTML = newSentence2
}
function tri() {
    let yourName = document.getElementById("input").value 
    let newSentence3 = `${yourName}, wishes you good luck!`
    document.getElementById("asd").innerHTML = newSentence3
}

function red() {
    document.getElementById("asd").style.color = "red"
}

function yellow() {
    document.getElementById("asd").style.color = "yellow"
}

function blue() {
    document.getElementById("asd").style.color = "blue"
}