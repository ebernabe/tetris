var a1;
var b1;
var a2;
var b2;
var a3;
var b3;
var a4;
var b4;

function writesquares(x1,y1,x2,y2,x3,y3,x4,y4){
	$(".tetris tr:nth-of-type("+x1+") td:nth-of-type("+y1+")").addClass("mark");
	$(".tetris tr:nth-of-type("+x2+") td:nth-of-type("+y2+")").addClass("mark");
	$(".tetris tr:nth-of-type("+x3+") td:nth-of-type("+y3+")").addClass("mark");
	$(".tetris tr:nth-of-type("+x4+") td:nth-of-type("+y4+")").addClass("mark");
	a1=x1;
	b1=y1;
	a2 =x2;
	b2 =y2;
	a3 =x3;
	b3 =y3;
	a4 =x4;
	b4 =y4;
}


function cuadro(){
	writesquares(1,6,1,7,2,6,2,7);
	/*$(".tetris tr:nth-of-type(1) td:nth-of-type(6)").addClass("mark");
	$(".tetris tr:nth-of-type(1) td:nth-of-type(7)").addClass("mark");
	$(".tetris tr:nth-of-type(2) td:nth-of-type(6)").addClass("mark");
	$(".tetris tr:nth-of-type(2) td:nth-of-type(7)").addClass("mark");*/		
}
function ele(){
	writesquares(1,6,1,7,1,8,2,8);
	/*$(".tetris tr:nth-of-type(1) td:nth-of-type(6)").addClass("mark");
	$(".tetris tr:nth-of-type(1) td:nth-of-type(7)").addClass("mark");
	$(".tetris tr:nth-of-type(1) td:nth-of-type(8)").addClass("mark");
	$(".tetris tr:nth-of-type(2) td:nth-of-type(8)").addClass("mark");	*/
}

function linea(){
	writesquares(1,6,1,7,1,8,1,5);
	/*$(".tetris tr:nth-of-type(1) td:nth-of-type(6)").addClass("mark");
	$(".tetris tr:nth-of-type(1) td:nth-of-type(7)").addClass("mark");
	$(".tetris tr:nth-of-type(1) td:nth-of-type(8)").addClass("mark");
	$(".tetris tr:nth-of-type(1) td:nth-of-type(5)").addClass("mark");	*/
}
function te(){
	writesquares(1,6,2,5,2,6,2,7);
	/*$(".tetris tr:nth-of-type(1) td:nth-of-type(6)").addClass("mark");
	$(".tetris tr:nth-of-type(2) td:nth-of-type(5)").addClass("mark");
	$(".tetris tr:nth-of-type(2) td:nth-of-type(6)").addClass("mark");
	$(".tetris tr:nth-of-type(2) td:nth-of-type(7)").addClass("mark");*/	
}

function move(){


	$(".tetris tr:nth-of-type("+a1+") td:nth-of-type("+b1+")").removeClass("mark");
	$(".tetris tr:nth-of-type("+a2+") td:nth-of-type("+b2+")").removeClass("mark");
	$(".tetris tr:nth-of-type("+a3+") td:nth-of-type("+b3+")").removeClass("mark");
	$(".tetris tr:nth-of-type("+a4+") td:nth-of-type("+b4+")").removeClass("mark");
a1=a1+1;
b1=b1;
a2=a2+1;
b2=b2;
a3=a3+1;
b3=b3;
a4=a4+1;
b4=b4;
	$(".tetris tr:nth-of-type("+a1+") td:nth-of-type("+b1+")").addClass("mark");
	$(".tetris tr:nth-of-type("+a2+") td:nth-of-type("+b2+")").addClass("mark");
	$(".tetris tr:nth-of-type("+a3+") td:nth-of-type("+b3+")").addClass("mark");
	$(".tetris tr:nth-of-type("+a4+") td:nth-of-type("+b4+")").addClass("mark");
setTimeout(move, 1000);
	
}


$(document).keydown(function(tecla){
              if (tecla.keyCode == 39) {

                if  (((b1+1)<=12) && ((b2+1)<=12) && ((b3+1)<=12) && ((b4+1)<=12)){
                     b1=b1+1;
                     b2=b2+1;
                     b3=b3+1;
                     b4=b4+1;
                 }

            }else if(tecla.keyCode == 83) {
                $('.s').css({ 'background-color' : 'blue' });
            }else if(tecla.keyCode == 68){
                $('.d').css({ 'background-color' : 'green' });
            } 
 });



$(document).ready(function(){



var shape = Math.floor((Math.random()*4)+1);
 
 switch(shape){
 	case 1:
 		cuadro();
 	break;
 	case 2:
 		ele();
 	break;
 	case 3:
 		linea();
 	break;
 	case 4:
 		te();
 	break;
 }
  
setTimeout("", 300);
move();

});