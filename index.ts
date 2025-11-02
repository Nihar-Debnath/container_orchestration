import express from "express";
const app = express();

app.get("/cpu",(req,res)=>{
    const startTime = Date.now();
    for (let i = 0; i < 1000000000; i++) {
        Math.random();        
    };
    const totalTime = Date.now() - startTime;
    res.json("Hello cpu. "+" Total time taken for the operation is: "+totalTime+" ms");
});

app.get("/health",(req,res)=>{
    res.status(202).json("server is healthy");
});

app.get("/",(req,res)=>{
    res.status(202).json({
        "greet":"Hello user",
        "route-1":"http://ip:3000/cpu",
        "route-2":"http://ip:3000/health",
        "api/v1":"http://ip:3000/api/v1",
        "api/v2":"http://ip:3000/api/v2",
        "api/v3/AWS_ID":"http://ip:3000/api/v3/AWS_ID"
    });
});


app.get("/api/v1",(req,res)=>{
    res.status(202).json({
        "vs":"This is Api v-1"
    });
});

app.get("/api/v2",(req,res)=>{
    res.status(202).json({
        "vs":"This is Api v-2"
    });
});

app.get("/api/v3/:AWS_ID",(req,res)=>{

    const AWS_ID = req.params.AWS_ID;

    res.status(202).json({
        "vs":"This is Api v-3",
        "AWS_ID":AWS_ID
    });
});

app.listen(3000);