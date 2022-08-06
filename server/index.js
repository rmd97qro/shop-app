const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const router = express.Router();
const bodyParser = require("body-parser");

const app = express();
app.use("/", router);

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

const port = 3001;

app.get("/", (req, res) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
  res.status(200).send(`Hola has visto esta página ${req.session.cuenta}`);
});

app.post("/add-to-cart", (req, res) => {
  //   const cart = req.session.cart ?? [];

  //   const productExist = cart.some((item) => item.code === req.body.code);

  //   res.status(200).send(`Hola has visto esta página ${req.session}`);

  console.log(req.query);
  req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
  req.session.cart = req.session.cart ? req.session.cart : [];
  res.json(req.body);
});

app.post("/submit", function (req, res) {
  // Can access all parameters from req.body
  console.log("POST parameter recieved are: ", req.body);
});

router.post("/login", function (req, res) {
  console.log(req.body);
  res.end("yes");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
