const sql = require('mssql')
const sqlConfig = {
  user: 'sa',
  password: 'softsuave#123',
  database: 'tcicms',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

const connection =async() => {
 try {
  // make sure that any items are correctly URL encoded in the connection string
  const conn=await sql.connect(sqlConfig)
  console.log(conn)
  // const result = await sql.query`select * from mytable where id = ${value}`
  // console.dir(result)
 } catch (err) {
  console.log(err)
  // ... error checks
 }
}
connection()
