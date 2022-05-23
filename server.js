const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // in order to bind a unique token to logged user
const { db } = require("./models/User");

const user = "admin_LTW";
const password = "progettoLTW";

// DB connection
mongoose
  .connect(
    `mongodb+srv://${user}:${password}@progettoltw.xfdbm.mongodb.net/Blocktracr?retryWrites=true&w=majority`
  )
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// register
app.post("/register", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10), // encrypts pw with 10 algorithms recursions
  });
  console.log("New user tried to register:");
  console.log(newUser);
  newUser.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "error",
        error: "email in use",
      });
    }
    return res.status(200).json({
      title: "registration success",
    });
  });
});

// login
app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err)
      return res.status(500).json({
        title: "server error",
        error: err,
      });
    // user not found
    if (!user) {
      return res.status(401).json({
        title: "user not found",
        error: "invalid credentials",
      });
    }
    // wrong pw
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: "login failed",
        error: "invalid credential",
      });
    }
    console.log(req.body);
    // generate token
    let token = jwt.sign({ userId: user._id }, "secretkey");
    console.log("Token created: " + token);
    return res.status(200).json({
      title: "login sucess",
      token: token,
    });
  });
});

// user info
app.get("/user", (req, res) => {
  let token = req.headers.token; // token
  console.log("Token: " + token);
  jwt.verify(token, "secretkey", (err, decoded) => {
    if (err)
      return res.status(401).json({
        title: "unauthorized",
      });
    // if valid token
    User.findOne({ _id: decoded.userId }, (err, user) => {
      if (err) return console.log(err);
      else {
        console.log(user);
        return res.status(200).json({
          user: {
            email: user.email,
            name: user.name,
            _id: user.id,
            name_exchange: user.name_exchange,
            api_key: user.api_key,
            api_secret: user.api_secret,
          },
        });
      }
    });
  });
});

// delete user
app.delete("/delete", (req, res) => {
  let token = req.headers.token;
  jwt.verify(token, "secretkey", (err, decoded) => {
    if (err)
      return res.status(410).json({
        title: "user not found",
      });

    console.log("ID: account da elimianre" + decoded.userId);

    User.deleteOne({ _id: decoded.userId })
      .then(() => {
        console.log("account eliminato con successo");
        return res.status(200).json({
          title: "account eliminato",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(404).json({
          title: "errore, account non eliminato",
        });
      });
  });
});

//aggiunta wallet
app.put("/user", (req, res) => {
  let token = req.body.token;

  jwt.verify(token, "secretkey", (err, decoded) => {
    if (err)
      return res.status(410).json({
        title: "utente non trovato",
      });

    console.log("utente da modificare trovato: " + decoded.userId);

    User.updateOne(
      { _id: decoded.userId },
      {
        name_exchange: req.body.name_exchange,
        api_key: req.body.api_key,
        api_secret: req.body.api_secret,
      },
      (err, user) => {
        if (err) {
          console.log("errore utente non modificato: " + err);
          return res.status(405).json({
            title: "account non modificato",
            err: err,
          });
        } else {
          console.log(
            "informazioni dashboard aggiunte: \n name exchange: " +
              req.body.name_exchange +
              "\n api key: " +
              req.body.api_key +
              "\n api secret " +
              req.body.api_secret
          );
        }
      }
    );
  });
});

//modifica profilo
app.post("/user", (req, res) => {
  let token = req.body.token;
  jwt.verify(token, "secretkey", (err, decoded) => {
    if (err)
      return res.status(410).json({
        title: "utente non trovato",
      });

    if (req.body.email != "") {
      User.updateOne(
        { _id: decoded.userId },
        { email: req.body.email },
        (err, user) => {
          if (err) {
            console.log("errore utente non modificato: " + err);
            return res.status(405).json({
              title: "account non modificato",
              err: err,
            });
          } else {
            console.log("nuova email: " + req.body.email);
          }
        }
      );
    }
    if (req.body.password != "") {
      User.updateOne(
        { _id: decoded.userId },
        { password: bcrypt.hashSync(req.body.password, 10) },
        (err, user) => {
          if (err) {
            console.log("errore utente non modificato " + err);
            return res.status(405).json({
              title: "account non modificato",
              err: err,
            });
          } else {
            console.log("password modificata con successo");
          }
        }
      );
    }
  });
});

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("server running on port " + port);
});
