import Express from "express";
const app = Express();

async function main() {
  app.listen(5000, () => {
    console.log("Listening on port 5000");
  });
}

main().catch((err) => console.error(err));
