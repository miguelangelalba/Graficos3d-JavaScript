 var shapes = [];
 var canvas;
 var ctx;
const desp = 3;

function Meteoro(id,x,y,radious,color){
   this.id = id;
   this.x = x;
   this.y = y;
   this.radious = radious;
   this.color = color;
   that = this;
   this.draw = function(){
      //Pinta circunferencia 
      //ctx.beginPath();
      ctx.arc(that.x,that.y,that.radious, 0, 2 * Math.PI, false);
      ctx.fillStyle = that.color;
      ctx.fill();
   }

   this.move= function(){
      ctx.x=that.x +10;
      that.draw();
   }

}
function cuadrado(color, x, y, type) {

   this.type = type;
   this.speed = 0;
   this.angle = 0;
   this.moveAngle = 0;
   this.x = x;
   this.y = y;
   that=this;

   this.draw = function(){
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.fillStyle = color;
      ctx.fillRect(30/ -2, 30 / -2, 30, 30);
      ctx.restore();
   }
   this.move = function(){
      that.angle += that.moveAngle*Math.PI/180;
      that.x += that.speed*Math.sin(that.angle);
      that.y += that.speed*Math.cos(that.angle);
   }

    }
function Triangle(id,x,y,color,ang) {
	this.id = id;
	this.x = x;
	this.y = y;
	this.color = color;
   this.speed = 0;
   this.angle = 0;
   this.moveAngle = 0;
   this.ang = ang;
   that=this;
		console.log("estoy entrando en la función");
	this.draw =function(){
		console.log("Estoy pintando");
    // Triángulo rellenado
   ctx.save();
   ctx.translate(that.x,that.y);
   ctx.rotate(that.angle);
   console.log("aquiiiiiiiiiiiiii");
   console.log(that.angle);
   ctx.beginPath();
   ctx.moveTo(60,60);
   console.log(x);
   ctx.lineTo(35,60);
   ctx.lineTo(60,35);
   ctx.closePath();
   ctx.fillStyle = that.color;
   ctx.fill();
   ctx.restore();

	}
   this.angulo = function(orientacion){
      console.log("estoy dentro de la función angulo");
      ctx.save();
      if (orientacion == "derecha" ){
         //ctx.translate(400/2,400/2);
         that.ang = that.ang +(Math.PI)/180;
         ctx.rotate(that.ang);
         //ctx.translate(that.x,that.y)
         that.draw();
         ctx.restore();  
      }else{
         //ctx.translate(400/2,400/2);
         that.ang = that.ang -(Math.PI)/180;
         ctx.rotate(that.ang);
         //ctx.translate(that.x,that.y)
         that.draw();
         ctx.restore();
      }
   }
   //this.move = function(orientacion){
   this.move = function(){
      that.angle += that.moveAngle*Math.PI/180;
      that.x += that.speed*Math.sin(that.angle);
      that.y -= that.speed*Math.cos(that.angle);

	}
}


function keyHandler(event){
  console.log("EStyo dentro de KeyHAndler");
  ctx.clearRect(0, 0,canvas.width,canvas.height);
  t1.moveAngle=0;
  t1.speed=0;
  //t1.moveAngle=0;
  //t1.speed=0;
  //ctx.clear()

	switch(event.key) {
		case "ArrowLeft":
			console.log("izquierda");
			//t1.move("izquierda");
         //t1.move();
         //t1.moveAngle=1;
         //t1.move();
         //t1.draw()
         t1.moveAngle=1;
         t1.move();
         t1.draw();
         
         //t1.angulo("izquierda")
			//t1.draw();
		break;
		case "ArrowRight":
         console.log("derecha");
         //ctx.save();
         //t1.moveAngle=-1
         //t1.move();
         //t1.draw();
         t1.moveAngle=-1;
         t1.move();
         t1.draw();
			//t1.angulo("derecha");
      break;
      case "ArrowUp":
      console.log("arriba");
         //t1.move("up");
         //t1.speed=-1;
         //t1.move();
         //t1.draw();
         t1.speed=-1;
         t1.move();
         t1.draw();        
      break;
      case "ArrowDown":
         //t1.move("down");
         //t1.speed=1;
         //t1.move();
         //t1.draw();

         t1.speed=1;
         //setInterval(c1.move,50);
         t1.move();
         t1.draw();
      break;
	default:
	console.log("Key not handled");
	}
}

function main(){
	canvas = document.getElementById('canvas');
	if (!canvas) {
		console.log('Failed to retrieve the <canvas> element');
		return false;
  }
  	ctx = canvas.getContext('2d');
   //c1= new cuadrado("blue",20,20);
   //c1.draw();
  	t1= new Triangle("t1", 60, 60,"#FFF000",0);
   t1.draw();
   //m1= new Meteoro("m1",canvas.width,200,20,"red");
   //m1.draw();
   //setInterval(m1.move,100);
   document.addEventListener('keydown', keyHandler, false);
}

//1 mover nave espacial
//2 torpedos
//3 Asteroides
