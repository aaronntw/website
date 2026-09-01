FROM nginx:1.28-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html styles.css theme.js /usr/share/nginx/html/
COPY public/favicon.svg /usr/share/nginx/html/public/favicon.svg
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget -qO- http://127.0.0.1/ > /dev/null || exit 1
