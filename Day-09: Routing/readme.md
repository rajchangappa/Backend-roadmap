# Backend Routing

## 1. What Is Routing?

Routing is the mechanism backend servers use to map incoming URL paths and HTTP methods to specific code handlers. While HTTP methods express the _intent_ (the "what," like GET or POST), routing expresses the _location_ (the "where," like `/books` or `/users`). Together, they direct incoming web traffic to the correct database operations and business logic.

- **Example:** Sending a `GET` request to `/api/books` tells the server _what_ action to take (fetch) and _where_ to look (the books resource).

## 2. Static Routes and Route Matching

Static routes are fixed, unchanging URL paths used to access generalized resources. A routing engine determines how to handle a request by combining both the HTTP method and the static route path as a unique key. This prevents method clashes on the exact same URL.

- **Example:** A `GET /api/books` route retrieves a list of books, while a `POST /api/books` route adds a new book, using the same path with different methods.

## 3. Dynamic Routes and Path Parameters

Dynamic routes allow part of a URL path to change based on the specific resource being requested. Using the industry-standard colon prefix (`:id`), backend frameworks capture variable URL segments as path parameters, treating them as strings to query specific records easily.

- **Example:** The route definition `/api/users/:id` matches `/api/users/123`, where `123` is extracted as the user ID parameter to fetch that exact user record.

## 4. Query Parameters

Query parameters are key-value pairs appended to the end of a URL after a question mark (`?`). Since `GET` requests lack a request body, query parameters provide an ideal way to pass optional configuration data for filtering, sorting, and pagination.

- **Example:** A request to `/api/books?genre=fiction&page=2` uses query parameters to fetch the second page of fiction books without altering the base resource path.

## 5. Nested Routes

Nested routes express hierarchical relationships between different data entities in a REST API. By chaining resource paths together, you can target child elements that belong exclusively to a specific parent entity, maintaining clean semantic structure.

- **Example:** The route `/api/users/123/posts/456` explicitly targets post with ID `456` created by user with ID `123`, clearly showing their parent-child relationship.

## 6. Route Versioning and Deprecation

Route versioning involves embedding version prefixes into URL paths to manage breaking structural changes without disrupting existing clients. When APIs evolve, versioning allows development teams to run multiple API iterations simultaneously while safely deprecating older routes over time.

- **Example:** Transitioning from `/api/v1/products` to `/api/v2/products` lets mobile apps and web clients migrate their endpoints gradually before the older v1 route is shut down.

## 7. Catch-All Routes

Catch-all routes act as a final fallback mechanism placed at the very end of a server's routing stack. When an incoming request fails to match any defined static or dynamic route, the catch-all handler intercepts it instead of crashing or returning an unformatted error.

- **Example:** Using a wildcard route like `/*` at the bottom of your server code catches any invalid endpoint and returns a clean `404 Not Found` response message.
