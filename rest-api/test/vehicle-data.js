// Set the env variable to test
// process.env.NODE_ENV = "test";

const mongoose = require('mongoose');
const { models } = require('../mongo-connect');
const { VehicleData } = models;

// Load the test dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

// Test data
const seed = [
    {
        "__v": 0,
        "_id": "5d78f3fde737812ff152c9be",
        "energy": 53.2,
        "gps": [
            "52.093448638916016|5.117378234863281"
        ],
        "odo": 88526.413,
        "soc": 72.8,
        "speed": 0,
        "time": 1511436338000,
        "vehicle": "vehicle-1"
    },
    {
        "__v": 0,
        "_id": "5d78f3fde737812ff152c9bf",
        "energy": 53.2,
        "gps": [
            "52.093448638916016|5.117378234863281"
        ],
        "odo": 88526.414,
        "soc": 72.8,
        "speed": 4,
        "time": 1511436339000,
        "vehicle": "vehicle-1"
    },
    {
        "__v": 0,
        "_id": "5d78f3fde737812ff152c9c0",
        "energy": 53.2,
        "gps": [
            "52.093448638916016|5.117378234863281"
        ],
        "odo": 88526.415,
        "soc": 72.8,
        "speed": 6,
        "time": 1511436340000,
        "vehicle": "vehicle-1"
    },
    {
        "__v": 0,
        "_id": "5d78f3fde737812ff152c9c1",
        "energy": 53.2,
        "gps": [
            "52.093448638916016|5.117378234863281"
        ],
        "odo": 88526.417,
        "soc": 72.8,
        "speed": 8,
        "time": 1511436341000,
        "vehicle": "vehicle-1"
    },
    {
        "__v": 0,
        "_id": "5d78f3fde737812ff152c9c2",
        "energy": 53.2,
        "gps": [
            "52.093448638916016|5.117378234863281"
        ],
        "odo": 88526.42,
        "soc": 72.8,
        "speed": 10,
        "time": 1511436342000,
        "vehicle": "vehicle-1"
    },
    {
        "__v": 0,
        "_id": "5d78f3fde737812ff152c9c3",
        "energy": 53.2,
        "gps": [
            "52.08921432495117|5.106114864349365"
        ],
        "odo": 88526.423,
        "soc": 72.8,
        "speed": 12,
        "time": 1511436343000,
        "vehicle": "vehicle-1"
    },
    {
        "__v": 0,
        "_id": "5d78f3fde737812ff152c9c5",
        "energy": 53.2,
        "gps": [
            "52.0892448425293|5.106178283691406"
        ],
        "odo": 88526.43,
        "soc": 72.8,
        "speed": 12,
        "time": 1511436345000,
        "vehicle": "vehicle-1"
    },
    {
        "__v": 0,
        "_id": "5d78f3fde737812ff152c9c4",
        "energy": 53.2,
        "gps": [
            "52.08921432495117|5.106114864349365"
        ],
        "odo": 88526.426,
        "soc": 72.8,
        "speed": 13,
        "time": 1511436344000,
        "vehicle": "vehicle-1"
    },
    {
        "__v": 0,
        "_id": "5d78f3fee737812ff152c9c6",
        "energy": 53.2,
        "gps": [
            "52.0892448425293|5.106178283691406"
        ],
        "odo": 88526.433,
        "soc": 72.8,
        "speed": 11,
        "time": 1511436346000,
        "vehicle": "vehicle-1"
    },
    {
        "__v": 0,
        "_id": "5d78f3fee737812ff152c9c7",
        "energy": 53.2,
        "gps": [
            "52.0892448425293|5.106178283691406"
        ],
        "odo": 88526.436,
        "soc": 72.8,
        "speed": 9,
        "time": 1511436347000,
        "vehicle": "vehicle-1"
    },
    {
        "__v": 0,
        "_id": "5d78f3fee737812ff152c9c8",
        "energy": 53.2,
        "gps": [
            "52.08928298950195|5.106295108795166"
        ],
        "odo": 88526.438,
        "soc": 72.8,
        "speed": 9,
        "time": 1511436348000,
        "vehicle": "vehicle-2"
    },
    {
        "__v": 0,
        "_id": "5d78f3fee737812ff152c9ca",
        "energy": 53.2,
        "gps": [
            "52.089298248291016|5.1063385009765625"
        ],
        "odo": 88526.442,
        "soc": 72.8,
        "speed": 6,
        "time": 1511436350000,
        "vehicle": "vehicle-2"
    },
    {
        "__v": 0,
        "_id": "5d78f3fee737812ff152c9c9",
        "energy": 53.2,
        "gps": [
            "52.089298248291016|5.1063385009765625"
        ],
        "odo": 88526.44,
        "soc": 72.8,
        "speed": 7,
        "time": 1511436349000,
        "vehicle": "vehicle-2"
    },
    {
        "__v": 0,
        "_id": "5d78f3fee737812ff152c9cb",
        "energy": 53.2,
        "gps": [
            "52.08932876586914|5.106398105621338"
        ],
        "odo": 88526.444,
        "soc": 72.8,
        "speed": 6,
        "time": 1511436351000,
        "vehicle": "vehicle-2"
    },
    {
        "__v": 0,
        "_id": "5d78f3fee737812ff152c9cc",
        "energy": 53.264,
        "gps": [
            "52.08934783935547|5.106414794921875"
        ],
        "odo": 88526.445,
        "soc": 72.8,
        "speed": 3,
        "time": 1511436352000,
        "vehicle": "vehicle-2"
    },
    {
        "__v": 0,
        "_id": "5d78f3fee737812ff152c9cd",
        "energy": 53.264,
        "gps": [
            "52.0893669128418|5.10642147064209"
        ],
        "odo": 88526.446,
        "soc": 72.8,
        "speed": 3,
        "time": 1511436353000,
        "vehicle": "vehicle-2"
    },
    {
        "__v": 0,
        "_id": "5d78f3fee737812ff152c9ce",
        "energy": 53.264,
        "gps": [
            "52.0893669128418|5.10642147064209"
        ],
        "odo": 88526.447,
        "soc": 72.8,
        "speed": 3,
        "time": 1511436354000,
        "vehicle": "vehicle-2"
    },
    {
        "__v": 0,
        "_id": "5d78f3fee737812ff152c9cf",
        "energy": 53.264,
        "gps": [
            "52.08938980102539|5.1064300537109375"
        ],
        "odo": 88526.447,
        "soc": 72.8,
        "speed": 2,
        "time": 1511436355000,
        "vehicle": "vehicle-2"
    },
    {
        "__v": 0,
        "_id": "5d78f3fee737812ff152c9d0",
        "energy": 53.264,
        "gps": [
            "52.08938980102539|5.1064300537109375"
        ],
        "odo": 88526.447,
        "soc": 72.8,
        "speed": 0,
        "time": 1511436356000,
        "vehicle": "vehicle-2"
    },
    {
        "__v": 0,
        "_id": "5d78f3fee737812ff152c9d1",
        "energy": 53.264,
        "gps": [
            "52.08938980102539|5.1064300537109375"
        ],
        "odo": 88526.448,
        "soc": 72.8,
        "speed": 1,
        "time": 1511436376000,
        "vehicle": "vehicle-2"
    }
]

