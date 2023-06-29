import express from 'express'
import cors from 'cors'

// tomar un puerto

//crear una instancia express
const app = express();
//crear una variable
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=> {
    console.log('Estoy en el puerto ' + app.get('port'))
})
//middleware : funciones que se ejecutan antes de las rutas
app.use(cors()); // permite conexiones remotas
app.use(express.json()); // puedo tomar del objeto request datos en formato json


//rutas

