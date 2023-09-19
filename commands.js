const fs = require("fs");
let commands = {
  pwd: function () {
    let directory = [process.argv[1]];
    return directory;
  },
  date: function () {
    fecha = new Date();
    let date = [fecha.toString()];
    return date;
  },
  ls: function () {
    return fs.readdirSync(".", function (err, files) {
      if (err) throw err;
      let array = [];
      files.forEach(function (file) {
        array.push(file.toString());
      });
      return array;
    });
  },
  echo: function (string) {
    let arr = [string];
    return arr;
  },
  cat: function (string) {
    let archivos = string.split(" ");
    let array = [];
    let that = this;
    archivos.forEach(function (archivo) {
      directory = that.pwd().toString().split("/");
      directory.pop();
      directory = `${directory.join("/")}/${archivo}`;
      array.push(
        fs.readFileSync(directory, "utf8", (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          return data.toString();
        })
      );
    });
    return array;
  },
  head: function (string) {
    let archivo = this.cat(string)[0].split("\n");
    let arreglo = [];
    for (let i = 0; i < 5; i++) {
      if (archivo[i]) arreglo.push(archivo[i]);
    }
    let str = arreglo.join("\n");
    let arr = [str];
    return arr;
  },
  tail: function (string) {
    let archivo = this.cat(string)[0].split("\n");
    let arreglo = [];
    for (let i = archivo.length - 1; i > archivo.length - 7; i--) {
      if (archivo[i]) arreglo.push(archivo[i]);
    }
    let str = arreglo.join("\n");
    let arr = [str];
    return arr;
  },
};
  

module.exports = commands;