//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const https=require("https");
const ejs=require("ejs");
const app=express();
app.set("view-engine","ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){

   https.get("https://api.wazirx.com/api/v2/tickers", resp => {
     let data = "";

     resp.on("data",chunk => {
       data+=chunk;
     });
     resp.on("end", () =>{

       const url=JSON.parse(data);
       const name=url.btcinr.name;
       const last=url.btcinr.last;
       const buy=url.btcinr.buy;
       const sell=url.btcinr.sell;
       const volume=url.btcinr.volume;
       const base=url.btcinr.base_unit;

       const name2=url.xrpinr.name;
       const last2=url.xrpinr.last;
       const buy2=url.xrpinr.buy;
       const sell2=url.xrpinr.sell;
       const volume2=url.xrpinr.volume;
       const base2=url.xrpinr.base_unit;

       const name3=url.ethinr.name;
       const last3=url.ethinr.last;
       const buy3=url.ethinr.buy;
       const sell3=url.ethinr.sell;
       const volume3=url.ethinr.volume;
       const base3=url.ethinr.base_unit;

       const name4=url.trxinr.name;
       const last4=url.trxinr.last;
       const buy4=url.trxinr.buy;
       const sell4=url.trxinr.sell;
       const volume4=url.trxinr.volume;
       const base4=url.trxinr.base_unit;

       const name5=url.eosinr.name;
       const last5=url.eosinr.last;
       const buy5=url.eosinr.buy;
       const sell5=url.eosinr.sell;
       const volume5=url.eosinr.volume;
       const base5=url.eosinr.base_unit;

       const name6=url.zilinr.name;
       const last6=url.zilinr.last;
       const buy6=url.zilinr.buy;
       const sell6=url.zilinr.sell;
       const volume6=url.zilinr.volume;
       const base6=url.zilinr.base_unit;

       const name7=url.batinr.name;
       const last7=url.batinr.last;
       const buy7=url.batinr.buy;
       const sell7=url.batinr.sell;
       const volume7=url.batinr.volume;
       const base7=url.batinr.base_unit;

       const name8=url.zrxinr.name;
       const last8=url.zrxinr.last;
       const buy8=url.zrxinr.buy;
       const sell8=url.zrxinr.sell;
       const volume8=url.zrxinr.volume;
       const base8=url.zrxinr.base_unit;

       const name9=url.omginr.name;
       const last9=url.omginr.last;
       const buy9=url.omginr.buy;
       const sell9=url.omginr.sell;
       const volume9=url.omginr.volume;
       const base9=url.omginr.base_unit;

       const name10=url.iostinr.name;
       const last10=url.iostinr.last;
       const buy10=url.iostinr.buy;
       const sell10=url.iostinr.sell;
       const volume10=url.iostinr.volume;
       const base10=url.iostinr.base_unit;

       res.render("list.ejs",{namea:name,lasta:last,buya:buy,sella:sell,vola:volume,basa:base,
         name2:name2,last2:last2,buy2:buy2,sell2:sell2,volume2:volume2,base2:base2,
         name3:name3,last3:last3,buy3:buy3,sell3:sell3,volume3:volume3,base3:base3,
         name4:name4,last4:last4,buy4:buy4,sell4:sell4,volume4:volume4,base4:base4,
         name5:name5,last5:last5,buy5:buy5,sell5:sell5,volume5:volume5,base5:base5,
         name6:name6,last6:last6,buy6:buy6,sell6:sell6,volume6:volume6,base6:base6,
         name7:name7,last7:last7,buy7:buy7,sell7:sell7,volume7:volume7,base7:base7,
         name8:name8,last8:last8,buy8:buy8,sell8:sell8,volume8:volume8,base8:base8,
         name9:name9,last9:last9,buy9:buy9,sell9:sell9,volume9:volume9,base9:base9,
         name10:name10,last10:last10,buy10:buy10,sell10:sell10,volume10:volume10,base10:base10});

     });
   });
});





app.listen("3000",function(req,res){
  console.log("server started.");
})
