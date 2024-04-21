require("dotenv").config();
import express, { Request, Response } from "express";
import cors from "cors";
import globalCatch from "./middlewares/globalCatch";
import queryRouter from "./routes/query";
// import globalCatch from "./middlewares/globalCatch";
// import pingRouter from "./routes/ping";

const app = express();
const PORT: string | number = process.env.PORT || 6060;

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send(`<pre> <i> A Privacy-Preserving Efficient Location-Sharing Scheme for Mobile Online Social Network Applications </i> 🛜 </pre>
	<pre> ~ Built with &#x1F499 by sanam </pre>`);
});

app.use("/api", queryRouter);

app.use(globalCatch);

app.listen(PORT, () => {
  console.log("Server is listening at port no", PORT);
});
