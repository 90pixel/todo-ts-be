import mongoose from 'mongoose';
import chalk from 'chalk';

mongoose.connection.on('open', () => {
  console.log(chalk.green.bold('MongoDB Connection Successfully!'));
});

const loadDb = async () => {
  mongoose.connect(process.env.MONGODB_URL);
};

export default loadDb;
