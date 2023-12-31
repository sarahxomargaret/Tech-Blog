const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 5020;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: true,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: techblog
    }),
  };
  
  app.use(session(sess));
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  
  app.use(routes);
  
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });