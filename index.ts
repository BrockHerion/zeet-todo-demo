import express from "express";
import Cors from "cors";

const app = express();
const cors = Cors();

app.use(cors);

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

//app.listen(port, () => console.log(`Running on port ${port}`));

export default app;
