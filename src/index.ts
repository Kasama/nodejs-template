import * as express from 'express';
import * as bodeParsa from 'body-parser';

const app = express();

app.listen(3000, 'localhost', () => {
	console.log('Listening...');
});

app.use('/', express.static('public'));
app.use(bodeParsa.json());
app.use(bodeParsa.urlencoded({extended: false}));

function fact(n) {
	if (n <= 2) return n;
	return n * fact(n - 1);
}

app.get('/fact', (req, res) => {
	const number = parseInt(req.query['n']);
	res.send('resultado: ' + fact(number));
});

app.post('/fact', (req, res) => {
	const number = parseInt(req.body['n']);
	res.send('resultado: ' + fact(number));
});
