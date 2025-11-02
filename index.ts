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
        "route-2":"http://ip:3000/health"
    });
});


app.get("/api/route1",(req,res)=>{
    res.status(202).json({
        "routes":"This is Api Route 1"
    });
});

app.get("/api/route2",(req,res)=>{
    res.status(202).json({
        "routes":"This is Api Route 2"
    });
});

app.listen(3000);