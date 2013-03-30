
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var bandera_usuario="";
var app = express();
var users_count = new Array(2);

var mtio=new Array(24);//matrix tetris
for(i=0;i<=23;i++)
{
    mtio[i]=new Array(12);
    for (j=0;j<=11;j++){
      mtio[i][j]=0;
    }
}

function adduser(user){
  var bandera = 0;
  var msg = "no mas usuarios";
   if((users_count[0]=="" || users_count[0]==user) && bandera==0 ){users_count[0]=user; bandera =1;}
   if((users_count[1]=="" || users_count[1]==user) && bandera==0 ){users_count[1]=user; bandera =1;}
 if(bandera){
    console.log(user);
 }else{
     console.log(msg);
    /* qq=setTimeout(function(){
        if(bandera_usuario!=""){
                if(users_count[0]!=bandera_usuario){users_count[0]=""; bandera_usuario="";}
                if(users_count[1]!=bandera_usuario){users_count[1]=""; bandera_usuario="";}
        }else{
            bandera_usuario=user;
        }
     },1000);*/
 }
 
}

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/tetris', routes.tetris);
app.get('/users', user.list);

server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

 
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
  socket.emit('connected'); 
  socket.on('tetrisr', function(data,fic,fil,vel,user){
      console.log(data);
      adduser(user);
      //socket.emit('omt'); 
      //envia los datos del tetris a los demas X jugadores sera para 2 o mas en el futuro
      socket.broadcast.emit("omt",data,fic,fil,vel,user);
      //Evento creado por nosotros se puede llamar 'pepito'
   });
   
});


