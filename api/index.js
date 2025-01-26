import { createServer, Model } from 'json-server';
import users from './users.json';
import products from './products.json';

const server = createServer();
server.db = {
  users: users.users,
  products: products.products,
};

server.use(jsonServer.router(server.db));
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});