var express = require('express');
var fs = require('fs');
const request = require('request');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));


var adminLoginData = {
  KullaniciAdi: '',
  Sifre: ''
};

var loginData = {
  TC: '',
  Sifre: ''
};

var ticketData = {
    qrCode:''
};

var signInData = {
  AD: '',
  Soyad: '',
  Telefon: '',
  yolcuTip: '',
  Mail: '',
  Adres: '',
  TC: '',
  Sifre: '',
  SifreTekrar: ''
};

var durakData = {
  DurakID: '',
  DurakAD: '',
  ilceAdi: '',
  enlem: '',
  boylam: ''
};

var hatData = {
  HatID: '',
  HatNo: '',
  BaslangicDurak:'',
  BitisDurak: '',
  tamFiyat: '',
  ogrenciFiyat: ''
};

var aracData = {
  aracID:'',
  Plaka: '',
  AracMarka: '',
  Model: '',
  Renk: '',
  saseNumarasi: '',
  engelliDestegi: '',
  HatNo: '',
};

var soforData = {
  soforID:'',
  AD: '',
  Soyad: '',
  TC: '',
  ehliyetSeriNo: '',
  Maas: '',
  AracPlaka: '',
  Telefon: '',
  Mail: '',
  Adres: ''
};

var paraYukleData = {
  TC: '',
  Bakiye: '',
  KKNo1: '',
  KKNo2: '',
  KKNo3: '',
  KKNo4: '',
  KKSahip: '',
  KKSonTarihAy: '',
  KKSonTarihYıl: '',
  KKCVV: ''
};

var bakiyeGonderData = {
  TC: '',
  Bakiye: ''
};

var bilgiGuncelleData = {
  Mail: '',
  Telefon: '',
  Adres: ''
};

var sifreGuncelleData = {
  EskiSifre: '',
  Sifre: '',
  SifreTekrar: ''
};

var indirimData = {
  tamOran: '',
  ogrenciOran: ''
};

app.post("/Admin/Login", function( req, response){
  adminLoginData.KullaniciAdi = req.body.KullaniciAdi
  adminLoginData.Sifre = req.body.Sifre
  console.log(adminLoginData.toString());
  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: adminLoginData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});

app.post("/Home/Login", function( req, response){
  loginData.TC = req.body.TC
  loginData.Sifre = req.body.Sifre
  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: loginData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});

app.post("/Station/StationCreate", function( req, response){
  durakData.DurakAD = req.body.DurakAD
  durakData.ilceAdi = req.body.ilceAdi
  durakData.enlem = req.body.enlem
  durakData.boylam = req.body.boylam

  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: durakData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});

app.post("/Home/Create/", function( req, response){
  signInData.AD = req.body.AD
  signInData.Soyad = req.body.Soyad
  signInData.Telefon = req.body.Telefon
  signInData.yolcuTip = req.body.yolcuTip
  signInData.Mail = req.body.Mail
  signInData.Adres = req.body.Adres
  signInData.TC = req.body.TC
  signInData.Sifre = req.body.Sifre
  signInData.SifreTekrar = req.body.SifreTekrar

  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: signInData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});


app.post("/Home/Ticket/", function( req, response){
    ticketData.qrCode = req.body.qrCode
    request.post({
        url: 'https://qr-tech.azurewebsites.net/' + req.path,
        formData: ticketData
    } , (err, res, body) => {
        if (err)
        {
            response.send(err)
            return console.log(err);
        }

        var rqURL = req.url.toString().substr(req.url.length - 3);
        switch (rqURL) {
            case "css" :
                response.writeHead(200, {"Content-Type": "text/css"});
                response.write(res.body);
                break;
            case "ttf" :
                response.writeHead(200, {"Content-Type": "text/font"});
                response.write(res.body);
                break;
            default :
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(res.body);
        };
        response.end();

    });
});


app.post("/Station/StationEdit/:id", function( req, response){
  durakData.DurakID=req.body.DurakID
  durakData.DurakAD = req.body.DurakAD
  durakData.ilceAdi = req.body.ilceAdi
  durakData.enlem = req.body.enlem
  durakData.boylam = req.body.boylam

  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: durakData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});


