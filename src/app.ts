import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
import todosRoutes from './routes/todos.js';


app.use('/todoapi',todosRoutes)

app.listen(3000,()=> console.log(`Server is running successfully`))