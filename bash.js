const commands = require("./commands");
process.stdout.write("prompt > ");
process.stdin.on("data", function (data) {
  let input = data.toString().slice(0, -1).split(" ");
  let cmd = input.shift();
  let params = input.join(" ");
  if (commands[cmd]) {
    let array = commands[cmd](params);
    array.forEach(function (string) {
      process.stdout.write(`${string}\n`);
    });
    process.stdout.write("\nprompt > ");
  }
});

