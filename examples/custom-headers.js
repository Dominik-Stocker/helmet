const express = require("express");
const helmet = require("helmet");
const app = express();

// Example: custom CSP with nonce-based script loading
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'nonce-abc123'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
    crossOriginEmbedderPolicy: false,
  })
);

app.get("/", (req, res) => {
  res.send("<h1>Secured with Helmet</h1>");
});

app.listen(3000);
