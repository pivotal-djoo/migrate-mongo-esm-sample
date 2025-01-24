# Migrate-Mongo ESM Issue Using Node 22.13

This sample project demonstrates an error with [migrate-mongo](https://www.npmjs.com/package/migrate-mongo) when using Node 22.13 with ESM.

Error occurs when attempting to apply migrations via `migrate-mongo up` command.

![error using node 22.13](./images/migrate-mongo-esm-node-22.13.png)

Using node version 22.10, migration works as expected.

![working using node 22.10](./images/migrate-mongo-esm-node-22.10.png)
