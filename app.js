const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "ok",
    data: ["Data 1", "Data 2"]
  });
});

app.listen(PORT, () => console.log(`Server running at PORT:${PORT}`));
