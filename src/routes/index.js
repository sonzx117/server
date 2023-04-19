import authRouter from "./auth";
import insertRouter from "./insert";
import categoriesRouter from "./category";
import postRouter from "./post";
import pricesRouter from "./price";
import areasRouter from "./area";
import provincesRouter from "./province";
import userRouter from "./user";

const initRoutes = (app) => {
  app.use(`/api/v1/auth`, authRouter);
  app.use(`/api/v1/insert`, insertRouter);
  app.use(`/api/v1/category`, categoriesRouter);
  app.use(`/api/v1/post`, postRouter);
  app.use(`/api/v1/price`, pricesRouter);
  app.use(`/api/v1/area`, areasRouter);
  app.use(`/api/v1/province`, provincesRouter);
  app.use(`/api/v1/user`, userRouter);
  return app.use("/", (req, res) => {
    res.send("server on ...");
  });
};

export default initRoutes;
