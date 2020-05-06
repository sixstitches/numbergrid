function generateGrid(where) {
  where.textContent='';
  let count = 25;
  while (count > 0) {
    let num = Math.random() * 20;
    num = Math.ceil(num);
    addButton(where, num);
    count = count-1;
 }
}


function addButton(where, text) {
    let el = document.createElement("button");
    el.textContent=text;
    where.append(el);
    return el;  
}

let gg = addButton(document.body, "generate grid")


function ggClicked() {
    let mm = document.querySelector("main")
    generateGrid(mm);
}

gg.addEventListener('click', ggClicked);