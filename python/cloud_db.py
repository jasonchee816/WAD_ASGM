import sqlite3
db = sqlite3.connect('LMEO.sqlite')

db.execute('''create table IF NOT EXISTS cart_items (
  user_id INTEGER NOT NULL,
  item_id integer NOT NULL,
  quantity integer not null
);''')


db.execute('DROP TABLE IF EXISTS members')
db.execute('DROP TABLE IF EXISTS orders')
db.execute('DROP TABLE IF EXISTS order_item')

db.execute('''CREATE TABLE members(
    user_id integer PRIMARY KEY AUTOINCREMENT,
    email text UNIQUE NOT NULL,
    password text NOT NULL
)''')

db.execute('''CREATE TABLE orders(
    id integer PRIMARY KEY AUTOINCREMENT, 
    order_datetime timestamp NOT NULL,
    member_id integer NOT NULL,
    total_price real NOT NULL
)''')

db.execute('''CREATE TABLE order_item(
    order_id integer, 
    item_id integer,
    quantity integer, 
    PRIMARY KEY (order_id, item_id)
)''')

cursor = db.cursor()

cursor.execute(''' insert into cart_items (user_id, item_id, quantity)
VALUES(3, 1, 2)
''')

cursor.execute(''' insert into cart_items (user_id, item_id, quantity)
VALUES(3, 3, 3);
''')

cursor.execute(''' insert into cart_items (user_id, item_id, quantity)
VALUES(3, 18,1);
''')


cursor.execute('''
    INSERT INTO members(email,password)
    VALUES('fooyw@ayam.com','asdasd')
''')

cursor.execute('''
    INSERT INTO members(email,password)
    VALUES('lili@koalamail.com','012-7534988')
''')

cursor.execute('''
    INSERT INTO members(email,password)
    VALUES('abc@gmail.com','abcde')
''')

cursor.execute('''
    INSERT INTO orders(order_datetime, member_id, total_price)
    VALUES('2022-01-01', 3, 188.00)
''')

cursor.execute('''
    INSERT INTO orders(order_datetime, member_id, total_price)
    VALUES('2022-03-03', 3, 22.00)
''')

cursor.execute('''
    INSERT INTO orders(order_datetime, member_id, total_price)
    VALUES('2022-06-07', 3, 12.00)
''')

cursor.execute('''
    INSERT INTO order_item(order_id, item_id, quantity) 
    VALUES(1, 6 , 2)
''')

cursor.execute('''
    INSERT INTO order_item(order_id, item_id, quantity) 
    VALUES(1, 9, 3)
''')

cursor.execute('''
    INSERT INTO order_item(order_id, item_id, quantity) 
    VALUES(1, 16, 1)
''')

cursor.execute('''
    INSERT INTO order_item(order_id, item_id, quantity) 
    VALUES(2, 17, 1)
''')

cursor.execute('''
    INSERT INTO order_item(order_id, item_id, quantity) 
    VALUES(3, 19, 1)
''')

db.commit()
db.close()