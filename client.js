const net = require('net')
const server = require('./constants')
const connect = function () {
  const conn = net.createConnection({
    host: server.IP,
    port: server.PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('successfully connected to server')
    conn.write('Name: JAM')
  })

  conn.on('data', (data) => {
    console.log('Server says', data)
  })
  
  return conn
};

module.exports = connect;