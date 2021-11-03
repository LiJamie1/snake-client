const setupInput = function (connect) {
  const handleUserInput = function(key) {
    if (key === '\u0003') {process.exit();}
    if (key === 'w') {connect.write('Move: up');}
    if (key === 'a') {connect.write('Move: left');}
    if (key === 'd') {connect.write('Move: right');}
    if (key === 's') {connect.write('Move: down');}
  }
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};

module.exports = setupInput;