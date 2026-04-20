require("dotenv").config({ path: "./.env" });
const app = require("./app");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 6000;

console.log("MONGO_URI:", process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
