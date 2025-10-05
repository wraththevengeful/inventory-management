# Inventory App Database Schema

This document defines the PostgreSQL schema for the inventory app, including table definitions, relationships, and example inserts.

## Vendors

`CREATE TABLE vendors (
  id TEXT PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT
);`

#### Example insert:
`INSERT INTO vendors (id, name, email, phone)
VALUES ('v001', 'Acme Supplies', 'acme@example.com', '9876543210');`

## Categories

`CREATE TABLE category(
    name TEXT PRIMARY KEY
);`

#### Example Insert:
`INSERT INTO category(name) VALUES ('Dairy');`

## Items

`CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name TEXT,
  mrp NUMERIC(12,2),
  description TEXT,
  quantity INT DEFAULT 0,
  category TEXT,
  vendorid TEXT,
  imageurl TEXT,
  FOREIGN KEY (vendorid) REFERENCES vendors(id),
  FOREIGN KEY (category) REFERENCES category(name)
);`

#### Example insert:
`INSERT INTO items (
  name, mrp, description, quantity, category, vendorid, imageurl
)
VALUES (
  'Milk',
  45.00,
  'Full cream milk',
  10,
  'Dairy',
  'v001',
  'https://static.vecteezy.com/system/resources/thumbnails/027/226/459/small_2x/an-8-bit-retro-styled-pixel-art-illustration-of-dark-blue-milk-carton-free-png.png'
);`

## Admins

`CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  username TEXT,
  password TEXT
);`

#### Example insert:
`INSERT INTO admins (username, password)
VALUES ('wrath', 'supersecret');`

## Logs

`CREATE TABLE logs (
  time TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  operationtype TEXT,
  itemid INT,
  FOREIGN KEY (itemid) REFERENCES items(id)
);`

#### Example insert:
`INSERT INTO logs (operationtype, itemid)
VALUES ('DELETE', 1);`

## Relationships Summary:
- vendors.id → items.vendorid
- items.id → logs.itemid
- admins.username/password → used for protected actions


## Setup Notes:
- Used TIMESTAMPTZ for timezone-safe timestamps.
- Used JSONB for flexible misc fields.
- Used TEXT[] for multi-category tagging.
