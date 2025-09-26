import express, {
  type Request,
  type Response,
} from "express";

//import middlewares
import morgan from "morgan";
import invalidJsonMiddleware from "./middlewares/invalidJsonMiddleware.js";
//import route versions
import studentRouter from "./routes/studentsRoutes_v1.js";


const app = express();
const port = 3000;

//morgan middlewares
//app.use(morgan("dev"));
app.use(morgan("combined"));
// middlewares
app.use(express.json());

app.use(invalidJsonMiddleware);

// Endpoints (route handlers)
//GET/
app.get("/", (req: Request, res: Response) => {
  res.send("API services for Student Data");
});



app.use("/api/v1" , studentRouter);

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
