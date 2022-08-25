import sqlite3

db = sqlite3.connect('db.sqlite')

db.execute('''create table IF NOT EXISTS cart_items (
  user_id INTEGER NOT NULL,
  item_id integer NOT NULL,
  quantity integer not null
);''')

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


db.commit()
db.close()