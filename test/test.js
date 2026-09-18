const app = require("../src/server");

const PORT = 5002;

const server = app.listen(PORT, async () => {
    const response = await fetch(`http://localhost:${PORT}/health`);

    if (response.status === 200) {
        const body = await response.json();

        if (body.status === "ok") {
            console.log("✅ Health check passed");
            server.close();
            process.exit(0);
        }
    }

    console.log("❌ Health check failed");
    server.close();
    process.exit(1);
});