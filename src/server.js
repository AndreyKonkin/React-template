import express from 'express';
// import React from 'react';
import morgan from 'morgan';
// import Layout from './components/Layout';
import indexRouter from './routers/indexRouter';
import studentRouter from './routers/studentRouter';

const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.use('/', indexRouter);
app.use('/students', studentRouter);

app.listen(PORT, () => console.log(`Запустился ${PORT}`));
