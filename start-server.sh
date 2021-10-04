docker build -f Dockerfile.prod -t preprint-fe:prod .
docker run -it -p 443:443 -p 80:80 -v ~/pdf-temp:/usr/share/nginx/html/pdf --name preprint preprint-fe:prod