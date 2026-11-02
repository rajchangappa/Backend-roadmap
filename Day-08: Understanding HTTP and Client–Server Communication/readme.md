# HTTP and Client–Server Communication

## 1. HTTP and Statelessness

HTTP (Hypertext Transfer Protocol) is the standard medium clients use to request resources from a backend server via a stateless model. **Statelessness** means the server treats every request independently, immediately forgetting past interactions once a response is sent. While this requires sending self-contained data (like authentication tokens) with every request, it dramatically improves scalability and fault tolerance.

- **Example:** When a user clicks a profile link, the browser sends an independent HTTP request carrying the session token; the server responds with user data and retains no memory of the click afterward.

## 2. Transport Layer and Network Protocols

While HTTP operates at the application layer, it relies heavily on lower-layer transport protocols like TCP (Transmission Control Protocol) to ensure reliable communication. TCP establishes a connection-based handshake before data transfers, guaranteeing that packets arrive sequentially and without loss. This underpins the reliability of web applications.

- **Example:** Downloading a large script file via HTTP relies on TCP to retransmit any corrupted or dropped data packets automatically in the background.

## 3. Evolution of HTTP Versions

HTTP has evolved significantly to boost web performance. HTTP/1.0 opened a fresh TCP connection for every single request, causing severe lag. HTTP/1.1 introduced persistent connections to reuse TCP channels. HTTP/2.0 added multiplexing to handle multiple requests simultaneously over one connection using binary framing. Finally, HTTP/3.0 shifted to UDP via the QUIC protocol, eliminating head-of-line blocking for lightning-fast speeds.

- **Example:** Loading a webpage with dozens of images is vastly faster on HTTP/2 due to multiplexing, which fetches all images concurrently over a single TCP connection.

## 4. Anatomy of HTTP Messages

Every HTTP interaction consists of structured text messages divided into requests and responses. A request message includes a method, path, headers, and an optional body. A response message contains an HTTP version, a status code, response headers, and the payload body.

- **Example:** A browser request contains `GET /api/users` with authorization headers, while the server responds with status code `200 OK`, `Content-Type: application/json`, and a JSON body containing user profiles.

## 5. HTTP Headers and Their Uses

HTTP headers act as metadata attached to requests and responses, operating like shipping labels on a package. They allow clients and servers to pass critical configurations without altering the core payload. Categories include request headers (`Authorization`), representation headers (`Content-Type`), and security headers (`Strict-Transport-Security`).

- **Example:** Setting `Content-Type: application/json` informs the server that the incoming request body is formatted as JSON, allowing proper backend parsing.

## 6. HTTP Methods and Idempotency

HTTP methods define the desired action for a resource. Common methods include `GET` (fetch data), `POST` (create data), `PUT` (replace data), and `DELETE` (remove data). Idempotency refers to whether making identical requests multiple times produces the same server state. Methods like `GET`, `PUT`, and `DELETE` are idempotent, whereas `POST` is not.

- **Example:** Deleting a user account with `DELETE /users/1` multiple times yields the same result (the user stays deleted), making it idempotent.

## 7. CORS and Preflight Requests

The Same-Origin Policy restricts web pages from requesting resources from a different domain unless permitted via Cross-Origin Resource Sharing (CORS). For complex requests (like `PUT`/`DELETE` or custom headers), browsers automatically send a pre-flight `OPTIONS` request to check server permissions before sending the actual payload.

- **Example:** A frontend app on `localhost:3000` requesting data from `api.server.com` triggers an `OPTIONS` pre-flight check to verify if `Access-Control-Allow-Origin` permits the domain.

## 8. HTTP Response Status Codes

Status codes are three-digit numbers returned by servers to indicate the outcome of a request. They are grouped into five categories: `1xx` (informational), `2xx` (success like `200 OK`), `3xx` (redirection like `304`), `4xx` (client errors like `404 Not Found`), and `5xx` (server errors like `500 Internal Server Error`).

- **Example:** When a requested database record does not exist, the server responds with a `404 Not Found` status code to inform the client.

| Code  | Status                | Explanation                                                    |
| ----- | --------------------- | -------------------------------------------------------------- |
| `200` | OK                    | The request succeeded.                                         |
| `201` | Created               | The request succeeded and created a resource.                  |
| `204` | No Content            | The request succeeded, with no response body.                  |
| `301` | Moved Permanently     | The resource has a new permanent URL.                          |
| `304` | Not Modified          | The cached resource is still up to date.                       |
| `400` | Bad Request           | The request is invalid or malformed.                           |
| `401` | Unauthorized          | Authentication is required or was unsuccessful.                |
| `403` | Forbidden             | The server understood the request but denies access.           |
| `404` | Not Found             | The requested resource does not exist.                         |
| `409` | Conflict              | The request conflicts with the resource's current state.       |
| `422` | Unprocessable Content | The request format is valid, but its data cannot be processed. |
| `429` | Too Many Requests     | The client has sent too many requests.                         |
| `500` | Internal Server Error | The server encountered an unexpected problem.                  |
| `503` | Service Unavailable   | The server is temporarily unable to handle the request.        |

In short, status codes tell clients whether a request succeeded, needs attention, or failed.

## 9. HTTP Caching

HTTP caching prevents redundant server processing by storing previous responses locally in the browser or proxy caches. Using headers like `Cache-Control` and `ETag`, clients can send conditional requests (`If-None-Match`). If the resource hasn't changed, the server replies with `304 Not Modified`, allowing instant local loading.

- **Example:** A browser loads a cached CSS file instantly without re-downloading it because the server confirmed via an `ETag` match that the file is unchanged.

## 10. Content Negotiation and Compression

Content negotiation allows clients and servers to agree on the best response format, language, and compression scheme using headers like `Accept` and `Accept-Encoding`. Compression algorithms like `gzip` shrink large text or JSON payloads drastically before transmission, saving valuable network bandwidth.

- **Example:** A browser sends `Accept-Encoding: gzip`, prompting the server to compress a 20MB JSON response down to a few megabytes before sending it across the network.

## 11. Persistent Connections and Data Streaming

Modern HTTP uses persistent connections (`Keep-Alive`) to reuse a single TCP channel across multiple request-response cycles, avoiding connection setup overhead. Additionally, data streaming allows servers to send large payloads progressively in chunks using chunked transfer encoding rather than waiting to compile the entire response.

- **Example:** Streaming a large log file line-by-line to the client interface using chunked transfer encoding as events occur on the server.

## 12. TLS and HTTPS

HTTPS secures HTTP communication by encrypting data in transit using Transport Layer Security (TLS), the modern and secure successor to outdated SSL protocols. TLS utilizes cryptographic certificates to verify server identity, protecting sensitive user data from eavesdropping and man-in-the-middle tampering.

- **Example:** When you log into a banking website, HTTPS ensures your password is encrypted between your browser and the server so malicious actors on public Wi-Fi cannot read it.