app.post("/Admin/DiscountEdit", function( req, response){
  indirimData.tamOran = req.body.tamOran
  indirimData.ogrenciOran = req.body.ogrenciOran

  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: indirimData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});

app.post("/Home/BalanceUpdate", function( req, response){
  paraYukleData.TC = req.body.TC
  paraYukleData.Bakiye = req.body.Bakiye
  paraYukleData.KKNo1 = req.body.KKNo1
  paraYukleData.KKNo2 = req.body.KKNo2
  paraYukleData.KKNo3 = req.body.KKNo3
  paraYukleData.KKNo4 = req.body.KKNo4
  paraYukleData.KKSahip = req.body.KKSahip
  paraYukleData.KKSonTarihAy = req.body.KKSonTarihAy
  paraYukleData.KKSonTarihYıl = req.body.KKSonTarihYıl
  paraYukleData.KKCVV = req.body.KKCVV

  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: paraYukleData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});

app.post("/Home/BalanceSend", function( req, response){
  bakiyeGonderData.TC = req.body.TC
  bakiyeGonderData.Bakiye = req.body.Bakiye

  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: bakiyeGonderData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});

app.post("/Home/InformationUpdate", function( req, response){
  bilgiGuncelleData.Mail = req.body.Mail
  bilgiGuncelleData.Telefon = req.body.Telefon
  bilgiGuncelleData.Adres = req.body.Adres

  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: bilgiGuncelleData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});

app.post("/Home/InformationPasswordUpdate", function( req, response){
  sifreGuncelleData.EskiSifre = req.body.EskiSifre
  sifreGuncelleData.Sifre = req.body.Sifre
  sifreGuncelleData.SifreTekrar = req.body.SifreTekrar

  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: sifreGuncelleData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});

app.post("/Driver/DriverCreate", function( req, response){
  soforData.AD = req.body.AD
  soforData.Soyad = req.body.Soyad
  soforData.TC = req.body.TC
  soforData.ehliyetSeriNo = req.body.ehliyetSeriNo
  soforData.Maas = req.body.Maas
  soforData.AracPlaka = req.body.AracPlaka
  soforData.Telefon = req.body.Telefon
  soforData.Mail = req.body.Mail
  soforData.Adres = req.body.Adres

  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: soforData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});

app.post("/Driver/DriverEdit/:id", function( req, response){
  soforData.soforID=req.body.soforID
  soforData.AD = req.body.AD
  soforData.Soyad = req.body.Soyad
  soforData.TC = req.body.TC
  soforData.ehliyetSeriNo = req.body.ehliyetSeriNo
  soforData.Maas = req.body.Maas
  soforData.AracPlaka = req.body.AracPlaka
  soforData.Telefon = req.body.Telefon
  soforData.Mail = req.body.Mail
  soforData.Adres = req.body.Adres

  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: soforData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});

app.post("/Driver/DriverDelete/:id", function( req, response){
    soforData.soforID=req.body.soforID
    soforData.AD = req.body.AD
    soforData.Soyad = req.body.Soyad
    soforData.TC = req.body.TC

    request.post({
        url: 'https://qr-tech.azurewebsites.net/' + req.path,
        formData: soforData
    } , (err, res, body) => {
        if (err)
        {
            response.send(err)
            return console.log(err);
        }

        var rqURL = req.url.toString().substr(req.url.length - 3);
        switch (rqURL) {
            case "css" :
                response.writeHead(200, {"Content-Type": "text/css"});
                response.write(res.body);
                break;
            case "ttf" :
                response.writeHead(200, {"Content-Type": "text/font"});
                response.write(res.body);
                break;
            default :
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(res.body);
        };
        response.end();

    });
});

app.post("/Vehicle/VehicleCreate", function( req, response){
  aracData.Plaka = req.body.Plaka
  aracData.AracMarka = req.body.AracMarka
  aracData.Model = req.body.Model
  aracData.Renk = req.body.Renk
  aracData.saseNumarasi = req.body.saseNumarasi
  aracData.engelliDestegi = req.body.engelliDestegi
  aracData.HatNo = req.body.HatNo

  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: aracData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});

