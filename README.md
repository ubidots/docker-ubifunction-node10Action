# Docker-UbiFunction-python3Action

Base Docker to execute UbiFunction python actions. Based on the original IBM Openwhisk action runner: https://github.com/ibm-functions/runtime-nodejs and Apache Openwhisk node action: https://github.com/apache/openwhisk-runtime-nodejs



### Build

- Run the `distDocker` command to generate local Docker images for the different runtime versions.

```
./gradlew core:nodejs6Action:distDocker
./gradlew core:nodejs8Action:distDocker
./gradlew core:nodejs10Action:distDocker
./gradlew core:nodejs12Action:distDocker
```

This will return the following runtime images with the following names: `nodejs6action`,  `action-nodejs-v8`, `action-nodejs-v10` and `action-nodejs-v12`.

Run the docker images command and tag the desired build

### Testing

- Install project dependencies from the top-level Apache OpenWhisk [project](https://github.com/apache/openwhisk), which ensures correct versions of dependent libraries are available in the Maven cache.

```
./gradlew install
```

*This command **MUST BE** run from the directory containing the main Apache OpenWhisk [repository](https://github.com/apache/openwhisk), not this repository's directory.*

- Build the local Docker images for the runtime versions (see the instructions above).
- Build the custom Docker images used in local testing.

```
./gradlew tests:dat:docker:nodejs6docker:distDocker
./gradlew tests:dat:docker:nodejs8docker:distDocker
./gradlew tests:dat:docker:nodejs10docker:distDocker
./gradlew tests:dat:docker:nodejs12docker:distDocker
```

- Run the project tests.

```
./gradlew :tests:test
```
