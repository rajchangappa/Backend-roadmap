import { IncomingMessage, ServerResponse } from "node:http";

export function handleRoutes(req: IncomingMessage, res: ServerResponse) {
  const url = (req.url?.split("?")[0] || "/").replace(/\/+$/, "") || "/";
  const method = req.method;

  const users = [
    { id: 1, username: "username 1", department: "HR" },
    { id: 2, username: "username 2", department: "Software Engineering" },
    { id: 3, username: "username 3", department: "Product Design" },
  ];

  if (url === "/" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Server is running and responding to requests!");
  } else if (url === "/health" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const healthStatus = [
      { id: 1, title: "Service 1", completed: false },
      { id: 2, title: "Service 2", completed: true },
      { id: 3, title: "Service 3", completed: false },
    ];

    res.end(JSON.stringify(healthStatus));
  } else if (url === "/users" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify(users));
  } else if (url.startsWith("/users/") && method === "GET") {
    const userID = Number(url.replace("/users/", ""));
    const user = users.find((user) => user.id === userID);

    if (user) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("404 User Not Found");
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
}
