count = 0;

function increment() {
    count += 1;
    counting.textContent = count;
    console.log(count)
}

let counting = document.getElementById("counter")
console.log(counting)

function save() {
    counting.textContent = count;
    console.log(count)
    let saveEl = document.getElementById("save-el")
    saveEl.textContent += " " + count + " -"
    console.log(saveEl)
    count = 0
}


