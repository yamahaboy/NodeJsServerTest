const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Server request");
  console.log(req.url, req.method);

  res.setHeader("Content-type", "aplication/json");
  // res.write('<h1>Hello World!</h1>')
  const data = JSON.stringify([
    { name: "Tom", age: 30 },
    { name: "John", age: 28 },
  ]);
  res.end(data);
});

server.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
