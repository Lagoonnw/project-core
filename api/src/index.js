const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {connectDb} = require('./helpers/db');
const {port} = require('./configuration');
const iceCreamRoutes = require('./routes/ice-cream');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/products', iceCreamRoutes);

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started api on port ${port}`);
    });
};

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);