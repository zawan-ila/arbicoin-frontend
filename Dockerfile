FROM node:alpine AS builder

ARG API_URL
ENV REACT_APP_BACKEND_URL $API_URL

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm run build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
