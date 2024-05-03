let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let pos = {x:0,y:0}
let isDrawing = false

let model 
let amIStupid

function updateBrushPos(x,y)
{
    pos.x = x
    pos.y = y
}

document.addEventListener("mousedown",function(e)
{
    isDrawing = true
    ctx.beginPath(); // begin

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#c0392b';
  
    ctx.moveTo(pos.x, pos.y);
    updateBrushPos(e.clientX,e.clientY);
    ctx.lineTo(pos.x, pos.y); 
          ctx.stroke();
 updateBrushPos(e.clientX,e.clientY)
})

document.addEventListener("mouseup",function(e){
    isDrawing = false
    imgData = ctx.getImageData(0, 0, 28, 28);
    amIStupid = tf.browser.fromPixels(imgData);
    console.log(amIStupid)
})

document.addEventListener("mouseenter",function(e)
{
    updateBrushPos(e.clientX,e.clientY)
})

document.addEventListener("mousemove",function(e)
{
  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#c0392b';

  ctx.moveTo(pos.x, pos.y);
  updateBrushPos(e.clientX,e.clientY);
  ctx.lineTo(pos.x, pos.y); 

  if(isDrawing)
    {
        ctx.stroke();
    }
})

window.onload = async function()
{
 model = await tf.loadLayersModel('../assets/model/model.json')
}
//model.predict()