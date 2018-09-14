const express = require('express')
const app = express()
const jwt = require('./middleware/jwt')
const router = require('./routes/api');
const bodyParser = require('body-parser');


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(jwt.middleware.unless({ path: ['/login', '/', '/register'] }));

app.use(router);

app.use(function (req, res, next) {
    res.status(404).jsonp({ "error": "404" });
})
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).jsonp({ "error": "401" });
    }
});
app.listen(process.env.PORT || 8000, () => console.log(`App listening on port ${process.env.PORT || 8000}!`))