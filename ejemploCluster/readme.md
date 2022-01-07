## 1. 

```
npm start FORK // to run in fork mode

npm start CLUSTER // to run in cluster mode

npm start // fork is default mode
```

## 2. Run with nodemon

```
// FORK

nodemon server.js // to run with nodemon mode fork

ps // to see the list of proccess

2 process

// CLUSTER

nodemon server.js CLUSTER // to run with nodemon mode cluster

ps // to see the list of proccess

10 process

```

## 3. Run with forever

```
// FORK

forever -w server.js FORK // fork mode

forever list // list of process with forever

ps // list of process with SO

2 process

// CLUTER

forever -w server.js CLUSTER // cluster mode

forever list // list of process with forever
  - 2 process
ps // list of process with SO
  - 9 process
```

## 4 Run with pm2

```
pm2 start server.js -w  

pm2 list // 1 process

ps -xa // 1 process

pm2 start server.js -w -i max  

pm2 list // 8 process

ps -xa // 8 process
```

## 5 NGINX

```
npm start 8082
npm start 8083
npm start 8084
npm start 8085

nginx -t 
nginx -s reload
```

