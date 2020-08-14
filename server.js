const express =require("express");

const{accessControl}=require("./middleware");

const users=[
{id:1,name:"Selçuk Çalışkan",place:"Ankara"},
{id:2,name:"Dursun Karadavut",place:"İstanbul"}
];

const app = express();
const PORT=5000;
app.use(express.json());
//app.use(accessControl);//Uygulama Kapsamı


//Localhost:5000/users

//Get Request
app.get("/users",(req,res,next)=>{

res.json({
    success:true,
    data:users
});
});

//Post Request
app.post("/users",(req,res,next)=>{
   

    const user=req.body;
    users.push(req.body);

    res.json({
        success:true,
        data:users

    });

});

//Put Request
//users/1
app.put("/users/:id",(req,res,next)=>{
    const id=parseInt(req.params.id);
for(let i=0;i<users.length;i++){
    if(users[i].id===id){
        users[i]={
            ...users[i],
            ...req.body
        };

    }

}
  

res.json({
    success:true,
    data:users

});

});



//Delete Request

app.delete("/users/:id",(req,res,next)=>{
    const id=parseInt(req.params.id);
    for(let i=0;i<users.length;i++){
        if(users[i].id===id){
         users.splice(i,1);
        }
    }
res.json({
success:true,
data:users
});
});










app.listen(PORT,()=>{
    console.log("Server Started: "+ PORT);


});