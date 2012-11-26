/*
Authors 
Ernesto Bernabe 
Kevin Bernabe
*/
var mt=new Array(24);//matrix tetris
var filas = 0;
var fichas = 0;
var velocidad = 1;
var shape;
var a1; 
var b1;
var a2;
var b2;
var a3;
var b3;
var a4;
var b4;
var tiempo = 2000;
var start = 7;
var pos = 0;

for(i=0;i<=23;i++)
{
    mt[i]=new Array(12);
    for (j=0;j<=11;j++){
    	mt[i][j]=0;
    }
}

function scores(){
    $("#filas").html("Filas:"+filas);
    $("#fichas").html("Figuras:"+fichas);
    $("#velocidad").html("Velocidad:"+velocidad);

}

function figurapos(){
	var n1 = 0;
	var n2 = 0;
	var n3 = 0;
	var n4 = 0;
	var m1 = 0;
	var m2 = 0;
	var m3 = 0;
	var m4 = 0;

	switch(shape){
       case 3:
			   if(a1==a2){

			   	if((a3-1)>0){
			   	pos=1;
			    mt[a1-1][b1-1]=0;
			    mt[a2-1][b2-1]=0;
			    mt[a3-1][b3-1]=0;
			    mt[a4-1][b4-1]=0;

			    n1=a1+1;
			      m1=b1+1;
			      n2=a2;
			      m2=b2;
			      n3=a3-1;
			      m3=b3-1;
			      n4=a4+2;
			      m4=b4+2;
			      if(mt[n1-1][m1-1]==0 && mt[n2-1][m2-1]==0 && mt[n3-1][m3-1]==0 && mt[n4-1][m4-1]==0){

					    $(".tetris tr:nth-of-type("+a1+") td:nth-of-type("+b1+")").removeClass("mark");
						$(".tetris tr:nth-of-type("+a2+") td:nth-of-type("+b2+")").removeClass("mark");
						$(".tetris tr:nth-of-type("+a3+") td:nth-of-type("+b3+")").removeClass("mark");
						$(".tetris tr:nth-of-type("+a4+") td:nth-of-type("+b4+")").removeClass("mark");
					      
		                //alert(pos);
					    $(".tetris tr:nth-of-type("+n1+") td:nth-of-type("+m1+")").addClass("mark");
						$(".tetris tr:nth-of-type("+n2+") td:nth-of-type("+m2+")").addClass("mark");
						$(".tetris tr:nth-of-type("+n3+") td:nth-of-type("+m3+")").addClass("mark");
						$(".tetris tr:nth-of-type("+n4+") td:nth-of-type("+m4+")").addClass("mark");
							 a1=n1;
							 b1=m1;
							 a2=n2;
							 b2=m2;
							 b3=m3;
							 a3=n3;
							 b4=m4;
							 a4=n4;
					} 
			        mt[a1-1][b1-1]=1;
					mt[a2-1][b2-1]=1;
					mt[a3-1][b3-1]=1;
					mt[a4-1][b4-1]=1;
					
					}
      			 }else{
				 pos=0;
				 
				    mt[a1-1][b1-1]=0;
				    mt[a2-1][b2-1]=0;
				    mt[a3-1][b3-1]=0;
				    mt[a4-1][b4-1]=0;

				      n1=a1-1;
				      m1=b1-1;
				      n2=a2;
				      m2=b2;
					  n3=a3+1;
				      m3=b3+1;
				      n4=a4-2;
				      m4=b4-2;

				if(mt[n1-1][m1-1]==0 && mt[n2-1][m2-1]==0 && mt[n3-1][m3-1]==0 && mt[n4-1][m4-1]==0){				    
                //alert(pos);
				    $(".tetris tr:nth-of-type("+a1+") td:nth-of-type("+b1+")").removeClass("mark");
					$(".tetris tr:nth-of-type("+a2+") td:nth-of-type("+b2+")").removeClass("mark");
					$(".tetris tr:nth-of-type("+a3+") td:nth-of-type("+b3+")").removeClass("mark");
					$(".tetris tr:nth-of-type("+a4+") td:nth-of-type("+b4+")").removeClass("mark");
				     
				    $(".tetris tr:nth-of-type("+n1+") td:nth-of-type("+m1+")").addClass("mark");
					$(".tetris tr:nth-of-type("+n2+") td:nth-of-type("+m2+")").addClass("mark");
					$(".tetris tr:nth-of-type("+n3+") td:nth-of-type("+m3+")").addClass("mark");
					$(".tetris tr:nth-of-type("+n4+") td:nth-of-type("+m4+")").addClass("mark");
					 a1=n1;
					 b1=m1;
					 a2=n2;
					 b2=m2;
					 b3=m3;
					 a3=n3;
					 b4=m4;
					 a4=n4;
					 }
				    mt[a1-1][b1-1]=1;
					mt[a2-1][b2-1]=1;
					mt[a3-1][b3-1]=1;
					mt[a4-1][b4-1]=1;	
                    

       			}
       break;
       case 4:
       		if(a1==(a2-1){


			}
       break;




	}
	//$("#player1").html(""+a1+n1+"/"+b1+m1+"/"+a2+n2+"/"+b2+m2+"/"+a3+n3+"/"+b3+m3+"/"+a4+n4+"/"+b4+m4);
	
}


function cleartable(){
	filax=0;
	columnax=0;
	filas=0;
	fichas=0;
	velocidad=0;
	for(i=0;i<=23;i++)
		{
		    for (j=0;j<=11;j++){
		    	filax = i+1;
		    	columnax = j+1; 
		   	 mt[i][j]=0;
		        $(".tetris tr:nth-of-type("+filax+") td:nth-of-type("+columnax+")").removeClass("mark");
		 
		    }
		}
		scores();
}



function imprimircuadros(){
	for(i=0;i<=23;i++)
		{
		    for (j=0;j<=11;j++){
		    	fila = i+1;
		    	columna = j+1; 
		    	 if(mt[i][j]==1){ 	
		    	 		$(".tetris tr:nth-of-type("+fila+") td:nth-of-type("+columna+")").addClass("mark");
		    	 }else{
		    	 		$(".tetris tr:nth-of-type("+fila+") td:nth-of-type("+columna+")").removeClass("mark");
		    	 }
		    }
		}

}

function acomodarfilas(i){
var n;
aux = mt;
	for (n=0;n<=11;n++){
	    	mt[i][n]=0;
	    }

	for (x=i;x>=0;x--){
			for (j=0;j<=11;j++){
				if((x-1)>=0){
		    		mt[x][j]=aux[x-1][j];
		    	}
		    
		    }
	    }

imprimircuadros();
}

function verificafilasllenas(){
	var bandera=0;
	for(i=0;i<=23;i++)
	{
	    for (j=0;j<=11;j++){
	    	bandera = bandera + mt[i][j];
	    }
	    if(bandera==12){
	    		acomodarfilas(i);
	    		filas=filas+1;
	    }
	    bandera=0;
	}
}



function inifigura(){
	shape = Math.floor((Math.random()*4)+1);
    verificafilasllenas();
			 
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
			 fichas=fichas+1;
			  if((fichas%30)==0){
			    	velocidad = velocidad +1;
			    }
}


function writesquares(x1,y1,x2,y2,x3,y3,x4,y4){
	if(mt[x1-1][y1-1]==0 && mt[x2-1][y2-1]==0 && mt[x3-1][y3-1]==0 && mt[x4-1][y4-1]==0){				    
		$(".tetris tr:nth-of-type("+x1+") td:nth-of-type("+y1+")").addClass("mark");
		$(".tetris tr:nth-of-type("+x2+") td:nth-of-type("+y2+")").addClass("mark");
		$(".tetris tr:nth-of-type("+x3+") td:nth-of-type("+y3+")").addClass("mark");
		$(".tetris tr:nth-of-type("+x4+") td:nth-of-type("+y4+")").addClass("mark");
		a1 = x1;
		b1 = y1;
		a2 = x2;
		b2 = y2;
		a3 = x3;
		b3 = y3;
		a4 = x4;
		b4 = y4;

		mt[a1-1][b1-1]=1;
		mt[a2-1][b2-1]=1;
		mt[a3-1][b3-1]=1;
		mt[a4-1][b4-1]=1;
	}else{
		start=0;
		alert("Game Over");
		cleartable();
	}
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
	if(start){//if start ini
		if  (((a1+1)<=24) && ((a2+1)<=24) && ((a3+1)<=24) && ((a4+1)<=24)){
			mt[a1-1][b1-1]=0;
			mt[a2-1][b2-1]=0;
			mt[a3-1][b3-1]=0;
			mt[a4-1][b4-1]=0;

				if((mt[a1][b1-1]==0) && (mt[a2][b2-1]==0) && (mt[a3][b3-1]==0) && (mt[a4][b4-1]==0)){	
					removerclase();
					a1=a1+1; 
					a2=a2+1; 
					a3=a3+1; 
					a4=a4+1; 
					addclase();
				}else{
					 mt[a1-1][b1-1]=1;
					 mt[a2-1][b2-1]=1;
				  	 mt[a3-1][b3-1]=1;
					 mt[a4-1][b4-1]=1;	
					inifigura();
				}
			
			mt[a1-1][b1-1]=1;
			mt[a2-1][b2-1]=1;
			mt[a3-1][b3-1]=1;
			mt[a4-1][b4-1]=1;	

		}else{
		          verificafilasllenas();  
		          inifigura();

		}
		
   setTimeout(move, tiempo-(velocidad*10));
//$("#player1").html(""+a1+"/"+b1+"/"+a2+"/"+b2+"/"+a3+"/"+b3+"/"+a4+"/"+b4);
   }//if start end
   scores();
}


$(document).keydown(function(tecla){

	if(start){//if start ini

			 if (tecla.keyCode == 38) {

			 		figurapos();

			 }

              if (tecla.keyCode == 39) {

                if  (((b1+1)<=12) && ((b2+1)<=12) && ((b3+1)<=12) && ((b4+1)<=12)){
                	 mt[a1-1][b1-1]=0;
					 mt[a2-1][b2-1]=0;
					 mt[a3-1][b3-1]=0;
					 mt[a4-1][b4-1]=0;
					 if((mt[a1-1][b1]==0) && (mt[a2-1][b2]==0) && (mt[a3-1][b3]==0) && (mt[a4-1][b4]==0)){	
		                	 removerclase();
		                     b1=b1+1;
		                     b2=b2+1;
		                     b3=b3+1;
		                     b4=b4+1;
							 addclase();
					 }
					 mt[a1-1][b1-1]=1;
					 mt[a2-1][b2-1]=1;
				  	 mt[a3-1][b3-1]=1;
					 mt[a4-1][b4-1]=1;	

                 }

            }else if(tecla.keyCode == 37) {
               if  (((b1-1)>0) && ((b2-1)>0) && ((b3-1)>0) && ((b4-1)>0)){
               		mt[a1-1][b1-1]=0;
					mt[a2-1][b2-1]=0;
					mt[a3-1][b3-1]=0;
					mt[a4-1][b4-1]=0;
					if((mt[a1-1][b1-2]==0) && (mt[a2-1][b2-2]==0) && (mt[a3-1][b3-2]==0) && (mt[a4-1][b4-2]==0)){	
	                	removerclase();
	                     b1=b1-1;
	                     b2=b2-1;
	                     b3=b3-1;
	                     b4=b4-1;
						addclase();
					}
					mt[a1-1][b1-1]=1;
					mt[a2-1][b2-1]=1;
				  	mt[a3-1][b3-1]=1;
					mt[a4-1][b4-1]=1;	
                 }
            } else if(tecla.keyCode == 40){
            	 if  (((a1+1)<=24) && ((a2+1)<=24) && ((a3+1)<=24) && ((a4+1)<=24)){
            	 	 	mt[a1-1][b1-1]=0;
					 	mt[a2-1][b2-1]=0;
					 	mt[a3-1][b3-1]=0;
					 	mt[a4-1][b4-1]=0;
                       if((mt[a1][b1-1]==0) && (mt[a2][b2-1]==0) && (mt[a3][b3-1]==0) && (mt[a4][b4-1]==0)){	
							removerclase();
							a1=a1+1; 
							a2=a2+1; 
							a3=a3+1; 
							a4=a4+1; 
							addclase();
						}else{
							mt[a1-1][b1-1]=1;
					        mt[a2-1][b2-1]=1;
				  	        mt[a3-1][b3-1]=1;
					        mt[a4-1][b4-1]=1;	
					        verificafilasllenas();  
							inifigura();
						}
						mt[a1-1][b1-1]=1;
					    mt[a2-1][b2-1]=1;
				  	    mt[a3-1][b3-1]=1;
					    mt[a4-1][b4-1]=1;	
				}
            }  
    }//if start end                
 });


$(document).ready(function(){
	$("#start").click(function(){
		if(start==7){
		  inifigura();
		  start=0;
		}
		if(!start){
		   start=1;
			//setTimeout("", tiempo);
			move();  
		}
	});

    $("#stop").click(function(){
    	start=0;
    });

			
});