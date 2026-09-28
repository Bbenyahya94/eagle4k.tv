FROM alpine:3.20 AS site
WORKDIR /site
COPY dist/ ./

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=site /site /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
