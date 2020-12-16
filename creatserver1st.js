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
var http = require("http"); //http เป็น Module ตัวนึงที่ทำหน้าที่คุยผ่านโปรโตคอล
var ipaddress = "0.0.0.0";
var app = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write("<h5>Hello"); //h5 คือ ขนาด Heading 5
  res.end("World!</h5>"); // /h5 ปิด
});
app.listen(3000, ipaddress, function () {
  console.log("Node server started on" + ipaddress + ":" + app.address().port);
});
