//tasklist /fi "imagename eq node.exe" -> lista todos los procesos de node.js activos
//taskkill /pid numpid /f -> mata un proceso por su número de PID

const express = require('express')
const cluster = require('cluster') /* https://nodejs.org/dist/latest-v14.x/docs/api/cluster.html */

const app = express()

const numCPUs = require('os').cpus().length


const isCluster = process.argv[2] === 'CLUSTER' ;

/* --------------------------------------------------------------------------- */
/* MASTER */
if(cluster.isMaster && isCluster) {
    console.log(`Cantidad de procesadores: ${numCPUs}`)
    console.log(`PID MASTER ${process.pid}`)

    for(let i=0; i<numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
        cluster.fork()
    })
}
/* --------------------------------------------------------------------------- */
/* WORKERS */
else {
    //console.log(parseInt(process.argv[2]))
    const PORT = parseInt(process.argv[2]) || 8080

    app.get('/', (req,res) => {
        res.send(`Servidor express en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
    })

    app.get('/info', (req,res) => {
        res.send(`
            <br>Servidor express en ${PORT} -<br>
            <b>PID ${process.pid}</b><br>
            -${new Date().toLocaleString()}<br>
            Cantidad de procesadores: ${numCPUs}
            `)
    })

    app.listen(PORT, err => {
        if(!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
    })
}
