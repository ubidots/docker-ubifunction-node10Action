# Docker-UbiFunction-node10Action

Base Docker to execute UbiFunction python actions. Based on the original IBM Openwhisk action runner: https://github.com/ibm-functions/runtime-nodejs and Apache Openwhisk node action: https://github.com/apache/openwhisk-runtime-nodejs

# Supported Libraries

Default Python packages supported by the container

cloudant/cloudant: 3.0.2,  
ibm-functions/iam-token-manager: 1.0.3,  
sendgrid/mail: 6.3.1,  
amqplib: 0.5.3,  
apn: 2.2.0,  
async: 2.6.2,  
aws-sdk: 2.581.0,  
bent: 1.3.0,  
body-parser: 1.18.3,  
btoa: 1.2.1,  
cassandra-driver: 4.0.0,  
commander: 2.19.0,  
composeaddresstranslator: 1.0.4,  
consul: 0.34.1,  
cookie-parser: 1.4.4,  
elasticsearch: 15.4.1,  
errorhandler: 1.5.1,  
etcd3: 0.2.11,  
express: 4.16.4,  
express-session: 1.15.6,  
formidable: 1.2.1,  
glob: 7.1.4,  
gm: 1.23.1,  
ibm-cos-sdk: 1.5.0,  
ibm_db: 2.5.2,  
ibmiotf: 0.2.41,  
ibm-watson: 4.2.1,  
iconv-lite: 0.4.24,  
jsdom: 13.2.0,  
jsforce: 1.9.1,  
jsonwebtoken: 8.5.1,  
lodash: 4.17.13,  
log4js: 4.0.2,  
marked: 0.6.2,  
merge: 1.2.1,  
moment: 2.24.0,  
mongodb: 3.1.13,  
mustache: 3.0.1,  
mysql: 2.16.0,  
nano: 8.0.0,  
nodemailer: 5.1.1,  
oauth2-server: 3.0.1,  
openwhisk: 3.19.0,  
path-to-regexp: 3.0.0,  
pg: 7.11.0,  
process: 0.11.10,  
pug: 2.0.4,  
redis: 2.8.0,  
request: 2.88.0,  
request-promise: 4.2.4,  
rimraf: 2.6.3,  
semver: 5.6.0,  
serialize-error: 3.0.0,  
serve-favicon: 2.5.0,  
socket.io: 2.2.0,  
socket.io-client: 2.2.0,  
superagent: 4.1.0,  
swagger-tools: 0.10.4,  
tmp: 0.0.33,  
twilio: 3.28.0,  
underscore: 1.9.1,  
url-pattern: 1.0.3,  
uuid: 3.3.2,  
validator: 10.11.0,  
vcap_services: 0.7.0,  
watson-developer-cloud: 4.0.0-rc2,  
when: 3.7.8,  
winston: 3.2.1,  
ws: 6.1.4,  
xlsx: 0.14.3,  
xml2js: 0.4.19,  
xmlhttprequest: 1.8.0,  
yauzl: 2.10.0,  
yazl: 2.5.1

# Examples

## Hello Action
Write a simple function and save it as hello.js

```js
function main(args){
    console.log("hello!");
    return {args: args}
}
```

## IBM Cloud Functions (based on Apache OpenWhisk)

### To use as a node kind action

```bash
ibmcloud wsk action create helloJs hello.js --kind nodejs:10
```

### Invoke the action

```bash
ibmcloud wsk action invoke helloJs
```

### How to use as a docker Action locally

To use as a docker action based on this container

```
ibmcloud wsk action update helloJs hello.js --docker ubidots/docker-ubifunction-node10Action
```
