
CREATE TABLE IF NOT EXISTS customer (
  email text PRIMARY key,
  password text not NULL
);

create table IF NOT EXISTS orders (
  order_id integer PRIMARY key AUTOINCREMENT,
  order_date_time text not NULL,
  table_no text not NULL,
  dine_in_or_takeaway text not NULL,
  email text not null
);

create table IF NOT EXISTS food_ordered (
  food_id integer not NULL,
  order_id integer not NULL,
  quantity integer not NULL,
  primary key (food_id, order_id)
);

create table IF NOT EXISTS food (
  food_id integer primary key AUTOINCREMENT,
  name text not NULL,
  description text not NULL,
  price real not NULL,
  category text not NULL,
  image_file_location text not null /* relative path */
);

insert or ignore into food values (1, 'ice cream', 'tasty', 1.1, 'desert', '');
INSERT or ignore INTO customer VALUES ('abc@gmail.com', 'abc');
INSERT or ignore into orders values (1, 'date', '1', 'dine in', 'email');
insert or ignore into food_ordered values (1, 1, 2);