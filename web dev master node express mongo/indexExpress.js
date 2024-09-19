import express from "express";
import path from "path";
const app = express();
import mongoose from "mongoose";
import { name } from "ejs";

app.use(express.static(path.join(path.resolve(), "public")));

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://juniyd:x18txsxZcSt1ZGy0@nodeexpresswebdevmaster.tayef.mongodb.net/",
    {
      dbName: "NodeExpressMongoDbYouTube",
    }
  )
  .then(() => console.log("MonagoDb is Connected"));

const userSchema = new mongoose.Schema({
  name: String,
  gmail: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// app.get('/', (req, res) => {
//     console.log("this is route");
//     // res.send('Hello, world!');
//     // res.json({name:'Junaid',lastname:'Siddiqui'})
//     // res.send("<h2>This is HTML code</h2>")
//     // res.sendFile()
//     // console.log(path.resolve()); // Logs the current working directory
//     // res.send('Check the terminal for the directory path.');
//     // console.log(path.join(dir,'./index.js'));
//     // const dir =  path.resolve()
//     // const url =  path.join(dir,'./index.html')
//     // res.sendFile(url);

//     res.render('index.ejs')
// });

// app.post('/formData', async(req,res)=>{
//     console.log("form submitted");
//     console.log(req.body);
//     // res.json({success:true})
//     const obj = {
//         name:req.body.name,
//         gmail:req.body.gmail,
//     }

//     await User.create(obj)
//     console.log("form submitted");

//     res.json({success:true})

// })

// app.get('/about', (req,res) => {
//     console.log("this is about");
//     res.send('This is about page');

// })

app.get("/", (req, res) => {
  // console.log("this is HOme route");
  res.render("register.ejs");
});

app.get("/login", (req, res) => {
  console.log("this is login route");
  res.render("login.ejs");
});
app.get("/register", (req, res) => {
  console.log("this is register route");
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  console.log(req.body);
  // res.render('register.ejs')

  const obj = {
    name: req.body.name,
    gmail: req.body.gmail,
    password: req.body.password,
  };

  let user = await User.create(obj);
//   res.json({ success: "true" });

  res.redirect("/login");
});

app.post("/login", async (req, res) => {
  // console.log("this is login route");
  // res.render('login.ejs')

  const gmail = req.body.gmail;
  const password = req.body.password;

  let user = await User.findOne({ gmail });

  console.log("login user data", user);

  if (!user) return res.redirect("/register");

  const isMatch = password === user.password;

  if (!isMatch) return res.render("login.ejs", { msg: "Invalid Password" });

  if(isMatch) res.redirect('/logout')
  // res.json({kuchbhi:'de sakte ho'})
});
app.get("/logout", (req, res) => {
  console.log("this is logout route");
//   res.redirect('/')
  res.render("logout.ejs")
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

//  C U R D
//  C - Create = POST(method)
//  R - GET(method)
//  U - Update = PUT(method)
//  D - Delete = DELETE(method)
