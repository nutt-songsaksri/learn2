// // 1-1 ตัวอย่างการสร้าง Server อย่างง่าย
// var http = require("http");
// http
//   .createServer(function (
//     req,
//     res //เป็นการเรียกฟังก์ชั่นแล้วทำเลย เรียกว่า Annonymousfunction ไม่มีชื่อ+เรียกใช้เลยทันที
//   ) {
//     res.writeHead(200, {
//       "Content-Type": "text/plain", // type : text ชนิด plain
//     });
//     res.end("Hello World!");
//   })
//   .listen(8080);

//ไม่เกี่ยว สตรองแค่บอกว่าการเรียกฟังก์ชั่นแบบนี้จะไปเรียกน้องปีกกาได้ ก่อนหรือหลังก้ได้
// xx();
// function xx(x, y) {}
// xx();

// 1-2 ตัวอย่างการสร้าง Server อย่างง่าย และมีการแจ้งเตือนเมื่อ server พร้อมทำงาน
// var http = require("http"); //http เป็น Module ตัวนึงที่ทำหน้าที่คุยผ่านโปรโตคอล
// var ipaddress = "0.0.0.0";
// var app = http.createServer(function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/html" });

//   res.write("<h5>Hello"); //h5 คือ ขนาด Heading 5
//   res.end("World!</h5>"); // /h5 ปิด
// });
// app.listen(3000, ipaddress, function () {
//   console.log("Node server started on" + ipaddress + ":" + app.address().port);
// });

//1-3 ตัวอย่างการสร้าง Server อย่างง่าย แบบ Dynamic URLs
// var http = require("http");
// var app = http.createServer(function (req, res) {
//   if (req.method == "GET") {
//     if (req.url == "/") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end("<h4>Home page</h4>");
//     } else if (req.url == "/hello") {
//       res.writeHead(200, {
//         "Content-Type": "text/html",
//       });
//       res.end("Hello World!");
//     } else {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       res.end("404 Not found.");
//     }
//   } else {
//     res.writeHead(404, { Content: "text/html" });
//     res.end("404 Not found");
//   }
// });
// app.listen(3000, "0.0.0.0"); //ใส่ 0.0.0.0 รับทุกรีเควสที่ผ่านเข้ามาบน window เท่านั้น = เครื่องอื่นที่อยู่บน Local Network เดียวกันจะเปิดได้

// 3-1 ตัวอย่างการใช้ url กับ http
var http = require("http");
var url = require("url");
http
  .createServer(function (req, res) {
    var x = url.parse(req.url, true);
    if (x.pathname == "/") {
      console.log("bbb");
      if (x.search != null) {
        console.log(x.search);
        res.end(JSON.stringify(x.query));
      } else {
        res.end("No query");
        console.log("ddd");
      }
    } else {
      res.statusCode = 404;
      res.end("404 Not found.");
    }
  })
  .listen(3000);
