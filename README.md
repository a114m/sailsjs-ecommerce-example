# Dihlab

Example of E-Commerce app using [Sails.js Framework v1.0](http://next.sailsjs.org) (Node.js)

> **Note**: This is incomplete and non-working example.

### Version info

* Sails v1.0.0-45
* sails-generate v1.15.4


### Installing requirements
* [`docker-compose` (suitable for your OS)](https://docs.docker.com/compose/install/)


### Starting the app

Start the app with dependencies using `docker-compse`

```
$ docker-compose up
```


### Example End-Point

* Create new user:
```
$ curl -X POST \
  http://dihlab.com:1337/user/ \
  -d '{
  "username": "someuser4",
  "email": "email4@dihlab.com",
  "password": "abcd1234"
}'
```
