Config-Driven React UI Application

Overview

This project is a config-driven React application where the UI structure, content, routing, and styling are derived from a single configuration object instead of being hardcoded inside components.

The goal is to demonstrate scalable UI architecture, clean abstractions, and separation of concerns using core React concepts.

## Tech Stack

- React (Vite)
- TypeScript
- React Router
- Tailwind CSS
- React Context API
- Custom Hooks

- No external UI libraries or state management libraries are used.

## Core Concept: Config-Driven UI

The application uses a single configuration file as the source of truth to define:

- Pages and routes
- Components rendered on each page
- Component content and props
- Theme and styling values

Adding or modifying UI behavior requires editing configuration only, not JSX logic.
