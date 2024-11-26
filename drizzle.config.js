import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:'postgresql://karkamilodb_owner:lx5Ii6esOyoj@ep-gentle-cell-a5luaxt7.us-east-2.aws.neon.tech/car-marketplace?sslmode=require',
  }
});
