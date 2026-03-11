const express=require("express");
const helmet=require("helmet");
const rateLimit=require("express-rate-limit");
const cors=require("cors");
const hpp=require("hpp");
const globalErrorHandler=require("./middlewares/globalErrorHandler");

const app=express();
const router=require("./routers");

// Security Middleware
app.use(helmet());
app.use(cors());
app.use(hpp());

// Body Parser
app.use(express.json({limit:"10kb"}));
app.use(express.urlencoded({extended:true, limit:"10kb"}));

// Global Rate Limmiter
app.use("/api",rateLimit({
    windowMs:20 * 60 * 1000,
    max: 100,
    message: "Try again Latter"
}));

// Mount Routes
app.use("/api",router);

// Handle 404 Error or Routes
app.use((req,res,next)=>{
    const err=new Error("Route Not Found");
    err.statusCode=404;
    next(err);
});

// Global Error Handler
app.use(globalErrorHandler);

module.exports=app;

