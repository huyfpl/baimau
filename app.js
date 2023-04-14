const express = require('express');
const { engine } = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const database = require('./database/database');
const router = require('./routes/routes');
var hbs = require('hbs');
var path = require('path');
const app = express();
// api
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);




app.use(express.static('public'));
app.use(express.json());
// lấy request từ form
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// đọc tất cả file như thư mục layout main
app.engine('hbs', engine({
    extname: '.hbs',
  }));
// kết nối database
mongoose.connect(database.database, { useNewUrlParser: true, useUnifiedTopology: true });

// đọc file hbs 
app.set('view engine', 'hbs');
app.set("views", "./views");
// ảnh 
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const str = file.originalname;
        const parts = str.split(".");
        let doandau = parts[0];
        let doansau = parts[1];

        cb(null, doandau + '-' + Date.now() + '.' + doansau)
    }
})
var upload = multer({ storage: storage })
app.use(upload.single('fileanhdaidien'));
// đọc file css
app.use(express.static(path.join(__dirname, 'uploads')));

// Use the router middleware
app.use(router);

// Start the server
app.listen(3000, () => {
    console.log('Đã kết nối', 3000);
});
