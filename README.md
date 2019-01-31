# Gekaapte Brieven client
&nbsp;
## Getting started
#### Install dependencies
```
$ npm install
```

#### Symlink production.yml
```
$ cd docker && ln -s /path/to/deploy/gekaaptebrieven/production.yml production.yml
```

#### Start the containers so Docker can create the volumes. Stop the containers once they are running. The Janus container will fail because it is missing a config file.
```
$ npm run start:backend
```

#### Copy the ElasticSearch and Janus configs
```
$ cp /path/to/deploy/pergamon/esconfig/elasticsearch.yml /var/lib/docker/volumes/gekaaptebrieven_es_config/_data/
$ cp /path/to/deploy/pergamon/janus/config.yml /var/lib/docker/volumes/gekaaptebrieven_janus_config/_data/
```

#### Start the containers. They should both be healthy now.
```
$ npm run start:backend
```

#### Upload documents to Janus. You will need the `gekaaptebrieven` repo from `hi7`
```
$ cd /path/to/gekaaptebrieven/data && sh tojanus.sh http://localhost:8080 tei/*
```

#### Test the backend
```
$ curl http://localhost:8080/documents
```
should give a list of document IDs
&nbsp;

&nbsp;

## Development
#### Start the backend 
```
$ npm run start:backend
```

#### Start the Webpack Dev Server, which launches a webserver and watches the /src files for changes
```
$ npm run start:dev
```
