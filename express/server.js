const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: false }));
mongoose
  .connect(
    "mongodb+srv://yosefadmoni:passforSv@finalprojectserver.m1zmh.mongodb.net/"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));
 const teacherSchema = new mongoose.Schema({
   name: String,
   id: String,
   salary: Number,
   subject: String
 });
 const Teacher = mongoose.model('Teacher', teacherSchema);
 app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
 });
 app.get('/teachers', async (req, res) => {
   const all = await Teacher.find();
   res.send(all);
});
 app.post('/low-salary', async (req, res) => {
   const salary = Number(req.body.salary);
   const result = await Teacher.find({ salary: { $lt: salary } });
   res.send(result);
 });
 app.post('/add-teacher', async (req, res) => {
   const { name, id, salary, subject } = req.body;

   const exists = await Teacher.findOne({ name, subject });
   if (exists) {
     return res.send('המורה כבר קיים');
  }

   const teacher = new Teacher({ name, id, salary, subject });
   await teacher.save();
   res.send('המורה נוסף בהצלחה');
 });
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
