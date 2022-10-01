let Client = require('ssh2-sftp-client');
let sftp = new Client();

sftp.connect({
  host: 'ftp://ftp.dlptest.com/',
  username: 'dlpuser',
  password: 'rNrKYTX9g7z3RgJRmxWuGHbeu'
}).then(() => {
  return sftp.list('/pathname');
}).then(data => {
  console.log(data, 'the data info');
}).catch(err => {
  console.log(err, 'catch error');
});