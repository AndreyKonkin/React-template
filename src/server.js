import express from 'express';
import morgan from 'morgan';
import path from 'path';
import customRender from './CustomRender/customRender';
import indexRouter from './routes/index';
// import apiRouter from './routes/api';
// import authRouter from './routes/auth';
import { localsMiddle } from './middlewares';

require('dotenv').config();

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('jsx', customRender);
app.set('views', path.join(__dirname, 'components'));
app.set('view engine', 'jsx');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});

app.use(session({
  name: 'sid',
  store: new FileStore(),
  secret: 'erefqsadsdad',
  saveUninitialized: false,
}));

app.use(localsMiddle);

app.use('/', indexRouter);
// app.use('/api/', apiRouter);
// app.use('/auth/', authRouter);

app.listen(PORT, () => {
  console.log('Server start on', PORT);
});
