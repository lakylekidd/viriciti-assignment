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

### Deploying with Heroku
 1. Run command `heroku login` to login to heroku.
 2. Create your app with heroku `heroku create <app_name>`
 3. Create a heroku.yml file in your application's root directory. The following example heroku.yml specifies the Docker image to build for the app’s web process:
  ```
build:
  docker:
    web: Dockerfile
run:
  web: npm run start
 ```

 In this example, both heroku.yml and Dockerfile are in the same directory. If the Dockerfile lives in a non-root directory, specify the relative path in the build.docker.web value, such as app/Dockerfile.

If you don’t include a run section, Heroku uses the CMD specified in the Dockerfile.

4. Commit the file to your repo:
`git add heroku.yml` `git commit -m "Add heroku.yml"`

5. Set the stack of your app to container:
`heroku stack:set container`

6. Push your app to Heroku: `git push heroku master`
Your application will be built, and Heroku will use the run command provided in heroku.yml instead of your Procfile.

Note: The port is set dynamically by heroku, so you need to user `process.env.PORT` variable on your server to make it work in docker as well.