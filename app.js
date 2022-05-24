const express = require('express');
const cors = require('cors');
const workoutRouter = require('./routes/workoutRoutes');
const categoryRouter = require('./routes/categoryRoutes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/workout', workoutRouter);
app.use('/api/v1/category', categoryRouter);

module.exports = app;
