var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');


app.use(express.static(__dirname+'/client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

roomBook=require('./Models/book')

roomtype =require('./Models/roomtype');
roomcalandar= require('./Models/roomcalander');
customer=require('./Models/customer');
reservation=require('./Models/reservation');


mongoose.connect('mongodb://localhost/bookroom');

app.listen(3000);
console.log('app is runnig');

app.get('/', function(req, res){
  res.send('Please use /api/books or /api/genres');
});

// for rooms
app.get('/api/roomtype',function(req,res){
    roomtype.getRoomType(function(err,data){
       if(err){
           throw err;
       } 
        console.log(data);
        res.json(data);
    });
      
});


app.post('/api/roomtype',function(req,res){
    var roomType=req.body;
    roomtype.addRoomType(roomType,function(err,data){
       if(err){
           throw err;
       } 
        console.log(data);
        res.json(data);
    });
      
});

app.get('/api/roomcalandar',function(req,res){
    roomcalandar.getRoomCalandar(function(err,data){
       if(err){
           throw err;
       } 
        res.json(data);
    });
      
});

app.post('/bookRoom/:room_id',function(req,res){
     console.log('request reached to node');
      var id = req.params.room_id;
      var roomData={"roomId":id};
      var data=req.body;
    var merged = Object.assign({}, roomData, data);
    roomBook.addRoom(merged,function(err,data){
        if(err){
            throw err;
        }
        res.json(data);
        
    });
});
app.get('/index.html',function(req,res){
    res.sendFile("/client/index.html", {"root": __dirname});
    
});

app.get('/bookroom',function(req,res){
   console.log('book this room'); 
    res.sendFile("/book/book.html", {"root": __dirname});
});



app.get('/api/customer',function(req,res){
    customer.getCustomers(function(err,data){
       if(err){
           throw err;
       } 
        console.log(data);
        res.json(data);
    });
      
});

app.get('/Finalize/:room_id',function(req,res){
    console.log('request reached to finalize'); 
    var id = req.params.room_id;
    console.log('room id in finalize'+id);
    roomcalandar.findById(req.params.room_id,function(err,data){
              if(err){
                  throw err;
              }
        console.log(data);
        res.json(data);
         
    });
    
});



app.get('/api/reservation',function(req,res){
    reservation.getReservations(function(err,data){
       if(err){
           throw err;
       } 
        console.log(data);
        res.json(data);
    });
      
});

