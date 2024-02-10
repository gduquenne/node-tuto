import express from 'express';
import url from 'url';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes/routes.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const PORT = process.env.PORT || 3000;
dotenv.config();

const app = express();
app.use(express.json());

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.error(err));

app.use(routes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
