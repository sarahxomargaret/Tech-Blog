const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 5020;

const SequelizeStore = require('connect-session-sequelize')(session.Store);