import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "securelandx",     // ✅ NEW DB NAME
  "root",
  "root",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

export default sequelize;
