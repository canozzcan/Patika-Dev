const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "<h1>Index Page</h1>";
  ctx.status = 200;
});
router.get("/about", (ctx) => {
  ctx.body = "<h1>About Page</h1>";
  ctx.status = 200;
});
router.get("/contact", (ctx) => {
  ctx.body = "<h1>Contact Page</h1>";
  ctx.status = 200;
});
app.use(router.routes());
const port = 3000;

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});