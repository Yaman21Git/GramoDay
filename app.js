var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");

mongoose.connect('mongodb://localhost/cat_app',{useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var reportSchema= new mongoose.Schema({
       userID: String,
       marketID: String,
       marketName: String,
       cmdtyID: String,
       cmdtyName: String,
       priceUnit: String,
       convFctr: Number,
       price: Number
});

var Report= mongoose.model("Report", reportSchema);

/*Report.create({
    userID: "user-1",
	marketID: "market-1",
	marketName: "Vashi Navi Mumbai",
    cmdtyID: "cmdty-1",
	marketType: "Mandi",
	cmdtyName: "Potato",
	priceUnit: "Pack",
	convFctr: 50,
	price: 700
},function(err,report1){
      if(err){
        console.log("there is an error");
      }
      else{
        console.log("status :"+"success");
        console.log(report1);
      }
});

Report.create({
    userID: "user-2",
	marketID: "market-1",
	marketName: "Vashi Navi Mumbai",
	cmdtyID: "cmdty-1",
	cmdtyName: "Potato",
	priceUnit: "Quintal",
	convFctr: 100,
	price: 1600
},function(err,report2){
      if(err){
        console.log("there is an error");
      }
      else{
        console.log("status :"+"success");
        console.log(report2);
      }
});*/

Report.find({},function(err,reports){
      if(err){
        console.log("there is an error");
      }
      else{
        console.log("The aggreagate report is:");
        console.log("priceUnit :"+"Kg")
        console.log("price :"+((reports[0]["price"])/(reports[0]["convFctr"])+(reports[1]["price"])/(reports[1]["convFctr"]))/2 );
      }
});