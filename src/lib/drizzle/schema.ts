import {
  pgTable,
  serial,
  integer,
  timestamp,
  uniqueIndex,
  varchar,
  uuid
} from 'drizzle-orm/pg-core';

export const cartTable = pgTable('cart', {
    id: serial('id').primaryKey(),
    user_id: uuid('user_id').notNull().unique(),
    product_id: varchar('product_id', {
        length: 255,
    }).notNull(),
    quantity: integer('quantity').notNull()
})