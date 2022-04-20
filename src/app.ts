import express from 'express';
import helmet from 'helmet';
import chalk from 'chalk';

import Routes from './routes';

import loaders from './loaders';
import config from './config';

config();
loaders();

const app = express();

app.use(express.json());
app.use(helmet());

app.use(Routes);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(chalk.blue.bold(`Server is Up on PORT: ${PORT}`));
});
