import http from "node:http";
import { IncomingMessage, ServerResponse } from "node:http";

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/" && req.method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Server is running and responding to requests!");
    } else if (req.url === "/health" && req.method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/json");

      const healthStatus = [
        { id: 1, title: "Service 1", completed: false },
        { id: 2, title: "Service 2", completed: true },
        { id: 3, title: "Service 3", completed: false },
      ];

      res.end(JSON.stringify(healthStatus));
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("404 Not Found");
    }
  },
);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
