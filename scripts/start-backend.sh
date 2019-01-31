#!/usr/bin/env bash

# Stop and remove running Gekaapte Brieven containers
CONTAINERS=$(docker ps -aq -f "name=gekaaptebrieven*")
docker stop $CONTAINERS
docker rm $CONTAINERS

# docker-compose -p gekaaptebrieven -f docker/production.yml -f docker/development.yml pull
# docker-compose -p gekaaptebrieven -f docker/production.yml -f docker/development.yml up --build
docker-compose -p gekaaptebrieven -f docker/production.yml pull
docker-compose -p gekaaptebrieven -f docker/production.yml up --build
