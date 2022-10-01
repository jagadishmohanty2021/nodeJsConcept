const sql = require('mssql')
const sqlConfig = {
  user: 'sa',
  password: 'softsuave#123',
  database: 'SEMPRACOM_DBE_Subcontracting',
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
  console.log("Server Connected....")
  qdata()
 } catch (err) {
  console.log(err)
  // ... error checks
 }
}
const qdata=async()=>{
    try{
        const data = await sql.query('select * from demoTable')
    console.log(data)
}catch(err){
    console.log(err)
}
}
connection()
