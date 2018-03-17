const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
// const cors = require("cors");
const logger = require("morgan");
const session = require("express-session");
const cookieParser = require('cookie-parser');


const port = process.env.PORT || 8000;

const sessionConfig = {
    saveUninitialized: true,
    secret: 'sessionSecret789nz90',
    resave: false,
    name:'session',
    rolling: true,
    cookie:{
        secure: false,
        httpOnly: false,
        maxAge: 24 * 60 * 60 * 1000,
    }
}

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser('tsdgn459wfn3823'));
app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, "client/dist")))

require('./server/config/database');
app.use(require('./server/config/routes/auth.routes'));
app.use(require('./server/config/routes/survey.routes'));
app.use(require('./server/config/routes/catch-all.routes'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));

