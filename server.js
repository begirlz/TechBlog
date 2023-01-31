const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');

const helpers = require('./utils/helpers');

// sequelize store using the express-session
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// set up Express
const app = express();
const PORT = process.env.PORT || 3001;

// custom helpers
const hbs = exphbs.create({ helpers });

// set up Sessions with the sequelize store
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// add express-session and store as Express.js middleware
app.use(session(sess));

// set up Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});
