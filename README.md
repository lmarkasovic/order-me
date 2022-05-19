[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)

# my-project
Sample dish ordering app.
Every customer can order dishes for one or more linked customers. Each customer can add allergens and be notified which dishes have specified allergens.
Admin can define menu (offers) and eligible dates, add and delete dishes, dish allergens, tags...

This is a [Moleculer](https://moleculer.services/)-based microservices project. Generated with the [Moleculer CLI](https://moleculer.services/docs/0.14/moleculer-cli.html).

## Usage
Start the project with `npm run dev` command. 
After starting, open the http://localhost:3000/ URL in your browser. 
On the welcome page you can test the generated services via API Gateway and check the nodes & services.

In the terminal, try the following commands:
- `nodes` - List all connected nodes.
- `actions` - List all registered service actions.
- `call dishes.getDishes` - List the dishes.


## Services
- **APIGateway**: API Gateway services
- **Auth**: Sample service with `hello` and `welcome` actions.
- **products**: Sample DB service. To use with MongoDB, set `MONGO_URI` environment variables and install MongoDB adapter with `npm i moleculer-db-adapter-mongo`.

## Mixins
- **db.mixin**: Database access mixin for services. Based on [moleculer-db](https://github.com/moleculerjs/moleculer-db#readme)


## Useful links
* Moleculer website: https://moleculer.services/
* Moleculer Documentation: https://moleculer.services/docs/0.14/

## NPM scripts
- `npm run dev`: Start development mode (load all services locally with hot-reload & REPL)
- `npm run start`: Start production mode (set `SERVICES` env variable to load certain services)
- `npm run cli`: Start a CLI and connect to production. Don't forget to set production namespace with `--ns` argument in script
- `npm run lint`: Run ESLint