# Week 1 Task Manager

A small TypeScript console project that brings together concepts from Week 1 of the backend learning roadmap.

## What It Does

- Adds tasks with a title and an optional description.
- Rejects task titles that are empty or only whitespace.
- Assigns each task an ID and marks it incomplete by default.
- Toggles a task's completion status by ID.
- Displays tasks in the console, or a message when there are no tasks.

Tasks are stored in memory, so they are not saved after the program exits. The example tasks are created directly in the source code.

## What It Demonstrates

The project practices TypeScript interfaces, type annotations, optional properties, arrays, and `import type`. It also uses functions, input checks, array methods such as `find` and `forEach`, and optional chaining.

## Project Structure

- `src/types.ts` — defines the `Task` interface.
- `src/tasks.ts` — contains the task operations and example usage.
- `src/app.ts` - executes logic
