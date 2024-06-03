function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background("black");
    fill("white");
    textSize(64);
    textAlign(CENTER, CENTER)
    
    let maximo = width;
    let minimo = 0;
    let palavra = "MatheusCoelli3A";
    let quantidade = map(mouseX, 0, width, 1, palavra.length);
    let parcial = palavra.substring(0,quantidade);
    text(parcial,300,200);
    
  //  if(mouseX < 50){
  //    let palavra = "M";
  //    text(palavra, 200, 200);
  //  } else {
  //    let palavra = "Mathios";
  //    text(palavra, 200, 200);
  //  }
  }
  