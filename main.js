canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="red";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mouse);
function mouse(e)
{
    colour=document.getElementById("colour").value;
    mouse_x = e.clientX;
     mouse_y = e.clientY;
     circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y)
 { 
     ctx.beginPath();
     ctx.strokeStyle = colour; 
    ctx.lineWidth = 2;
     ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
      ctx.stroke(); 
 }
       function clear() 
       { 
           ctx.clearRect(0, 0, canvas.width, canvas.height); 
       }