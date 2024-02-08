import yargs from 'yargs';
import chalk from 'chalk';
import clipboardy from 'clipboardy';
import { baseUrl } from './baseUrl.js';
import { appendFileSync, readFileSync } from 'fs';
import { get as getEmoji } from 'node-emoji';
import validator from 'validator';

yargs.command(
	'add',
	'Add a new note',
	{
		page: {
			describe: 'Add page',
			demand: true,
			alias: 'p',
			type: 'string',
		},
		source: {
			describe: 'Add source',
			demand: true,
			alias: 's',
			type: 'string',
		},
		medium: {
			describe: 'Add medium',
			demand: true,
			alias: 'm',
			type: 'string',
		},
		campaign: {
			describe: 'Add campaign',
			demand: true,
			alias: 'c',
			type: 'string',
		},
	},
	argv => {
		const { page, source, medium, campaign } = argv;
		const link = `${baseUrl}${page}?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`;

		if (!validator.isURL(link)) {
			console.log(
				chalk.red.bold(
					`${link}\nIncorrect Link!\nPlease check the parameters and try again.`
				)
			);
			return;
		}

		appendFileSync('notes.txt', `${link}\n`);
		clipboardy.writeSync(link);

		console.log(chalk.green.bold(link));
	}
).argv;

yargs.command('list', 'List all notes', () => {
	const links = readFileSync('notes.txt', 'utf8').toString().split('\n');
	links.forEach(link => {
		console.log(chalk.blue.bold(getEmoji('star') + ' ' + link));
	});
}).argv;
