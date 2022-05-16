const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');//installato pure jsonwebtoken per associare un token agli utenti che si loggano
const { db } = require('./models/User');

const user='admin_LTW';
const password = 'progettoLTW';

//connessione
mongoose.connect(`mongodb+srv://${user}:${password}@progettoltw.xfdbm.mongodb.net/Blocktracr?retryWrites=true&w=majority`)
    .then(()=>console.log('database connesso 2'))
    .catch(e=>console.log(e));
const app = express();



app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.post('/register', (req,res,next)=>{
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10) //crypta la password con 10 ricorsioni di algoritmo (il massimo)
    })
    console.log(newUser)
    newUser.save(err=>{
        if(err){
            return res.status(400).json({
                title:'error',
                error:'email in use'
            })
        }
        return res.status(200).json({
            title: 'registration success'
        })
    })
})
//eliminazione
app.post('/delete', (req,res,next)=>{
    console.log("req: " + req);
    console.log("sto per eliminare l'utente")
    User.find({email: req}).deleteOne()
})

//reindirizzamento utenti non registrati
app.post('/login', (req, res, next)=> {
    User.findOne({email: req.body.email}, (err, user)=>{
        if(err) return res.status(500).json({
            title:'server error',
            error: err,
        })
        if(!user){
            return res.status(401).json({
                title:'user not found',
                error: 'invalid credentials',
            })
        }
        //password sbagliata
        if(!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'login failed',
                error: 'invalid credential'
            })
        }
        console.log(req.body);
        //creiamo un token
        let token = jwt.sign({ userId: user._id}, 'secretkey');
        console.log("token creato: " + token);
        return res.status(200).json({
          title: 'login sucess',
          token: token
        })
    })
})

//info account
app.get('/user', (req, res, next) => {
    let token = req.headers.token; //token
    console.log(token);
    jwt.verify(token, 'secretkey', (err, decoded) => {
      if (err) return res.status(401).json({
        title: 'unauthorized'
      })
    
      console.log("req " + req);
      console.log("res " + res);
      
      //token valido
      User.findOne({ _id: decoded.userId }, (err, user)=>{
        if (err) return console.log(err)
       else
        console.log(user)
        return res.status(200).json({
            user: {
                email: user.email,
                name: user.name,
                _id: user.id
            }
        })
      })
    })
})


const port = process.env.PORT || 5000;

app.listen(port, (err)=>{
    if(err) return console.log(err);
    console.log('server running on port ' + port);
}) 