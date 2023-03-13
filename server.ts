const express = require('express');
const path = require('path');

const app = express();

const indexRouter = require('./routes/index');

app.set('port', process.env.PORT || 8088);

// EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);


app.listen(app.set('port'), () => {
	console.log('server listen!!');
});