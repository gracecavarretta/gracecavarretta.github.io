const textElement = document.querySelector(".name");
const myName = " Grace Cavarretta ";
let i = 0;
let currSpan = null;

function typeName() {
    if (i < myName.length) {
        if (currSpan) currSpan.classList.remove("blink");

        //use span for blinker/cursor
        const span = document.createElement("span");
        span.textContent = myName[i];
        span.classList.add("blink");
        textElement.appendChild(span);

        currSpan = span;
        i++;
        setTimeout(typeName, 70);
    } else {
        setInterval(() => {
            if (currSpan) currSpan.classList.toggle("blink");
        }, 500);
    }
}

typeName();