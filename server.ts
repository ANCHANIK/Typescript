import { Request, Response, NextFunction } from 'express';
const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();

// EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response, next: NextFunction ) => {
	res.render('index');
});

app.listen('8088', () => {
	console.log('server listen!!');
});