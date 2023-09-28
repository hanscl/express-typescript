import express, { Express } from 'express';
import cors from 'cors';
import { homeRoute } from './handler/home'

export const app: Express = express();
const PORT = process.env.PORT || 8080;

const corsOptions: cors.CorsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

app.get('/', homeRoute);

app.use(function (req, res, next) {
  res.status(404).send({
    status: 404,
    message: 'Not Found',
  });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running on PORT ${PORT}`);
});