// Begin Usings
chai.use(chaiHttp);

// Begin our Tests
describe('Vehicle data tests', () => {
    // Remove data from the testing database
    beforeEach(done => {
        // Remove the data from the db
        //VehicleData.remove({}).exec().then(r => { }).catch(console.error);
        VehicleData.remove({}, (err) => { });
        // Seed the db with data
        VehicleData.insertMany(seed, (err, docs) => {
            done();
        });
    });
    // Test the get list endpoint
    describe("/Get vehicle data", () => {
        // Check if the endpoint returns all the entries
        // should there not be any query parameters
        it("it should return 20 entries", (done) => {
            chai.request(server)
                .get("/api/data")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.count.should.be.eql(20);
                    res.body.data.length.should.be.eql(20);
                    done();
                });
        });
        // Check that the endpoint returns a list of data
        // for a specific vehicle name
        it("it should filter by vehicle name", (done) => {
            chai.request(server)
                .get("/api/data?vehicle=vehicle-1")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.count.should.be.eql(10);
                    res.body.data.length.should.be.eql(10);
                    done();
                });
        });
        // Check if the endpoint limits results
        it("it should limit to 5 results", (done) => {
            chai.request(server)
                .get("/api/data?limit=5")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.count.should.be.eql(5);
                    done();
                });
        });
        // Check if the endpoint skips results
        it("it should skip 10 results", (done) => {
            chai.request(server)
                .get("/api/data?skip=10")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.count.should.be.eql(10);
                    done();
                });
        });
    });
    // Test the get by id endpoint
    describe("/Get vehicle data by id", () => {
        // The vehicle data id
        const id = "5d78f3fde737812ff152c9c1";
        const noExistId = "5d78f3ade737812ff152c9c2";
        const invId = "invalidID83490d";
        // Check if the endpoint returns 
        it("it should return 1 entry", (done) => {
            chai.request(server)
                .get(`/api/data/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
        // Check if the endpoint returns 404 not found
        it("it should return 404 not found", (done) => {
            chai.request(server)
                .get(`/api/data/${noExistId}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    done();
                });
        });
        // Check if the endpoint returns 400 invalid id
        it("it should return 400 invalid id", (done) => {
            chai.request(server)
                .get(`/api/data/${invId}`)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.message.should.include('Please provide a valid id.');
                    res.body.message.should.be.a('string')
                    done();
                });
        });
    })
})