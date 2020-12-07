const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
//const dbConnection = require('connect-mongo')(session);
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 8000;
const routes = require('./routes')
//should port be 3001...?
//below...Route requires:
const user = require('./routes/user');


//middleware
app.use(morgan('dev'));
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json());
app.use(cors());

const uri = process.env.MONGODB_URI;
mongoose
    .connect(uri)
    .then(
        () => {
            /**ready to use. the mongoose.connect() promise resolves to be undefined */
            console.log('connected to mongo');

            //sessions
            app.use(
                session({
                    secret: 'fraggle-rock', //pick a random string to make the hash that is generated source
                    store: new MongoStore({ mongooseConnection: mongoose.connection }),
                    resave: false, //required
                    saveUninitialized: false, //required 
                })
            );
        
        //passport
        app.use(passport.initialize());
        app.use(passport.session()); //calls the deserializeUser

        //routes
        app.use(routes);

        if (process.env.NODE_ENV === 'production') {
            app.use(express.static(path.join(__dirname, 'client/build')));
            //
            app.get('*', (req, res) => {
                res.sendfile(path.join((__dirname = 'client/build/index.html')));
            });
        }
        
        //build mode
        app.get('*', (req, res) => {
            res.sendfile()
        })

        //app.post('/api/user', (req, res) ==> {
        //    console.log('THE ROUTE IS HIT')
        //});

        //starting server
        app.listen(PORT, () => {
            console.log('app listening on PORT: ${PORT}');
        });
    },
    (err) => {
        /**handle initial connection error */
        console.log('error connecting to mongo: ');
        console.log(err);
    }
)
.catch((err) => console.log({ err }));