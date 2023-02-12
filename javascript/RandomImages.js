function changeBg(){
    const images=['url("../images1/random1.png")',
              'url("../images1/random2.png")',
             'url("../images1/random3.png")',
            'url("../images1/random4.png")']
     const continut=document.getElementById("prez");
     const bg=images[Math.floor(Math.random()*images.length)];
     continut.style.backgroundImage=bg;

}
setInterval(changeBg,1000);