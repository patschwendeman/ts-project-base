import Express from "express";
const app = Express();

async function main() {
  app.listen(6000, () => {
    console.log("Listening on port 6000");
  });
}

main().catch((err) => console.error(err));
