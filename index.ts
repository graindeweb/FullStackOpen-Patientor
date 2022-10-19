import express from "express";

const app = express();

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express server is listening on ${PORT}`);
});
