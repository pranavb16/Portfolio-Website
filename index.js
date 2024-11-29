import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/skills", (req, res) => {
  res.render("skills.ejs");
});

app.get("/project", (req, res) => {
  res.render("projects.ejs");
});

app.get("/achievement", (req, res) => {
  res.render("achieve.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
