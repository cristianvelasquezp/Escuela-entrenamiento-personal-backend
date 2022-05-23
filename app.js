const express = require('express');
const workoutRouter = require('./routes/workoutRoutes');

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/workout', workoutRouter);

module.exports = app;
