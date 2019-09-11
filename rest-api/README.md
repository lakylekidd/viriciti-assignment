## Rest API - Vehicle Data
This is the RESTful API that serves the vehicle data upon request.

## Endpoints
This API contains only two endpoints:
- `/api/data` : Fetches all data using optional filters and sorting - e.g. `/api/data?vehicle=vehicleName&limit=10&skip=2`
- `/api/data/:id` : Fetches only one vehicle data entry by its ID 
> Note that the ID should be a valid ObjectID, otherwise a status code 400 is returned with an error message.

## Technologies & Modules Used
- Docker
- Express
- Mongoose
- Chai
- Chai-Http
- Config
- Cors
- Dotenv
- Mocha
- Nodemon

## Scripts used
1. For running the project use: `npm start` 
2. For running the project tests use: `npm run test`

> **Note**: While running tests are succeeding, there are occassions where the tests fail upon first start. This is due to connectivity issues with MongoDB, the tests run on a cluster on the cloud which make it unreliable for testing. Running the tests again should resolve the issue.

## Instructions - Installation

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