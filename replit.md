# Overview

This is a full-stack web application built as a portfolio website for a UI/UX designer named Sarah Johnson. The application showcases a modern React frontend with a comprehensive component library, backed by an Express.js server with PostgreSQL database integration. The frontend features multiple pages including About, Projects, and Resume sections, all built with a clean, professional design system using shadcn/ui components and Tailwind CSS.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with declarative route definitions
- **State Management**: TanStack React Query for server state management and API caching
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Component Library**: shadcn/ui providing a comprehensive set of accessible UI components built on Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

## Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Database Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Storage Interface**: Abstracted storage pattern with both in-memory and database implementations
- **Development Setup**: Hot module reloading with Vite integration for seamless development experience

## Data Storage
- **Primary Database**: PostgreSQL configured through Neon Database serverless connection
- **ORM**: Drizzle ORM with schema-first approach and automatic type generation
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Session Storage**: Connect-pg-simple for PostgreSQL-backed session management

## Authentication & Authorization
- **Session Management**: Express sessions with PostgreSQL storage backend
- **User Schema**: Simple username/password authentication with UUID-based user identification
- **Type Safety**: Zod schemas for request validation and type inference

## External Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for PostgreSQL hosting
- **UI Framework**: Radix UI primitives for accessible component foundations
- **Styling**: Tailwind CSS with PostCSS for utility-first styling approach
- **Development Tools**: Replit integration with runtime error overlay and cartographer for enhanced development experience
- **Validation**: Zod for runtime type checking and schema validation
- **Date Handling**: date-fns for comprehensive date manipulation utilities
- **Icons**: Lucide React for consistent iconography throughout the application