module.exports = {
  development: {
    username: "root",
    password: null,
    database: "grahasehatapp",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      charset: "utf8mb4",
      collate: "utf8mb4_unicode_ci",
      timestamps: false,
    },
    logging: false,
  },
  test: {
    username: "root",
    password: null,
    database: "grahasehatapp",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      charset: "utf8mb4",
      collate: "utf8mb4_unicode_ci",
      timestamps: false,
    },
    logging: false,
  },
  production: {
    username: "root",
    password: null,
    database: "grahasehatapp",
    host: "127.0.0.1",
    // host: ":8080",
    dialect: "mysql",
    define: {
      charset: "utf8mb4",
      collate: "utf8mb4_unicode_ci",
      timestamps: false,
    },
    logging: false,
  },
};
