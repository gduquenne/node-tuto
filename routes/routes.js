import express from 'express';
import {
	getTest,
	postTest,
	addRoom,
	getRooms,
	findRooms,
	updateRoom,
	deleteRoom,
} from '../controllers/roomController.js';
import { catchErrors } from '../helpers.js';

const routes = express.Router();

routes.get('/', (req, res) => res.send('Hello World'));

routes.get('/test', getTest);
routes.post('/test', postTest);
routes.post('/room', catchErrors(addRoom));
routes.post('/rooms/find', catchErrors(findRooms));
routes.patch('/room/:id', catchErrors(updateRoom));
routes.delete('/room/:id', catchErrors(deleteRoom));
routes.get('/rooms', catchErrors(getRooms));

export default routes;
