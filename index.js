import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req,res)=>{
res.send("Hello I")
})

const users = [
    {id:1 , name: "suhaib" , email:"suhaib@gmail.com"},
    {id:2 , name: "sinan" , email:"sinan@gmail.com"},
    {id:3 , name: "mahtab" , email:"mahtab@gmail.com"},
    {id:4 , name: "suoyaiba" , email:"suoyaiba@gmail.com"},
    {id:5 , name: "khubaib" , email:"khubaib@gmail.com"},
    {id:6 , name: "ahmad" , email:"ahmad@gmail.com"},
    {id:7 , name: "ayesha abdullah" , email:"ayesha@gmail.com"}
]
app.get("/users", (req,res)=>{
res.send(users);
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})
