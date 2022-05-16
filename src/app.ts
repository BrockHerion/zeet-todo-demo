import express from "express";
import Cors from "cors";
import http from "http";

// Configure app
const app = express();
const cors = Cors();

app.use(cors);

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

const port = normalizePort(process.env.PORT || "3001");

app.set("port", port);

// Create HTTP server
const server = http.createServer(app);
server.listen(port);

function normalizePort(val: string) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
