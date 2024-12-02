const http = require("node:http");

const posts = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    content:
      "Closures are one of the most powerful features of JavaScript, allowing functions to retain access to their scope even when executed outside their original context.",
    author: "John Doe",
    date: "2024-12-02",
  },
  {
    id: 2,
    title: "A Guide to Responsive Web Design",
    content:
      "Responsive web design ensures that your website looks great on all devices, from desktops to mobile phones, by using flexible layouts and media queries.",
    author: "Jane Smith",
    date: "2024-11-30",
  },
  {
    id: 3,
    title: "Introduction to React Hooks",
    content:
      "React Hooks provide a way to use state and lifecycle features in functional components, making your code more concise and easier to manage.",
    author: "Emily Johnson",
    date: "2024-12-01",
  },
  {
    id: 4,
    title: "The Basics of Node.js",
    content:
      "Node.js is a runtime environment for executing JavaScript on the server side, enabling you to build fast and scalable network applications.",
    author: "Michael Brown",
    date: "2024-12-01",
  },
  {
    id: 5,
    title: "How to Use Git Effectively",
    content:
      "Git is a powerful version control system. Learn the essential commands and workflows to manage your codebase efficiently.",
    author: "Sarah Wilson",
    date: "2024-12-02",
  },
];

const server = http.createServer((req, res) => {
  if (req?.url === "/home" && req?.method === "GET") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end(`
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Cards</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f9;
      color: #333;
      padding: 20px;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .card {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      width: 300px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }

    .name {
      font-size: 1.5em;
      color: #333;
      margin-bottom: 10px;
    }

    .email {
      font-size: 1em;
      color: #555;
      margin-bottom: 5px;
    }

    .position {
      font-size: 0.9em;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <h2 class="name">John Doe</h2>
      <p class="email">johndoe@example.com</p>
      <p class="position">Software Engineer</p>
    </div>
    <div class="card">
      <h2 class="name">Jane Smith</h2>
      <p class="email">janesmith@example.com</p>
      <p class="position">Product Manager</p>
    </div>
    <div class="card">
      <h2 class="name">Michael Brown</h2>
      <p class="email">michaelbrown@example.com</p>
      <p class="position">UI/UX Designer</p>
    </div>
    <div class="card">
      <h2 class="name">Emily Johnson</h2>
      <p class="email">emilyjohnson@example.com</p>
      <p class="position">Marketing Specialist</p>
    </div>
    <div class="card">
      <h2 class="name">Sarah Wilson</h2>
      <p class="email">sarahwilson@example.com</p>
      <p class="position">Data Analyst</p>
    </div>
  </div>
</body>
</html>

        `);
  } else if (req?.url === "/posts" && req?.method === "GET") {
    // res.writeHead(200, {
    //   "Content-type": "application/json",
    //   email: "galib@gmail.com",
    // });
    res.setHeader("Content-type","application/json") ;
    res.statusCode = 200 ;
    res.end(JSON.stringify(posts));
  } else {
    res.end("Not found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("server is listening on port 5000");
});
