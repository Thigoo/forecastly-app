# Step 1: Build the React app using Node.js (Vite)
FROM node:18-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project files
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the React app using a lightweight HTTP server
FROM nginx:alpine

# Copy the build output to the Nginx web server folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that Nginx will use
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
