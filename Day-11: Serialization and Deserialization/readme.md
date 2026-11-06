# Serialization and Deserialization

## 1. Why Data Needs a Shared Format

Modern web applications rely on a client (such as a JavaScript/React app running in a browser) talking to a backend server (built in Node.js, Python, Go, or Rust). Because different programming languages use completely incompatible internal memory models and data types, they cannot directly understand each other's raw in-memory data structures.

- **Example:** JavaScript handles objects dynamically at runtime, whereas languages like Rust use strict, compiled structs. They need a universal bridge to exchange data seamlessly.

## 2. Networking and the OSI Model

Data transmission across the web involves complex networking layers, moving from physical hardware bits up through transport protocols like TCP. While networking fundamentals are vital, backend engineers primarily operate at **Layer 7 (the Application Layer)**. You rely on established protocols and frameworks to handle the transmission, sparing you from manually managing low-level bit conversions.

## 3. Serialization and Deserialization

To bridge language barriers, both client and server agree on a language-agnostic standard format for data exchange.

- **Serialization:** Converting native programming language data structures into a common, shareable format suitable for network transmission or file storage.
- **Deserialization:** Converting that received common format back into the target language's native structures so the server can execute business logic.
- **Example:** Converting a JavaScript task array into a JSON string via `JSON.stringify()` before sending it over HTTP, then parsing it back into a usable object on the server using `JSON.parse()`.

## 4. Text-Based and Binary Formats

Developers choose serialization formats based on readability, performance, and bandwidth constraints:

- **Text-Based Formats:** Human-readable formats like JSON, YAML, and XML. JSON powers roughly 80% of HTTP-based web APIs due to its simplicity and ease of debugging.
- **Binary Formats:** Compact, machine-optimized formats like Protocol Buffers (Protobuf) or Apache Avro. They parse extremely fast and take up minimal network bandwidth, making them popular in high-performance microservice architectures (e.g., gRPC).

## 5. JSON Syntax

JSON (JavaScript Object Notation) is the ubiquitous standard for REST APIs, configuration files, and application logs.

- **Strict Rules:** JSON data must start and end with curly braces `{}`, all object keys **must** be wrapped in double quotes, and values can include strings, numbers, booleans, arrays, or nested objects.
- **Example:**

```json
{
  "id": 1,
  "title": "Master Node.js and TypeScript",
  "completed": false,
  "tags": ["backend", "javascript"]
}
```

## 6. How Data Moves Through a Backend

As a backend engineer, your mental model focuses on the **Application Layer**. Data starts as native application objects, gets serialized into a standard text payload (like JSON), travels across the network wrapped in HTTP, arrives at the server, gets deserialized back into code objects, and feeds your database and business logic. You never have to manage the underlying physical network bits.
