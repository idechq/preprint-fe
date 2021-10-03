docker build -f Dockerfile.prod -t preprint-fe:prod .
docker run -it --rm -p 443:443 -p 80:80 --name preprint preprint-fe:prod