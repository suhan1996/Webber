/**
 * Created by Suhan on 07/06/2017.
 */
/**
 * Created by Suhan on 25/03/2017.
 */
var mongoose = require('mongoose');
// my schema goes here!
const Boom = new mongoose.Schema({
    foo: String,
});
const Bonus = new mongoose.Schema({
    user: String,
    data: String
});

//URLSlugs('<user>');
// Link.plugin(URLSlugs('title'));
mongoose.model('Boom', Boom);
mongoose.model('Bonus', Bonus);
// mongoose.model('Link', Link);
mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://localhost/funds');

mongoose.connect('mongodb://suhan1996:112496@ds241895.mlab.com:41895/time');
//mongoose.connect('mongodb://suhan1996:112496@ds115124.mlab.com:15124/heroku_dh8g5j5z');
