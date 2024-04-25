const express = require('express');
const db = require('./config/db')
const cors = require('cors');
const { application } = require('express');
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json())


//1. USER
// REGISTER

app.post("/register", (req,res)=> {

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const emailaddress = req.body.emailaddress;
    const password = req.body.password;
    
    db.query("INSERT INTO user (firstname,lastname,emailaddress, password) VALUES (?,?,?,?)",[firstname,lastname,emailaddress,password], (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
    });   
})


//LOGIN 

app.post("/login", (req,res)=> {

    const emailaddress = req.body.emailaddress;
    const password = req.body.password;
    
    db.query("SELECT emailaddress,password FROM user WHERE emailaddress = ? AND password = ?",[emailaddress,password], (err,result)=>{
       if(err) {
        res.send({err: err});
        //console.log(err);
       } 
    
       if(result.length>0){
         res.send(result)
        }
       else{
         res.send({message: "Wrong username or password"})
        }
    
       
    });   
})

//2. PRODUCTS
//reading all values in database 
app.get("/api/ge", (req,res)=>{
    db.query("SELECT name,price,quantity FROM products", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   
});


// inerting values 
app.post("/create", (req,res)=> {

    //const id = req.body.id;
    const name = req.body.name;
    const category_id = req.body.category_id;
    const currency = req.body.currency;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const description = req.body.description;
    
    db.query("INSERT INTO products (name, category_id, currency, quantity, price,description) VALUES (?,?,?,?,?,?)",[name,category_id,currency,quantity,price,description], (err,result)=>{
       if(err) {
       console.log(err)
       } 
       res.send("Values Inserted");
    });   
})


// deleting a value 
app.delete("delete/:id",(req,res)=>{
    const id = req.params.id;
    
    db.query("DELETE FROM products WHERE id= ?", id, (err,result)=>{
    if(err) {
    console.log(err)
    } }) 
})


// updating a value
app.put("/update/:id",(req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const category_id = req.body.category_id;
    const currency = req.body.currency;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const description = req.body.description;
    db.query("UPDATE SET products name= ? and category_id=? and currency=? and quantity = ? and price = ? and description=?  where id = ?", [name,category_id,currency,quantity,description,price,id], (err, result) => {
        if(err) {
            console.log(err)
            } 
        res.send(result)
    })
})


// 3. CATEGORY

app.get("/api/gete", (req,res)=>{
    db.query("SELECT * FROM category", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   
});
// inerting values 
app.post("/cre", (req,res)=> {

    const name = req.body.name;
    const id = req.body.id;

    db.query("INSERT INTO category (id,name) VALUES (?,?)",[id,name], (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
    });   
})


// deleting a value 
app.delete("/delete/:category_id",(req,res)=>{
    const category_id = req.params.category_id;
    
    db.query("DELETE FROM category WHERE category_id= ?", id, (err,result)=>{
    if(err) {
    console.log(err)
    } }) 
})


// updating a value
app.put("/update/:name",(req,res)=>{
    const category_id = req.body.category_id;
    const name = req.body.name;
    db.query("UPDATE SET category name = ? where category_id = ?", [name,category_id], (err, result) => {
        if(err) {
            console.log(err)
            } 
        res.send(result)
    })
})

// 4. EMPLOYEES 

app.get("/api/get", (req,res)=>{
    db.query("SELECT * FROM employees", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   
});

app.get("/api/gettt", (req,res)=>{
    db.query("SELECT id,name,branch_id FROM employees", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   
});
// inerting values 




app.post("/creat", (req,res)=> {

    const id = req.body.id;
    const name = req.body.name;
    const branch_id = req.body.branch_id;
    
    const salary = req.body.salary;
    const joining_date = req.body.joining_date;
    
    db.query("INSERT INTO employees (id, name, branch_id, salary,joining_date) VALUES (?,?,?,?,?)",[id,name,branch_id,salary,joining_date], (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
    });   
})


// deleting a value 
app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;
    
    db.query("DELETE FROM employees WHERE id= ?", id, (err,result)=>{
    if(err) {
    console.log(err)
    } }) 
})


// updating a value
app.put("/update/:id",(req,res)=>{
    const id = req.body.id;
    const salary = req.body.salary;
    db.query("UPDATE SET employees salary = ? where id = ?", [salary,id], (err, result) => {
        if(err) {
            console.log(err)
            } 
        res.send(result)
    })
})


// 5. ORDER

app.get("/api/gett", (req,res)=>{
    db.query("SELECT * FROM orders", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   
});
// inerting values 
app.post("/crea", (req,res)=> {

    const id = req.body.id;
    const name = req.body.name;
    const location = req.body.location;
    const price = req.body.price;
    const time = req.body.time_remaining;
    
    db.query("INSERT INTO orders (id,name, location,price,time) VALUES (?,?,?,?,?)",[id,name,location,price,time], (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
    });   
})


// deleting a value 
app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;
    
    db.query("DELETE FROM order WHERE id= ?", id, (err,result)=>{
    if(err) {
    console.log(err)
    } }) 
})

// updating a value
app.put("/update/:id",(req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const location = req.body.location;
    const price = req.body.price;
    const time = req.body.time_remaining;

    
    
    db.query("UPDATE SET order id=?,name=?,location = ?,price = ?,time=? and  where id = ?", [name,location,price,time,id], (err, result) => {
        if(err) {
            console.log(err)
            } 
        res.send(result)
    })
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('running on port ${PORT}.');
});