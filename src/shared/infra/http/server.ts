import { createConnection } from '../typeorm';
import 'dotenv/config';
import { app } from './app';

createConnection();

app.listen(3333, () => console.log('Server is running!'));
