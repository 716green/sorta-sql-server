import {
  ConnectionOptions,
  Connection,
  createConnection,
  getConnection,
} from "typeorm";
import "reflect-metadata";

// Will be true on deployed functions
const { NODE_ENV, PG_USERNAME, PG_PASSWORD, PG_HOST, PG_PORT, PG_DATABASE } =
  process.env;
export const prod = NODE_ENV === "production";

export const config: ConnectionOptions = {
  name: "sorta-sql",
  type: "postgres",
  host: PG_HOST,
  port: parseInt(PG_PORT as string) || 5432,
  username: PG_USERNAME,
  password: PG_PASSWORD,
  database: PG_DATABASE,
  synchronize: true,
  logging: false,
  entities: ["./entity/**/*.ts"],

  //? Production
  ...(prod && {
    database: "production",
    logging: false,
    synchronize: true,
  }),
};

export const connect = async () => {
  let connection: Connection;

  try {
    connection = getConnection(config.name);
    console.log(connection);
  } catch (err) {
    connection = await createConnection(config);
  }

  return connection;
};
