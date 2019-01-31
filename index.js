// import app from "./server";
const app = require("./server");

app.set("port", process.env.PORT || 3003);

const server = app.listen(app.get("port"), () => {
  console.log(`Server running and listening on port ${server.address().port}`);
});
