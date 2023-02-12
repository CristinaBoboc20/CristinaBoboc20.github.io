var woman=document.querySelector(".woman");
let move=40;
window.addEventListener("load",()=>{
     woman.style.position="absolute";
     woman.style.left=0;
     woman.style.top=0;

});
window.addEventListener("keyup",(e)=>{
  switch(e.key){
    case "ArrowLeft":
      woman.style.left=parseInt(woman.style.left) - move+"px";
      break;
    case "ArrowRight":
      woman.style.left=parseInt(woman.style.left) + move+"px";
      break;
    case "ArrowUp":
      woman.style.top=parseInt(woman.style.left) - move +"px";
      break;
    case "ArrowDown":
      woman.style.top=parseInt(woman.style.top) + move +"px";
      break;
    }
});
