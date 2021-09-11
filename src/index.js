const path=require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs  = require('express-handlebars');
const route = require('./routes');
const db=require('./config/db');
const methodOverride = require('method-override')

//Connect to DB
db.connect();

const app = express()
const port = 3000

app.use(morgan('combined'))

app.engine(
    'handlebars',
    exphbs({
        helpers: {
            sum:(a,b)=>a+b
        }
    })
);
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'/resources/views'))
app.use(express.static(path.join(__dirname, 'public'))); // set up đường dẫn file tĩnh

app.use(express.urlencoded({extended:true})); // Middleware gửi dưới dạng form
app.use(express.json()); // gửi từ code js

app.use(methodOverride('_method'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})