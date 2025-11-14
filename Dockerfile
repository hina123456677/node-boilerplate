# Use official Node.js LTS as base image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and lock file
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally and dependencies
RUN npm install -g pnpm && pnpm install

# Copy the rest of the source code
COPY . .

# Build TypeScript
RUN pnpm exec tsc

# Expose the port your app will run on
EXPOSE 3000

# Command to run the app
CMD ["node", "dist/main.js"]