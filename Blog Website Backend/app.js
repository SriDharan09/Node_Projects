const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected Successfully'))
.catch((err) => { console.error(err); });

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

//routes
app.use(require('./routes/index'));
app.use(require('./routes/compose'));
app.use(require('./routes/blog'));


app.listen(port, () => {
    console.log(`listening on ${port}`);
});