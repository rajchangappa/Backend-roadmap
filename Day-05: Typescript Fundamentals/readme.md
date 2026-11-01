# TypeScript Fundamentals

## Core Types and Type Definitions

### 1. Everyday Types

Everyday types in TypeScript include fundamental primitives like `string`, `number`, and `boolean`. They mirror JavaScript's core data types while adding static type safety during development. By explicitly declaring whether a variable holds text, numeric data, or true/false values, TypeScript catches mismatched assignments in your editor before your code ever runs, preventing subtle runtime bugs.

### 2. Object Types

Object types describe the shape and structure of JavaScript objects. In TypeScript, you can specify what properties an object must contain and the exact data type of each property. This ensures that when you pass or manipulate objects in your backend logic, your code consistently accesses expected fields without running into unexpected undefined properties or type errors.

### 3. Type Annotations

Type annotations are explicit instructions you write in your code to tell TypeScript exactly what data type a variable, function parameter, or return value should hold. Written using a colon followed by the type (e.g., `let count: number = 5`), annotations act as a contract, making your code self-documenting and ensuring strict type checking during compilation.

### 4. Interfaces

Interfaces are a powerful TypeScript feature used to define the structural contract or blueprint for objects. They specify property names and their types, allowing multiple objects or classes to share the exact same shape. Interfaces make codebases maintainable, support extension and inheritance, and ensure consistent object structures across complex backend applications.

### 5. Type Aliases

Type aliases allow you to create a custom, reusable name for any type or complex union. Declared using the `type` keyword (e.g., `type ID = string | number`), aliases simplify your code by letting you group complex definitions under a single descriptive label. Unlike interfaces, aliases can represent primitives, unions, and tuples, offering high flexibility.

### 6. Optional Properties

Optional properties allow certain fields in an object type or interface to be omitted when creating an object. Marked with a question mark (`?`) after the property name (e.g., `age?: number`), they tell TypeScript that the value might be `undefined`. This is especially useful for partial configurations, user profiles, or data models where specific fields aren't always required.

### 7. Union Types

Union types allow a variable or parameter to accept multiple possible data types. Built using the pipe symbol (`|`), such as `string | number`, unions give you flexibility while maintaining strict type safety. TypeScript ensures you safely handle all possible types before performing operations, preventing runtime errors caused by unexpected data formats.

### 8. Type Inference

Type inference is TypeScript's smart ability to automatically determine and assign data types when you don't explicitly provide them. If you initialize a variable with a value, like `let name = "Node"`, TypeScript infers it as a string. This reduces repetitive typing boilerplate while still giving you full static type checking and editor autocomplete benefits.

## Working with Union Types and External Data

### Union Types

Union types allow a variable or parameter to accept multiple possible types, joined by a pipe symbol (`|`), such as `string | number`. While this provides great flexibility, TypeScript restricts you from performing operations unless they are valid for _all_ types in the union.

### Narrowing

Because union types can represent multiple forms, TypeScript uses **narrowing** to refine a broad type into a specific one. By using runtime conditional checks like `typeof`, equality comparisons, or custom type guards, TypeScript dynamically figures out the exact type inside that specific code block. For example, inside an `if (typeof val === "string")` block, TypeScript treats `val` strictly as a string.

### Runtime Validation

TypeScript provides static safety _only at compile-time_ before your code runs. In backend development, data entering your app from external sources—like reading a `tasks.json` file or handling terminal input—is untrusted. If an external file contains corrupted data, TypeScript's compile-time checks cannot protect you. Therefore, backend engineers use **runtime validation** libraries (like Zod) or manual checks to inspect incoming data _as it executes_, ensuring real-world data matches expected types safely.
