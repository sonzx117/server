import authRouter from "./auth";
import insertRouter from "./insert";
import categoriesRouter from "./category";
import postRouter from "./post";
import pricesRouter from "./price";
import areasRouter from "./area";

const initRoutes = (app) => {
  app.use(`/api/v1/auth`, authRouter);
  app.use(`/api/v1/insert`, insertRouter);
  app.use(`/api/v1/category`, categoriesRouter);
  app.use(`/api/v1/post`, postRouter);
  app.use(`/api/v1/price`, pricesRouter);
  app.use(`/api/v1/area`, areasRouter);

  return app.use("/", (req, res) => {
    res.send("server on ...");
  });
};

export default initRoutes;
