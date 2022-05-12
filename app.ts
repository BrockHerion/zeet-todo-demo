import express from "express";
import Cors from "cors";
import ServerlessHttp from "serverless-http";

const app = express();

const cors = Cors();

app.use(cors);

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

//app.listen(port, () => console.log(`Running on port ${port}`));

export default ServerlessHttp(app, { provider: "aws" });
