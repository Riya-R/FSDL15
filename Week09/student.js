// student.js

const mongoose = require("mongoose");

// connect to MongoDB
mongoose.connect("mongodb+srv://<your-uri-here>", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// simple schema
const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Student = mongoose.model("Student", StudentSchema);

// insert a student
const s = new Student({ name: "Riya", age: 20 });

s.save()
 .then(() => console.log("Student Saved"))
 .catch(err => console.log(err));
