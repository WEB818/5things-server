module.exports = {
  PORT: process.env.PORT || 8080,
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_URL:
    process.env.DB_URL || "postgresql://journal_admin@localhost/journalthings",
  JWT_SECRET: process.env.JWT_SECRET || "my-secret",
  JWT_EXPIRY: process.env.JWT_EXPIRY || "12h",
};
