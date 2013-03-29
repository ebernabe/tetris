/*
Authors 
Ernesto Bernabe 
Kevin Bernabe
*/
var usuario = "";
var socket = io.connect('/');
var mt=new Array(24);//matrix tetris
var filas = 0;
var fichas = -1;
var velocidad = 1;
var shape;
var shapex;
var a1; 
var b1;
var a2;
var b2;
var a3;
var b3;
var a4;
var b4;


var nf1 = 0;
var nc1 = 0;
var nf2 = 0;
var nc2 = 0;
var nf3 = 0;
var nc3 = 0;
var nf4 = 0;
var nc4 = 0;

 
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
function startverification(){
								if ($("#jugador").val() != ''){
								  inifigura();
								  start=0;
								  $("#player").html($("#jugador").val());
								  $("#sectetris").toggle(); 
								  $("#user").toggle(); 
								  usuario=$("#jugador").val();
								}else{
									alert("Digite el usuario por favor");
								}
								if(!start){
								   start=1;
									//setTimeout("", tiempo);
									move(); 
									$("#start").toggle(); 
									$("#stop").toggle();
								}


}

function scores(){
    $("#filas").html("Filas:"+filas);
    $("#fichas").html("Figuras:"+fichas);
    $("#velocidad").html("Nivel:"+velocidad);

}
function scores_otros(fic,fil,vel,user){
    $("#filas_otros").html("Filas:"+fil);
    $("#fichas_otros").html("Figuras:"+fic);
    $("#velocidad_otros").html("Nivel:"+vel);
    $("#opo").html("Oponente: "+user);

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

	switch(shapex){
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
					emitmatrix();
					
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
					emitmatrix();	
                    

       			}
       break;
       case 4:
       		if(a1==(a3-1)){
       				pos=1;
       				 mt[a1-1][b1-1]=0;
			    mt[a2-1][b2-1]=0;
			    mt[a3-1][b3-1]=0;
			    mt[a4-1][b4-1]=0;
			          n1=a1+1;
				      m1=b1-1;
				      n2=a2+1;
				      m2=b2+1;
					  n3=a3;
				      m3=b3;
				      n4=a4-1;
				      m4=b4-1;
			if(mt[n1-1][m1-1]==0 && mt[n2-1][m2-1]==0 && mt[n3-1][m3-1]==0 && mt[n4-1][m4-1]==0){
			
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
					emitmatrix();	
                          

			}else if(a4==(a2-2)){
				pos=2;
       				 mt[a1-1][b1-1]=0;
			    mt[a2-1][b2-1]=0;
			    mt[a3-1][b3-1]=0;
			    mt[a4-1][b4-1]=0;
			          n1=a1+1;
				      m1=b1+1;
				      n2=a2-1;
				      m2=b2+1;
					  n3=a3;
				      m3=b3;
				      n4=a4+1;
				      m4=b4-1;
			if(mt[n1-1][m1-1]==0 && mt[n2-1][m2-1]==0 && mt[n3-1][m3-1]==0 && mt[n4-1][m4-1]==0){
			
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
					emitmatrix();
			}else if(a3==(a1-1)){
				pos=3;
       				 mt[a1-1][b1-1]=0;
			    mt[a2-1][b2-1]=0;
			    mt[a3-1][b3-1]=0;
			    mt[a4-1][b4-1]=0;
			          n1=a1-1;
				      m1=b1+1;
				      n2=a2-1;
				      m2=b2-1;
					  n3=a3;
				      m3=b3;
				      n4=a4+1;
				      m4=b4+1;
			if(mt[n1-1][m1-1]==0 && mt[n2-1][m2-1]==0 && mt[n3-1][m3-1]==0 && mt[n4-1][m4-1]==0){
			
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
					emitmatrix();





			}else if(a3==a1){
pos=0;
       				 mt[a1-1][b1-1]=0;
			    mt[a2-1][b2-1]=0;
			    mt[a3-1][b3-1]=0;
			    mt[a4-1][b4-1]=0;
			          n1=a1-1;
				      m1=b1-1;
				      n2=a2+1;
				      m2=b2-1;
					  n3=a3;
				      m3=b3;
				      n4=a4-1;
				      m4=b4+1;
			if(mt[n1-1][m1-1]==0 && mt[n2-1][m2-1]==0 && mt[n3-1][m3-1]==0 && mt[n4-1][m4-1]==0){
			
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
					emitmatrix();	





			}
       break;
       case 2:
       		if(a1==a2 && a1 == a3 && a3 == (a4-1)){
pos=1;
       				 mt[a1-1][b1-1]=0;
			    mt[a2-1][b2-1]=0;
			    mt[a3-1][b3-1]=0;
			    mt[a4-1][b4-1]=0;
			          n1=a1-1;
				      m1=b1+1;
				      n2=a2;
				      m2=b2;
					  n3=a3+1;
				      m3=b3-1;
				      n4=a4;
				      m4=b4-2;
			if(mt[n1-1][m1-1]==0 && mt[n2-1][m2-1]==0 && mt[n3-1][m3-1]==0 && mt[n4-1][m4-1]==0){
			
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
					emitmatrix();





			}else if(b1==b2 && b1 == b3 && a1==(a4-2)){
pos=2;
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
				      n4=a4-2;
				      m4=b4;
			if(mt[n1-1][m1-1]==0 && mt[n2-1][m2-1]==0 && mt[n3-1][m3-1]==0 && mt[n4-1][m4-1]==0){
			
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
					emitmatrix();	





			}else if(a1==a2 && a1 == a3 && a3 == (a4+1)){
pos=3;
       				 mt[a1-1][b1-1]=0;
			    mt[a2-1][b2-1]=0;
			    mt[a3-1][b3-1]=0;
			    mt[a4-1][b4-1]=0;
			          n1=a1+1;
				      m1=b1-1;
				      n2=a2;
				      m2=b2;
					  n3=a3-1;
				      m3=b3+1;
				      n4=a4;
				      m4=b4+2;
			if(mt[n1-1][m1-1]==0 && mt[n2-1][m2-1]==0 && mt[n3-1][m3-1]==0 && mt[n4-1][m4-1]==0){
			
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
					emitmatrix();	





			}else if(b1==b2 && b1 == b3 && a3==a4){
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
				      n4=a4+2;
				      m4=b4;
			if(mt[n1-1][m1-1]==0 && mt[n2-1][m2-1]==0 && mt[n3-1][m3-1]==0 && mt[n4-1][m4-1]==0){
			
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
					emitmatrix();




			}
       break;




	}
	//$("#player1").html(""+a1+n1+"/"+b1+m1+"/"+a2+n2+"/"+b2+m2+"/"+a3+n3+"/"+b3+m3+"/"+a4+n4+"/"+b4+m4);
	
}


function cleartable(){
	filax=0;
	columnax=0;
	filas=0;
	fichas=-1;
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


function imprimircuadros_otros(xt){
	for(i=0;i<=23;i++)
		{
		    for (j=0;j<=11;j++){
		    	fila = i+1;
		    	columna = j+1; 
		    	 if(xt[i][j]==1){ 	
		    	 		$(".tetris_otro tr:nth-of-type("+fila+") td:nth-of-type("+columna+")").addClass("mark");
		    	 }else{
		    	 		$(".tetris_otro tr:nth-of-type("+fila+") td:nth-of-type("+columna+")").removeClass("mark");
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


}

function verificafilasllenas(){
	var x = 0;
	var bandera=0;
	for(i=0;i<=23;i++)
	{
	    for (j=0;j<=11;j++){
	    	bandera = bandera + mt[i][j];
	    }
	    if(bandera==12){
	    	x=x+1;
	    	 
	    		acomodarfilas(i);

	    		var d = i+1;
	    			
	    		 $(".tetris tr:nth-of-type("+d+")").addClass("am");
	    		 qq=setTimeout(function(){$(".am").removeClass("am");},300);
	    			
						   				 
             							
						   		 
	    		filas=filas+1;
					 scores();
		    		$("#scoresanuncio").html(filas);
		    		$("#scoresanuncio").removeClass("as");
		    		$("#scoresanuncio").addClass("as");
	                
	                t=setTimeout(function(){$("#scoresanuncio").removeClass("as");},1000);

	                if(((filas%10)==0)){
	                	velocidad = velocidad +1;scores();
						   		y=setTimeout(function(){
						   				$("#scoresanuncio").html("Nivel "+velocidad);				   		
						  				$("#scoresanuncio").addClass("as");
             							t=setTimeout(function(){$("#scoresanuncio").removeClass("as"); },1000);
						   		},1500);
						} 

	                 
				 

	    }
	    bandera=0;
	}
	//imprimircuadros();
	t=setTimeout(function(){ imprimircuadros();},310);
	emitmatrix();
	return x;
}



function inifigura(){
	shapex = shape;
	shape = Math.floor((Math.random()*4)+1);
	var returx =0;
    returx = verificafilasllenas();
			 
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
			 scores();
			  
}


function writesquares(x1,y1,x2,y2,x3,y3,x4,y4){
	if(mt[x1-1][y1-1]==0 && mt[x2-1][y2-1]==0 && mt[x3-1][y3-1]==0 && mt[x4-1][y4-1]==0){				    
		/*$(".tetris tr:nth-of-type("+x1+") td:nth-of-type("+y1+")").addClass("mark");
		$(".tetris tr:nth-of-type("+x2+") td:nth-of-type("+y2+")").addClass("mark");
		$(".tetris tr:nth-of-type("+x3+") td:nth-of-type("+y3+")").addClass("mark");
		$(".tetris tr:nth-of-type("+x4+") td:nth-of-type("+y4+")").addClass("mark");*/
		

			if (nf1==0){
				  nf1 = x1;
				  nc1 = y1;
				  nf2 = x2;
				  nc2 = y2;
				  nf3 = x3;
				  nc3 = y3;
				  nf4 = x4;
				  nc4 = y4;
				  inifigura();
			}else{
					if(mt[nf1-1][nc1-1]==0 && mt[nf2-1][nc2-1]==0 && mt[nf3-1][nc3-1]==0 && mt[nf4-1][nc4-1]==0){	
						$(".tetrisnext tr:nth-of-type("+nf1+") td:nth-of-type("+nc1+")").removeClass("mark");
						$(".tetrisnext tr:nth-of-type("+nf2+") td:nth-of-type("+nc2+")").removeClass("mark");
						$(".tetrisnext tr:nth-of-type("+nf3+") td:nth-of-type("+nc3+")").removeClass("mark");
						$(".tetrisnext tr:nth-of-type("+nf4+") td:nth-of-type("+nc4+")").removeClass("mark");
						
						a1 = nf1;
						b1 = nc1;
						a2 = nf2;
						b2 = nc2;
						a3 = nf3;
						b3 = nc3;
						a4 = nf4;
						b4 = nc4;

						nf1 = x1;
				        nc1 = y1;
						nf2 = x2;
						nc2 = y2;
						nf3 = x3;
						nc3 = y3;
						nf4 = x4;
						nc4 = y4;

						$(".tetris tr:nth-of-type("+a1+") td:nth-of-type("+b1+")").addClass("mark");
						$(".tetris tr:nth-of-type("+a2+") td:nth-of-type("+b2+")").addClass("mark");
						$(".tetris tr:nth-of-type("+a3+") td:nth-of-type("+b3+")").addClass("mark");
						$(".tetris tr:nth-of-type("+a4+") td:nth-of-type("+b4+")").addClass("mark");

						$(".tetrisnext tr:nth-of-type("+nf1+") td:nth-of-type("+nc1+")").addClass("mark");
						$(".tetrisnext tr:nth-of-type("+nf2+") td:nth-of-type("+nc2+")").addClass("mark");
						$(".tetrisnext tr:nth-of-type("+nf3+") td:nth-of-type("+nc3+")").addClass("mark");
						$(".tetrisnext tr:nth-of-type("+nf4+") td:nth-of-type("+nc4+")").addClass("mark");

						mt[a1-1][b1-1]=1;
						mt[a2-1][b2-1]=1;
						mt[a3-1][b3-1]=1;
						mt[a4-1][b4-1]=1;
						emitmatrix();
				}
			}



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
		    //        verificafilasllenas();  					
				}
			
			mt[a1-1][b1-1]=1;
			mt[a2-1][b2-1]=1;
			mt[a3-1][b3-1]=1;
			mt[a4-1][b4-1]=1;
			emitmatrix();	
			//		if(a1==24 || a2==24 || a3==24 || a4==24){
			//		         verificafilasllenas();  
			//				}
		}else{

		          inifigura();
   		      //    verificafilasllenas();  

		}
		
		
   setTimeout(move, tiempo-(velocidad*10));

//$("#player1").html(""+a1+"/"+b1+"/"+a2+"/"+b2+"/"+a3+"/"+b3+"/"+a4+"/"+b4);
   }//if start end
//verificafilasllenas();  
   scores();

}


$(document).keydown(function(tecla){
 //alert(tecla.keyCode);
	if(start){//if start ini
             if (tecla.keyCode == 13) {//cambio de posicion
	             	if(usuario=="" && start==7){
	             		startverification();
	             	}
             }
			 if (tecla.keyCode == 87) {//cambio de posicion

			 		figurapos();

			 }

              if (tecla.keyCode == 68) {//derecha

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
					 emitmatrix();


                 }

            }else if(tecla.keyCode == 65) {//izquierda
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
					emitmatrix();	
                 }
            } else if(tecla.keyCode == 83){
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
					       // verificafilasllenas();  
						}
						mt[a1-1][b1-1]=1;
					    mt[a2-1][b2-1]=1;
				  	    mt[a3-1][b3-1]=1;
					    mt[a4-1][b4-1]=1;
					    emitmatrix();	
				}
			
            }  
            //		if(a1==24 || a2==24 || a3==24 || a4==24){
			//		         verificafilasllenas();  
			//				}
    }//if start end                
 });
function emitmatrix(){
	user=$("#player").html();
    socket.emit('tetrisr',mt,fichas,filas,velocidad,user);
}

$(document).ready(function(){
	$("#sectetris").toggle(); 
	$("#stop").toggle();
	$("#start").click(function(){
		if(start==7){
		  startverification();
		}
		if(!start){
		   start=1;
			//setTimeout("", tiempo);
			move(); 
			$("#start").toggle(); 
			$("#stop").toggle();
		}
	});

    $("#stop").click(function(){
    	start=0;
    	$("#start").toggle();
    	$("#stop").toggle();
    });

    $("#button").click(function(){
    	 
    });
       $("h1").fitText(1.1, { minFontSize: 50, maxFontSize: '95px' });
       $("#deg90").fitText(1.2);
       //$("#player").fitText(1.1, { minFontSize: 16, maxFontSize: '26px' });

    socket.on('connected', function () {
			console.log('Conectado!');
			socket.on('omt', function (data,fic,fil,vel,user) {
				imprimircuadros_otros(data);
				scores_otros(fic,fil,vel,user);
			   //alert(data);
			});
		});       
			
});