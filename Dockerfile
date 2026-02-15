# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Stage 2: Serve with nginx (non-root, port 8080)
FROM nginxinc/nginx-unprivileged:alpine
USER root
RUN apk update && apk upgrade --no-cache
USER nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
