const nodemailer = require("nodemailer");

const getIndex = (req, res) =>{
    res.render('index')
}

const postMessage = (req, res) =>{
    console.log(req.body);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ahmadanote26@gmail.com', // here use your real email
            pass: 'lampefall123'
        }
      });
      
      var mailOptions = {
        from: req.body.email, // sender address
        to: "ahmadanote26@gmail.com", // list of receivers
        subject: "Cours Family ✔", // Subject line
        text: `son nom est:  ${req.body.name},  
        son numero de telephone est:  ${req.body.phone}` +
        " " + "son message est: " + req.body.message

      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
        const nom = req.body.name
        const phone = req.body.phone
        console.log("#### ", nom, phone);
        res.render('message', {name: nom, phone: phone})
      });
}


module.exports= {getIndex: getIndex, postMessage: postMessage}