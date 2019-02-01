let fs=require('fs');
let http=require('http');
let express=require('express');
let mongoose=require('mongoose');
let bodyParser=require('body-parser');
let app=express();
let bp=bodyParser.json();
mongoose.connect('mongodb://admin:admin123@ds121461.mlab.com:21461/accountapp')

let animalSchema=new mongoose.Schema({
    "animal":String,
    "age":Number,
    "gender":String
});


let animalModel=new mongoose.model("animal",animalSchema);


// app.get("/",function(req,res){
//     let data={
//         "animal":"Lion",
//         "age":23,
//         "gender":"male"
//     }

//     animalModel(data).save(function(err,data){
//         console.log(err);
//         console.log(data);
//     });

// });



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.get("/animals",function(req,res){
    animalModel.find({},function(err,data){
        res.json(data);
    });   
});

app.post("/addAnimal",bp,function(req,res){
    animalModel(req.body).save(function(err,data){
        console.log(err);
    })
})

app.get("/employee",function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'})
        let myReadStream=fs.createReadStream(__dirname+"/data/employee.json","utf-8");
         myReadStream.pipe(res);
    
});



app.listen(3000);
console.log("server running @ 3000");




// myReadStream.pipe(myWrite);

// myReadStream.on('data',function(response){
//     console.log(response);
// });


// let myWrite=fs.createWriteStream(__dirname+"/data/dataop.json");

// let server=http.createServer(function(req,res){

//     res.writeHead(200,{'Content-Type':'application/json'})
//     let myReadStream=fs.createReadStream(__dirname+"/data/data.json","utf-8");
//     myReadStream.pipe(res);

// });
