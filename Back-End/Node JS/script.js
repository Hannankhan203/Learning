// console.log("Hello World");

const http = require("http");
const fs = require("fs");
const path = require("path");
const filePath = path.join(process.cwd(), "text.txt")
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  } else if (req.url === "/form") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
            <form action='/submit' method='POST'>
                <input name='data' type='text' placeholder='Enter any text' />
                <button type='submit'>Submit</button>
            </form>`);
    res.end();
  } else if (req.url === "/submit") {
    let data = "";
    req.on("data", (chunks) => {
      data += chunks;
    });
    req.on("end", () => {
      fs.readFile(filePath, "utf-8", (_, fileData) => {
        const newData = fileData + "\n" + data;
        fs.writeFile(filePath, newData, (error) => {
        if(!error) {
          console.log("Data", data);
          res.write("Data submitted successfully");
          res.end();
        }
      })
      })
    });
  } else {
    res.write("Page Not Found");
    res.end();
  }
});
server.listen("3000");
console.log("Server has been started");
