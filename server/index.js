const express = require('express')
const app = express()
//跨域cors
//json 解决进来的数据
app.use(require('cors')())
app.use(express.json())
require('./routes/admin')(app)
require('./plugins/db')(app)
app.listen(3000,() =>{
    console.log('3000');
})