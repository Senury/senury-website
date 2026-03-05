-- Senury Appointments Database Schema
-- Run this in Vercel Postgres / Neon SQL Editor after creating your database

CREATE TABLE IF NOT EXISTS appointments (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  time VARCHAR(5) NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  notary_name VARCHAR(255) NOT NULL,
  position VARCHAR(255),
  message TEXT,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Prevent double booking (only for non-cancelled appointments)
CREATE UNIQUE INDEX IF NOT EXISTS idx_unique_active_slot
  ON appointments(date, time)
  WHERE status != 'cancelled';

CREATE INDEX IF NOT EXISTS idx_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_email ON appointments(email);
CREATE INDEX IF NOT EXISTS idx_created_at ON appointments(created_at DESC);
