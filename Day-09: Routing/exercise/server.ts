import http from "node:http";
import { handleRoutes } from "./router";

const server = http.createServer((req, res) => {
  handleRoutes(req, res);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
