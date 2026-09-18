const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from CI/CD Lab!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});
const PORT = process.env.PORT || 5001;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;