const express = require("express");
const helmet = require("helmet");
const app = express();

app.use(
  helmet({
    permissionsPolicy: {
      features: {
        camera: ["'none'"],
        microphone: ["'none'"],
        geolocation: ["'self'"],
        fullscreen: ["'self'"],
      },
    },
  })
);

app.listen(3000);
