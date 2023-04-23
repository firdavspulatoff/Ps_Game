const app = require("./middlewares/app");
const db = require("./configs/db");

const PORT = process.env.PORT || 4444;

db.sync();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
