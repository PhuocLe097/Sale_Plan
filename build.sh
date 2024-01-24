#!/bin/bash
PRJ=""
IMAGE_TAG="vietmap.core.promotion.app"
VER="1.0.4"
# wait k8s export image
REGISTRY_URL="vmhub.vietmap.io/platform"

buildDocker () {
     docker rmi -f $IMAGE_TAG:$VER
     docker build  -t $IMAGE_TAG:$VER .
     docker tag $IMAGE_TAG:$VER $REGISTRY_URL/$IMAGE_TAG:$VER
     docker push $REGISTRY_URL/$IMAGE_TAG:$VER
}

buildDocker