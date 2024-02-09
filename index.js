import express from 'express';
import path from 'path';
import expressHandlebars from 'express-handlebars';
import url from 'url';
import dotenv from 'dotenv';
dotenv.config();

import { Time } from './routes/index.js';

const PORT = process.env.PORT || 3000;

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

app.engine(
	'handlebars',
	expressHandlebars.engine({
		defaultLayout: 'main',
		// layoutsDir: path.resolve(__src, './views/layouts'),
		// partialsDir: path.resolve(__src, './views/partials'),
	})
);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, './public')));

app.use((req, res, next) => {
	const { method, path } = req;
	console.log(`Method: ${method}, Path: ${path}`);
	next();
});

Time({ app });

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.post('/product', (req, res) => {
	const { name, color } = req.body;
	console.log(`POST /product`);
	res.json({ name, color });
});

app.get('/json', (req, res) => {
	const name = process.env.NAME || 'Anonymous';
	res.json({ message: ['Hello, world!'], name });
});

app.get('/product/:name', (req, res) => {
	const name = req.params.name;
	res.json({ message: ['Hello, world!'], name });
});

app.get('/products', (req, res) => {
	const { couleur, taille } = req.query;
	res.send(`Couleur: ${couleur}, Taille: ${taille}`);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
