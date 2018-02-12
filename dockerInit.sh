#!/bin/sh
git pull https://5828e5eb8d646878a1ed28bb9dd9465057df67b1@github.com/circledev/kensa.git

#stop all docker containers
docker stop $(docker ps -a -q)

#remove all docker containers
docker rm $(docker ps -a -q)

#remove existing docker image
docker rmi -f azureuser/node-web-app:latest

#build new docker image from latest git pull
docker build -t azureuser/node-web-app .

#setup and run new containes on defined ports
docker run --name "5555" -p 5555:3232 -d azureuser/node-web-app:latest
docker run --name "5556" -p 5556:3232 -d azureuser/node-web-app:latest
docker run --name "3131" -p 3131:3232 -d azureuser/node-web-app:latest
docker run --name "3232" -p 3232:3232 -d azureuser/node-web-app:latest
