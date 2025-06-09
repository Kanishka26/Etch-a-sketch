defaultSize=16;
body=document.querySelector("body");
container=document.createElement("div");
btn=document.createElement("button");
body.appendChild(container);
body.appendChild(btn);
container.classList.add("container");
btn.classList.add("btn");
btn.textContent="Change grid size";
creategrid(defaultSize);
btn.addEventListener("click", function() {
  let ns=prompt("enter new grid size (max 650p):");
  if (ns > 100) {
    alert("Size too large, setting to default size of 16");
    ns = defaultSize;
  } else if (ns < 1) {
    alert("Size too small, setting to default size of 16");
    ns = defaultSize;
  }
  else{
    cleargrid();
    creategrid(ns);
  }});
function creategrid(size) {
  gridpercent=100/size;
  for(let i=0;i<size*size;i++){
    let div=document.createElement("div");
    container.appendChild(div);
    div.classList.add("box");
    div.style.width=gridpercent+"%";
    div.style.height=gridpercent+"%";
    div.addEventListener("mouseover", function() {
      div.style.backgroundColor="black";
    });
    
  }
  }

function cleargrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}