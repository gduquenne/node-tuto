import express from 'express';
import path from 'path';
import exphbs from 'express-handlebars';
import url from 'url';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const PORT = process.env.PORT || 5003;

const app = express();

const catchErrors =
	asyncFunction =>
	(...args) =>
		asyncFunction(...args).catch(console.error);

const getAllPokemons = async () =>
	fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
		.then(res => res.json().then(res => res))
		.catch(err => err);

const getPokemon = async (name = 'bulbarsaur') =>
	fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res =>
		res.json().then(res => res)
	);

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine(
	'hbs',
	exphbs.engine({
		defaultLayout: 'main',
		layoutsDir: path.resolve(__dirname, 'views/layouts'),
		partialsDir: path.resolve(__dirname, 'views/partials'),
		viewsDir: path.resolve(__dirname, 'views'),
		extname: '.hbs',
		helpers: {
			uppercase: str => str.toUpperCase(),
			capitalize: str => str[0].toUpperCase() + str.slice(1),
		},
	})
);
app.set('view engine', 'hbs');

app.get('/', async (_, res) => {
	getAllPokemons()
		.then(pokemons => {
			res.status(200).render('home', {
				pokemons: pokemons.results,
			});
		})
		.catch(err => console.log('error: ', err));
});

app.post('/search', (req, res) => {
	const search = req.body['pokemon-name'];
	res.redirect(`/${search}`);
});

app.get('/notFound', (_, res) => {
	res.status(404).render('notFound');
});

app.get('/:name', (req, res) => {
	console.log('req.params.name', req.params.name);
	const name = req.params.name;
	getPokemon(name)
		.then(pokemon => {
			console.log(pokemon);
			if (pokemon) {
				res.status(200).render('about', {
					pokemon,
				});
			} else {
				res.redirect('/notFound');
			}
		})
		.catch(() => res.redirect('/notFound'));
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
