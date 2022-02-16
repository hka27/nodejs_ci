const app = require('express')()
const port = process.env.port || 8888

app.get('/*',(req, res)=>{
    res.json({
        message: req.url
    })
    res.status(200)
})
app.listen(port,()=>console.log(`serveris  running on port is ${port}`))
module.exports = app






// var express=require('express');
// var nodemailer = require("nodemailer");
// var app=express();
// const path = require('path')
// /*
//     Here we are configuring our SMTP Server details.
//     STMP is mail server which is responsible for sending and recieving email.
// */
// var smtpTransport = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     port:587,
//     auth: {
//         user: "apollo101@buzzr.ai",
//         pass: "hhliolnzvydrfclz"
//     }
// });
// /*------------------SMTP Over-----------------------------*/

// /*------------------Routing Started ------------------------*/

// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname, '/index.html'));
// });
// app.get('/send',function(req,res){
//     var mailOptions={
//         to : req.query.to,
//         subject : req.query.subject,
//         text : req.query.text
//     }
//     console.log(mailOptions);
//     smtpTransport.sendMail(mailOptions, function(error, response){
//      if(error){
//             console.log(error);
//         res.end("error");
//      }else{
//             console.log("Message sent: " + response.message);
//         res.end("sent");
//          }
// });
// });

// /*--------------------Routing Over----------------------------*/

// app.listen(3000,function(){
//     console.log("Express Started on Port 3000");
// });