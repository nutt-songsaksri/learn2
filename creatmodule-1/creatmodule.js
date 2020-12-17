//ตัวอย่างการสร้างโมดูล แบบที่ 2 และการเรียกใช้ เมื่ออยู่คนละไดเรกทอรี่
var http = require("http");
var mod = require("./mymodule");
http
  .createServer(function (req, res) {
    res.end("Current time is" + mod.myDate());
  })
  .listen(mod.port, mod.hostname);
