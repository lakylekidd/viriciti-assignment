# Docker Express API
Following tutorial on: https://itnext.io/lets-dockerize-a-nodejs-express-api-22700b4105e4.

I am using environment secrets using this article: https://medium.com/codait/environment-variables-or-keeping-your-secrets-secret-in-a-node-js-app-99019dfff716.

## Demo
You can find an example of this application running on heroku [here](https://dockerized-express-api.herokuapp.com/).

## Instructions

1. Build the docker image
`docker-compose build`

2. Run the container
`docker-compose up` or in the background `docker-compose up -d`

3. Use the following commands to control the container
`docker-compose stop`
`docker-compose start`
`docker-compose run <custom service>`

* If docker is running in the background and you 
still want to see the console outputs, use the
following command: 
`docker logs $(sudo docker ps -aq --filter name=<>)`

* Or for live console outputs use
`docker logs -f <CONTAINER>`

### Running on different port
If you want to run this image on a different port you need to use the following:
`docker run --name <image_name> -p <local_port>:<container_port>`