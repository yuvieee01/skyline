FROM nginx:alpine
# Copy html, css, and js files into the Nginx web root
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]