app.post("/Vehicle/VehicleEdit/:id", function( req, response){
  aracData.aracID=req.body.aracID
  aracData.Plaka = req.body.Plaka
  aracData.AracMarka = req.body.AracMarka
  aracData.Model = req.body.Model
  aracData.Renk = req.body.Renk
  aracData.saseNumarasi = req.body.saseNumarasi
  aracData.engelliDestegi = req.body.engelliDestegi
  aracData.HatNo = req.body.HatNo

  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: aracData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});

app.post("/Vehicle/VehicleDelete/:id", function( req, response){
    aracData.aracID=req.body.aracID
    aracData.Plaka = req.body.Plaka
    aracData.saseNumarasi = req.body.saseNumarasi

    request.post({
        url: 'https://qr-tech.azurewebsites.net/' + req.path,
        formData: aracData
    } , (err, res, body) => {
        if (err)
        {
            response.send(err)
            return console.log(err);
        }

        var rqURL = req.url.toString().substr(req.url.length - 3);
        switch (rqURL) {
            case "css" :
                response.writeHead(200, {"Content-Type": "text/css"});
                response.write(res.body);
                break;
            case "ttf" :
                response.writeHead(200, {"Content-Type": "text/font"});
                response.write(res.body);
                break;
            default :
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(res.body);
        };
        response.end();

    });
});

app.post("/Line/LineCreate", function( req, response){
  hatData.HatNo=req.body.HatNo
  hatData.BaslangicDurak = req.body.BaslangicDurak
  hatData.BitisDurak = req.body.BitisDurak
  hatData.tamFiyat = req.body.tamFiyat
  hatData.ogrenciFiyat = req.body.ogrenciFiyat

  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: hatData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});

app.post("/Line/LineEdit/:id", function( req, response){
  hatData.HatID = req.body.HatID
  hatData.HatNo=req.body.HatNo
  hatData.BaslangicDurak = req.body.BaslangicDurak
  hatData.BitisDurak = req.body.BitisDurak
  hatData.tamFiyat = req.body.tamFiyat
  hatData.ogrenciFiyat = req.body.ogrenciFiyat

  console.log(hatData)

  request.post({
    url: 'https://qr-tech.azurewebsites.net/' + req.path,
    formData: hatData
     } , (err, res, body) => {
    if (err) 
    { 
       response.send(err)
       return console.log(err); 
     }

     var rqURL = req.url.toString().substr(req.url.length - 3);
     switch (rqURL) {
      case "css" :
          response.writeHead(200, {"Content-Type": "text/css"});
          response.write(res.body);
          break;
      case "ttf" :
          response.writeHead(200, {"Content-Type": "text/font"});
          response.write(res.body);
          break;
      default :    
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(res.body);
  };
  response.end();
    
  });
});

app.post("/Line/LineDelete/:id", function( req, response){
    hatData.HatID = req.body.HatID
    hatData.HatNo=req.body.HatNo

    console.log(hatData)

    request.post({
        url: 'https://qr-tech.azurewebsites.net/' + req.path,
        formData: hatData
    } , (err, res, body) => {
        if (err)
        {
            response.send(err)
            return console.log(err);
        }

        var rqURL = req.url.toString().substr(req.url.length - 3);
        switch (rqURL) {
            case "css" :
                response.writeHead(200, {"Content-Type": "text/css"});
                response.write(res.body);
                break;
            case "ttf" :
                response.writeHead(200, {"Content-Type": "text/font"});
                response.write(res.body);
                break;
            default :
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(res.body);
        };
        response.end();

    });
});


 app.use("/", function (req, response, next) 
 {
   if (req.method != "POST")
   {
    request('https://qr-tech.azurewebsites.net/' + req.path , (err, res, body) => {
      if (err) 
      { 
         response.send(err)
         return console.log(err); 
       }

       var rqURL = req.url.toString().substr(req.url.length - 3);
       switch (rqURL) {
        case "css" :
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(res.body);
            break;
        case "ttf" :
            response.writeHead(200, {"Content-Type": "text/font"});
            response.write(res.body);
            break;
        default :    
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(res.body);
    };
    response.end();
      
    });
   }
   
 });


var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
