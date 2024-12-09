import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const donations = sqliteTable('donations', {
  id: text('id').primaryKey(),
  amount: real('amount').notNull(),
  donorName: text('donor_name'),
  donorEmail: text('donor_email'),
  message: text('message'),
  causeId: text('cause_id').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(Date.now()),
});

export const causes = sqliteTable('causes', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  goal: real('goal').notNull(),
  raised: real('raised').notNull().default(0),
  image: text('image').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(Date.now()),
});

export const subscribers = sqliteTable('subscribers', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(Date.now()),
});