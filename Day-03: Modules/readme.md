# Node.js Modules

## What Modules Do

A **module** is a file that groups code so it can be organized and reused. Modules help keep projects from becoming one large, difficult-to-maintain file. They also keep each file's code separate and make it easier to test.

## How Modules Work

Node.js treats each file as a separate module. In **CommonJS**, Node wraps each file in a function and provides values such as `module`, `exports`, `require`, `__dirname`, and `__filename`. These values are available inside the file without being declared globally.

**ES Modules** use `import` and `export` instead. They are analyzed before the code runs, which helps Node understand how files depend on each other.

| Module system    | How it works                                               |
| ---------------- | ---------------------------------------------------------- |
| CommonJS (CJS)   | Loads modules synchronously with `require()`.              |
| ES Modules (ESM) | Uses `import` and `export`; supports asynchronous loading. |

## Types of Node.js Modules

| Type        | Description                                                  | Example                |
| ----------- | ------------------------------------------------------------ | ---------------------- |
| Core        | Included with Node.js; no separate installation is needed.   | `node:fs`, `node:http` |
| Local       | Files you create in your project and import using a path.    | `./math.js`            |
| Third-party | Packages made by others and installed from the npm registry. | `express`              |

## Useful Built-in Modules

Node.js includes modules for common tasks, such as working with paths, files, and network connections.

### `path`: File Paths

The `path` module builds paths in a way that works across operating systems, which may format paths differently.

```javascript
import path from "node:path";

const safePath = path.join("users", "docs", "app.js");
```

### `fs`: Files

The `fs` (file system) module reads, writes, and manages files on your computer. This example reads a file as text. `readFileSync()` waits for the read to finish before continuing.

```javascript
import fs from "node:fs";

const data = fs.readFileSync("config.json", "utf8");
```

### `http`: Network Requests

The `http` module lets Node.js create servers that communicate over a network.

```javascript
import http from "node:http";

http.createServer((req, res) => res.end("Server Active")).listen(3000);
```

## Key Terms

Each explanation contains exactly 10 words.

| Term                       | Explanation                                                                     |
| -------------------------- | ------------------------------------------------------------------------------- |
| Module                     | A code unit that groups logic for reuse across applications.                    |
| Encapsulation              | Hiding module details while exposing necessary functionality to other code.     |
| Monolith                   | One large program with tightly connected code and few modules.                  |
| Separation of concerns     | Organizing code so each part handles one clear responsibility independently.    |
| Global namespace pollution | Unintentionally sharing global names, causing unrelated code parts to conflict. |
| IIFE                       | A function expression that runs immediately after it is created.                |
| Runtime                    | The environment that executes a program while it is running.                    |
| CommonJS                   | Node's module system uses require and module.exports to share code.             |
| ES Modules                 | JavaScript's standard modules use import and export to share code.              |
| Synchronous                | An operation finishes before the program continues to another step.             |
| Asynchronous               | Program execution continues while an operation waits to return results.         |
| File system                | The way an operating system stores, names, and organizes files.                 |

## Key Takeaways

- Modules organize code into separate, reusable files.
- Node.js supports CommonJS and ES Modules.
- Modules can be built into Node.js, created locally, or installed as third-party packages.
- Built-in modules such as `path`, `fs`, and `http` provide common features.
