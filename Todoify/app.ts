// const express = require('express');
// import express = require('express')

import express from 'express'; //like react

import todoRoutes from './routes/todos';

const app = express();

app.use(express.json())
app.use(todoRoutes);

app.listen(3000);

