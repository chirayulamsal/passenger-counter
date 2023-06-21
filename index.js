// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked(log it out)
// change the count in the HTML to reflect the new count


//camelCase

let h2Element = document.getElementById("count-el");

// console.log(h2Element)

let count = 0;

function increment() {
    count = count + 1;  //count += 1
    h2Element.innerText = count;
}

function reset() {
    count = 0;
    h2Element.innerText = count;
}

function decrement() {
    if (count > 0) {
        count = count - 1;
    }
    h2Element.innerText = count;
}

// if (count<0){
//     h2Element.innerText=0
//     count=0
// }
let saveEl = document.getElementById("save-el")

function save() {
    let countStr = count + " -  "
    // saveEl.innerText += countStr
    saveEl.textContent += countStr      //return the text of "hidden" elements.
    h2Element.textContent=0
    count=0
    // console.log(count)
}


// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

// console.log(totalPoints)



// welcomeEl.innerText = welcomeEl.innerText + "👋"
// welcomeEl.innerText += "👋"
