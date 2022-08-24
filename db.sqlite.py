import sqlite3

db = sqlite3.connect('db.sqlite')

db.execute('''create table IF NOT EXISTS cart_items (
  item_id integer PRIMARY key,
  quantity integer not null
);''')

cursor = db.cursor()
cursor.execute(''' insert into cart_items (item_id, quantity)
VALUES(1, 2)
''')

cursor.execute(''' insert into cart_items (item_id, quantity)
VALUES(3, 3);
''')

cursor.execute(''' insert into cart_items (item_id, quantity)
VALUES(18,1);
''')


db.commit()
db.close()