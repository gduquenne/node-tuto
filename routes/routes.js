import express from 'express';
import {
	addRoom,
	getRooms,
	findRooms,
	updateRoom,
	deleteRoom,
} from '../controllers/roomController.js';
import { catchErrors } from '../helpers.js';

// Path avec ES module
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const routes = express.Router();

routes.get('/', (req, res) => res.send('Hello World'));

routes.get('/api/rooms', catchErrors(getRooms));
routes.post('/api/rooms', catchErrors(addRoom));
routes.post('/api/rooms/find', catchErrors(findRooms));
routes.patch('/api/rooms/:id', catchErrors(updateRoom));
routes.delete('/api/rooms/:id', catchErrors(deleteRoom));

export default routes;
