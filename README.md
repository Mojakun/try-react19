# try-react19

## Overview
This project is a playground to explore and learn React 19 and Next.js 15. It is designed to try out new features of React Server Components and Next.js with the latest tools and configurations.

## Prerequisites
- **Node.js**: v22.12.0 (Ensure you are using this version for compatibility)
- **npm**: v9.6.4 or higher
- **nodenv**: Used to manage Node.js versions (if applicable)

## Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd try-react19
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify Node.js version:**
   Ensure you are using Node.js v22.12.0.
   ```bash
   node -v
   ```
   If the version is incorrect, use the following command to switch:
   ```bash
   nodenv local 22.12.0
   ```

## Development

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open in your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Build and Production

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm run start
   ```

## Linting
To check for linting issues, run:
```bash
npm run lint
```

## Key Features
- **React 19**: Experiment with the latest React features, including Server Components.
- **Next.js 15**: Leverage the App Router and Turbopack for modern web development.
- **TypeScript**: Strict type checking for enhanced developer experience.
- **ESLint**: Configured for Next.js best practices.

## Notes
- The `tsconfig.json` is configured with `target: ES2022` to utilize modern JavaScript features.
- Ensure you have the correct Node.js version as specified above.

## Future Plans
- Experiment with React Server Components in more complex scenarios.
- Add integration testing with modern tools like Playwright or Cypress.

## License
This project is for personal and educational purposes. Feel free to adapt or modify as needed.

