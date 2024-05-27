function makeNumberLine() {
  let lineNumber = 200;
  textSize(22)
  push()
  translate(width/2, height/4)
  for (let i = -lineNumber / 2; i < lineNumber / 2; i++) {
    stroke(0, 100, 0);
    strokeWeight(1);
    line(.8*spacing * i , height / 32 +50, .8*spacing * i, height / 32+ 100);
    if (i%5 === 0){
      line(.8*spacing * i , height / 32 + 24, .8*spacing * i, height / 32+ 150);
      noStroke();
    fill(0,100, 0);
    text(`${(i *10).toFixed(0)} cm`, .8* spacing  * i + 40, height / 32 + 10);
    }
   
  }
  pop() 

}
