const express=require("express");
const helmet=require("helmet");
const rateLimit=require("express-rate-limit");
const hpp=require("hpp");
const cors=require("cors");

const globalErrorHandler=require("../src/middlewares/globalErrorHandler");
const router=require("../src/routers");

const app=express();

// Security Middlewares
app.use(helmet());
app.use(cors());
app.use(hpp());
app.use("/api",rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100,
    message: "Too many requests from this IP, try again later",
    statusCode: 429,
    standardHeaders: true,
    legacyHeaders: false
}));

// Body Parser
app.use(express.json({limit:"10kb"}));
app.use(express.urlencoded({extended:true, limit:"10kb"}));

// Mount Router
app.use("/api",router);

// Handling not found routes
app.use((req,res,next)=>{
    const err=new Error("Route not found");
    err.statusCode=404;
    next (err);
});

// Global Error Handler
app.use(globalErrorHandler);

module.exports=app;
