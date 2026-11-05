# HTTP Methods, Status Codes, and Headers

HTTP is a conversation between a client and a server. A request can include a method, headers, and an optional body. The server replies with a status code, headers, and sometimes a response body.

## 1. HTTP Methods: Client Intentions

HTTP methods tell the server what action the client wants to perform on a resource.

| Method | Purpose | Example |
| --- | --- | --- |
| `GET` | Retrieve a resource without changing it. | `GET /users/42` retrieves the user with ID `42`. |
| `POST` | Submit data, often to create a resource. | `POST /users` creates a user from the request body. |
| `PUT` | Replace a resource, or create it if the API allows. | `PUT /users/42` replaces the user with ID `42`. |
| `DELETE` | Remove a resource. | `DELETE /users/42` deletes the user with ID `42`. |

### Idempotency

An operation is **idempotent** if repeating the same request has the same effect as making it once. `GET`, `PUT`, and `DELETE` are defined as idempotent methods. `POST` is generally not: submitting the same request twice may create two resources or repeat an action, such as a payment.

## 2. HTTP Status Codes: Server Outcomes

The server uses a three-digit status code to summarize how it handled a request.

- **`2xx` — Success:** The request succeeded. For example, `200 OK` means data was returned, and `201 Created` means a resource was created.
- **`4xx` — Client error:** Something about the request needs attention. For example, `401 Unauthorized` means authentication is required or failed, and `404 Not Found` means the resource could not be found.
- **`5xx` — Server error:** The server could not complete an otherwise valid request. For example, `500 Internal Server Error` indicates an unexpected server problem.

## 3. Essential HTTP Headers

Headers provide information about a request or response, such as the data format, credentials, or caching instructions.

### `Content-Type`

Specifies the format of the message body being sent.

**Example:** `Content-Type: application/json` means the request body contains JSON.

### `Accept`

Tells the server which response formats the client can handle.

**Example:** `Accept: application/json` asks the server to return JSON.

### `Authorization`

Sends credentials that the server can use to authenticate a request.

**Example:** Use the `Bearer` scheme followed by a valid access token when requesting a protected resource.

### `Cache-Control`

Specifies how a response may be cached.

**Example:** `Cache-Control: max-age=3600` allows a cache to reuse the response for up to 3,600 seconds.

### `Content-Length`

Specifies the message body size in bytes.

**Example:** `Content-Length: 142` means the body contains 142 bytes.
