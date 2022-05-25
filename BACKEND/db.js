const mysql= require('mysql');
const db=mysql.createConnection({
    host: '127.0.0.1',
    database: 'test',
    user: 'root',
    password:'',
    port: '3306'

}) 
db.connect(()=>{
    console.log('database connected ' )
})
module.exports = db;