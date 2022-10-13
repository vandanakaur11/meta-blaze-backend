const dotenv = require("dotenv");
const { env } = require("process");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const PORT = env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${5000}`));
