import '@/lib/drizzle/envConfig';
import { defineConfig } from 'drizzle-kit';
 
export default defineConfig({
  schema: './drizzle/schema.ts',
  dialect: "postgresql",
//   driver: 'pg',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,  //instead on connectionString key as in nextjs docs
  },
});