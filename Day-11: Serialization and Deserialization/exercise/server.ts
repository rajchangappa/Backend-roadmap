// Starts HTTP server and listens for incoming requests.
import { createServer } from "node:http";

const PORT = 3000;

const server = createServer((req, res) => {
  // Checks if the request method is POST and the URL is /data. If so, it reads the request body.
  if (req.method === "POST" && req.url === "/welcome") {
    let body = "";
    // on method listens for incoming data chunks and appends them to the body variable.
    req.on("data", (chunk) => {
      body += chunk;
    });

    // parses the accumulated body as JSON and sends a response back to the client.
    req.on("end", () => {
      const parsedData = JSON.parse(body);
      const response = {
        message: `Hello, ${parsedData.name}!`,
        status: "success",
      };

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(response));
    });
  } else {
    // If the request method is not POST or the URL is not /data, it sends a 404 response.
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found");
  }
});

server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`),
);
