# JavaScript for Backend Development

## Running Node.js from the Command Line

Run a JavaScript file with Node.js by passing it to the `node` command:

```bash
node app.js
```

Unlike browser JavaScript, Node.js code starts when you run it in a terminal. It can power backend servers, build tools, database migration scripts, and command-line programs.

As a project grows, split its code into modules instead of keeping everything in one file. Node.js also provides the global `process` object to access information about the running program and its environment.

## The `process` Object

`process` is available throughout a Node.js program without importing it. It provides information about the running process and lets your code interact with the operating system.

Useful properties and methods include:

- `process.env`: Environment variables for settings such as database hosts and API keys; use them instead of writing secrets directly in your code.
- `process.cwd()`: The directory where the process was started.
- `process.exit(code)`: Ends the process. Use `0` for success and a non-zero code, such as `1`, to indicate an error.
- `process.memoryUsage()`: Reports memory used by Node.js.

For example, check the environment and make sure a required setting exists:

```javascript
if (process.env.NODE_ENV === "production") {
  console.log("Running in production mode.");
} else {
  console.log("Running in development mode.");

  if (!process.env.DB_HOST) {
    console.error("Error: DB_HOST is not defined.");
    process.exit(1);
  }
}
```

## Command-Line Arguments: `process.argv`

`process.argv` is an array of values passed when starting a Node.js program:

- `process.argv[0]`: Path to the Node.js executable.
- `process.argv[1]`: Path to the script being run.
- `process.argv[2]` and later: Arguments supplied to the script.

For example, running:

```bash
node server.js --port=8080 development
```

adds `"--port=8080"` and `"development"` to the array:

```javascript
["/usr/local/bin/node", "/path/to/server.js", "--port=8080", "development"];
```

For more complex argument parsing, you can use libraries such as `minimist` or `commander`, or Node.js's built-in `util.parseArgs()`.

## Modules

A module is a file containing code—such as functions or classes—that can be shared with other files. Each Node.js file has its own scope: its variables and functions are private unless the file exports them.

Node.js supports two module systems:

1. **CommonJS (CJS):** Uses `module.exports` to share code and `require()` to load it. It loads modules synchronously when needed.
2. **ES Modules (ESM):** Uses `export` and `import`, following the JavaScript standard. It supports asynchronous loading and static analysis.

Both examples share an `add` function and use it in another file.

**CommonJS** (commonly used with the default `.js` configuration):

```javascript
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };

// app.js
const { add } = require("./math.js");
console.log(add(2, 3));
```

**ES Modules** (enable with `"type": "module"` in `package.json`):

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";
console.log(add(2, 3));
```

## Key Takeaways

- Start a Node.js program from the terminal with `node filename.js`.
- Use `process` to access environment settings, the working directory, memory information, and process control.
- Read command-line inputs from `process.argv`; use a parser for more complex arguments.
- Split code into modules and choose CommonJS or ES Modules to share functionality between files.
