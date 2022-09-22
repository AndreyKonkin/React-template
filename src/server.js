import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import morgan from 'morgan';
import Layout from './components/Layout';

const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  const initState = {};
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.listen(PORT, () => console.log(`Server start ${PORT}`));
