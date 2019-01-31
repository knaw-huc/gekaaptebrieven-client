#!/usr/bin/env bash

echo -e "\n\n"
read -p "Removing running containers?" anwser
echo -e "\n\n"

if [ "$anwser" == "y" ] || ["$anwser" == ""]; then
	docker stop $(docker ps -aq)
	docker rm $(docker ps -aq)
fi

# docker-compose -p gekaaptebrieven -f docker/production.yml -f docker/development.yml pull
# docker-compose -p gekaaptebrieven -f docker/production.yml -f docker/development.yml up --build
docker-compose -p gekaaptebrieven -f docker/production.yml pull
docker-compose -p gekaaptebrieven -f docker/production.yml up --build
