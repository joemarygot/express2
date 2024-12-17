import express from "express";

const app = express();

//Config EJS
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "My hatdog",
    message: "Hello from Hatdog EJS",
    people: ["Hatodg", "Joemar", "Noob"],
  });
});

app.listen(8000, () => console.log("Server Started"));
