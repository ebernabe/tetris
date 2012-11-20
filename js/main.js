/*
Authors 
Ernesto Bernabe 
Kevin Bernabe
*/
var mt=new Array(24);//matrix tetris
var shape;
var a1;
var b1;
var a2;
var b2;
var a3;
var b3;
var a4;
var b4;
for(i=0;i<=23;i++)
{
    mt[i]=new Array(12);
    for (j=0;j<=11;j++){
    	mt[i][j]=0;
    }
}





function inifigura(){
	shape = Math.floor((Math.random()*4)+1);
			 
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
}


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

	mt[a1][b1]=1;
	mt[a2][b2]=1;
	mt[a3][b3]=1;
	mt[a4][b4]=1;
}

function removerclase(){
    $(".tetris tr:nth-of-type("+a1+") td:nth-of-type("+b1+")").removeClass("mark");
	$(".tetris tr:nth-of-type("+a2+") td:nth-of-type("+b2+")").removeClass("mark");
	$(".tetris tr:nth-of-type("+a3+") td:nth-of-type("+b3+")").removeClass("mark");
	$(".tetris tr:nth-of-type("+a4+") td:nth-of-type("+b4+")").removeClass("mark");
}
function addclase(){
    $(".tetris tr:nth-of-type("+a1+") td:nth-of-type("+b1+")").addClass("mark");
	$(".tetris tr:nth-of-type("+a2+") td:nth-of-type("+b2+")").addClass("mark");
	$(".tetris tr:nth-of-type("+a3+") td:nth-of-type("+b3+")").addClass("mark");
	$(".tetris tr:nth-of-type("+a4+") td:nth-of-type("+b4+")").addClass("mark");
}

function cuadro(){
	writesquares(1,6,1,7,2,6,2,7);	
}
function ele(){
	writesquares(1,6,1,7,1,8,2,8);
}

function linea(){
	writesquares(1,6,1,7,1,8,1,5);
}
function te(){
	writesquares(1,6,2,5,2,6,2,7);
}

function move(){

		if  (((a1+1)<=24) && ((a2+1)<=24) && ((a3+1)<=24) && ((a4+1)<=24)){
					removerclase();
					a1=a1+1; 
					a2=a2+1; 
					a3=a3+1; 
					a4=a4+1; 
					addclase();
		}else{
		            inifigura(); 
		}
   setTimeout(move, 1000);	
}


$(document).keydown(function(tecla){
              if (tecla.keyCode == 39) {

                if  (((b1+1)<=12) && ((b2+1)<=12) && ((b3+1)<=12) && ((b4+1)<=12)){
                	 removerclase();
                     b1=b1+1;
                     b2=b2+1;
                     b3=b3+1;
                     b4=b4+1;
					addclase();
                 }

            }else if(tecla.keyCode == 37) {
               if  (((b1-1)>0) && ((b2-1)>0) && ((b3-1)>0) && ((b4-1)>0)){
                	removerclase();
                     b1=b1-1;
                     b2=b2-1;
                     b3=b3-1;
                     b4=b4-1;
					addclase();
                 }
            } else if(tecla.keyCode == 40){
            	 if  (((a1+1)<=24) && ((a2+1)<=24) && ((a3+1)<=24) && ((a4+1)<=24)){
						removerclase();
						a1=a1+1; 
						a2=a2+1; 
						a3=a3+1; 
						a4=a4+1; 
						addclase();
				}
            } 
 });



$(document).ready(function(){
			inifigura();  
			setTimeout("", 1000);
			move();
});