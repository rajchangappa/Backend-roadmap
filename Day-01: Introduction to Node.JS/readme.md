# Introduction to Node.js

## What is Node.js and How It Works

Node.js is an open-source, cross-platform runtime environment (A platform providing libraries and services to execute code) built on Google Chrome's V8 JavaScript engine that executes JavaScript code on an operating system.

Unlike traditional multi-threaded servers that spawn a new OS thread per connection, Node.js operates on a **single-threaded event loop** backed by non-blocking I/O via the C++ `libuv` library. When a heavy operation arrives (such as a database query or disk read), Node.js offloads the task to the system and immediately moves to the next request, handling the result via callbacks or Promises once complete. This architecture makes it exceptionally efficient for I/O-bound network applications.

## How Node.js Differs from JavaScript

JavaScript is a high-level programming language defined by a syntax specification (ECMAScript) that dictates variables, control flow, and functions. Node.js is **not a language**; it is the runtime environment that executes that language outside a web browser. Think of JavaScript as the architectural blueprint, and Node.js as the factory floor and machinery required to build and run it in a server environment.

## Browser vs. Node.js

Both environments execute JavaScript using the V8 engine, but they serve fundamentally different purposes:

- **Browser Runtime:** A client-side environment designed to render user interfaces. It includes a Document Object Model (DOM), layout engines, and visual APIs (`window`, `document`), while strictly sandboxing local file system access for security.
- **Node.js Runtime:** A server-side environment designed for backend logic, networking, and CLI tools. It features no DOM or rendering engine, uses `global` instead of `window`, and grants full operating system access (e.g., file management via `fs`, networking via `http`).

## Key Takeaways

- **Runtime, Not Language:** Node.js executes JavaScript on a machine or server, using the V8 engine.
- **Non-Blocking Architecture:** Its single-threaded event loop handles high-concurrency I/O efficiently by delegating heavy tasks under the hood.
- **Context Matters:** Code relying on browser globals (`window`, `document`) will fail in Node.js, just as system-level operations (`process`, `fs`) will fail in a browser.
