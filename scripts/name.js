function typeText(selector, text, speed = 70) {
  const el = document.querySelector(selector);
  let i = 0;
  let currSpan = null;

  function type() {
    if (i < text.length) {
      if (currSpan) currSpan.classList.remove("blink");

      //for blinker/cursor
      const span = document.createElement("span");
      span.textContent = text[i];
      span.classList.add("blink");
      el.appendChild(span);

      currSpan = span;
      i++;
      setTimeout(type, speed);
    } else {
      setInterval(() => {
        if (currSpan) currSpan.classList.toggle("blink");
      }, 500);
    }
  }

  type();
}

typeText(".name", " Grace Cavarretta ");
setTimeout(() => {
  typeText(".name-about", "About");
    setTimeout(() => {  
        typeText(".name-projects", "Projects");
    }, 500);
}, 2000); 
