#!/bin/bash
echo "执行 docker-compose.$1.yaml"
docker-compose -f "docker-compose.$1.yaml" up -d
