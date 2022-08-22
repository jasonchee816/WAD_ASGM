
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
  category text not NULL,
  name text not NULL,
  description text not NULL,
  price real not NULL,
  image_file_location text not null /* relative path */
);

INSERT or ignore INTO customer VALUES ('abc@gmail.com', 'abc');
INSERT or ignore into orders values (1, 'date', '1', 'dine in', 'email');
insert or ignore into food_ordered values (1, 1, 2);

INSERT or ignore INTO food 
VALUES(1, "salad", "Radish Green Salad", "Make use of all the wonderful curly, coral lettuce that we had growing in the garden.",
10.80, "../images/radishGreenSalad.png");

INSERT or ignore INTO food
VALUES(2, "salad", "Honey Lime Rainbow Fruit Salad", "Made with beautiful blend of delicious fruits and a simple dressing to compliment it.",
11.80, "../images/radishGreenSalad.png");

INSERT or ignore INTO food
VALUES(3, "salad", "Caesar Salad", "The crowd-pleasing salad of crisp romaine leaves, crunchy croutons, and a little or a lot of anchovy.",
12.80, "../images/caesarSalad.png");

INSERT or ignore INTO food
VALUES(4, "mainCourse", "Chicken Chop", "Juicy Fried Chicken Chop paired with Coleslaw, Fries, and a Sunny-Side Up Egg.",
18.50, "../images/chickenChop.jpg");

INSERT or ignore INTO food
VALUES(5, "mainCourse", "Fish and Chips", "Fried Dory Fish with Crunchy Wedges paired with the Homemade Tartar Sauce.",
19.00, "../images/fishAndChips.jpg");

INSERT or ignore INTO food
VALUES(6, "mainCourse", "Ribeye Steak", "Ribeye Steak with Garlic Butter cooked to perfect Medium Rare and served with Roasted Potato and Green Beans.",
40.00, "../images/ribeyeSteak.jpg");

INSERT or ignore INTO food
VALUES(7, "mainCourse", "Lamb Chop", "Juicy Pan-Seared Lamb Chops with Cipollini Onions.",
37.00, "../images/lambChop.jpg");

INSERT or ignore INTO food
VALUES(8, "pizza", "Hawaiian Supreme", "Pizza with tomato sauce, chicken meat, chicken loaf, pineapples, mozzarella cheese.",
30.00, "../images/hawaiianSupreme.png");

INSERT or ignore INTO food
VALUES(9, "pizza", "Chicken Supreme", "Pizza with tomato sauce, chicken meat, chicken salami, chicken loaf, mushrooms, capsicums, onions, mozzarella cheese, tomatoes.",
30.00, "../images/chickenSupreme.png");

INSERT or ignore INTO food
VALUES(10, "pizza", "Blazing Seafood", "Pizza with spicy sweet sour sauce, tuna, crabsticks, pineapples, capsicums, onions, mozzarella cheese.",
30.00, "../images/blazingSeafood.png");

INSERT or ignore INTO food
VALUES(11, "pizza", "Triple Chicken", "Pizza with thousand island sauce, chicken rolls, chicken meat, chicken salami, mushrooms, tomatoes, onions, mozzarella cheese.",
30.00, "../images/tripleChicken.png");

INSERT or ignore INTO food
VALUES(12, "pasta", "Baked Feta Pasta", "Cherry tomatoes and a whole block of feta are baked until soft and melty, then tossed with garlic, basil and cooked noodles for a beautifully cheesy dish.",
15.00, "../images/bakedFetaPasta.png");

INSERT or ignore INTO food
VALUES(13, "pasta", "Pasta with Garlic and Cheese", "Kind of like a deconstructed pesto, using parsley instead of basil.",
16.70, "../images/pastaGarlicCheese.png");

INSERT or ignore INTO food
VALUES(14, "pasta", "Pasta with Fresh Tomato Sauce", "Romas (aka plum tomatoes) fit the bill, but there are plenty of heirlooms with a similar flesh-to-seed ratio.",
20.15, "../images/pastaTomatoSauce.png");

INSERT or ignore INTO food
VALUES(15, "burger", "Whooper Jr", "A mouth-watering, flame-grilled beef patty topped with fresh tomatoes, crisp lettuce, tangy pickles and crunchy onions, served on a toasted sesame seed bun and flavored with creamy mayo and ketchup.",
18.00, "../images/whooperJr.png");

INSERT or ignore INTO food
VALUES(16, "burger", "Long Cheesy Onion Beef", "Featuring 2 pieces of our signature flame-grilled beef patties topped with Nachos Cheese sauce, mayonnaise, mustard, pickles and fresh onions served between two long sesame seed buns.",
22.00, "../images/cheesyOnionBeef.png");

INSERT or ignore INTO food
VALUES(17, "burger", "Double Cheeseburger", "Make room for our Double Cheeseburger, two signature flame-grilled beef patties topped with a simple layer of melted American cheese, crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.",
26.00, "../images/doubleCheeseburger.png");

INSERT or ignore INTO food 
VALUES(18, "coffeeTea", "Caffe Latte", "Espresso topped with Velvety Smooth Steamed Milk.",
12.00, "../images/latte.png");

INSERT or ignore INTO food 
VALUES(19, "coffeeTea", "Mocha", "An Indulgent Blend of Espresso & Hot Chocolate topped with Velvety Steamed Milk.",
10.00, "../images/mocha.png");

INSERT or ignore INTO food 
VALUES(20, "coffeeTea", "Cappuccino", "Espresso with Smooth Steamed Milk & finished with a Light Drizzle of Chocolate.",
 12.00, "../images/cappuccino.png");

INSERT or ignore INTO food
VALUES(21, "coffeeTea", "Butterfly Pea Tea", "An Earthy, Woody Tea with an Exquisite Blue Tinge and Distinct Floral Aroma.",
9.00, "../images/butterflyPeaTea.png");

INSERT or ignore INTO food 
VALUES(22, "coffeeTea", "Lemongrass Ginger Tea", "Fragrant and Aromatic, this is refreshing lemongrass-flavoured tea with a slight trace of ginger.",
9.00, "../images/lemongrassGinger.png");

INSERT or ignore INTO food
VALUES(23, "fruitJuice", "Fig Butterfly", "Fig juice with an exquisite pink tinge.",
11.00, "../images/figButterfly.png");

INSERT or ignore INTO food 
VALUES(24, "fruitJuice", "Mango Tango", "A rich mixture of mango, passion fruit and apple.",
10.00, "../images/mangoTango.png");

INSERT or ignore INTO food 
VALUES(25, "fruitJuice", "Golden Passion", "Sweet pineapple, passion fruit, guava with a touch of mint leaves",
13.00, "../images/goldenPassion.png");

INSERT or ignore INTO food 
VALUES(26, "fruitJuice", "Pink Lady", "Dragon Fruit, Pear, Grapes, topped with mint leaf.",
10.00, "../images/pinkLady.png");

INSERT or ignore INTO food 
VALUES(27, "fruitJuice", "Greenty Minty", "A mix of green apple and kiwi with mint leaf and lime.",
10.00, "../images/greentyMinty.png");

INSERT or ignore INTO food
VALUES(28, "smoothies", "Chocolate Smoothie", "Sweet and Chocolaty, a Perfect Drink for your Date.",
13.00, "../images/chocolateSmoothie.jpg");

INSERT or ignore INTO food
VALUES(29, "smoothies", "Dragon Fruit Smoothies", "Made with Fresh Dragon Fruit, Tasty and Hydrating!",
13.00, "../images/dragonFruitSmoothie.jpg");

INSERT or ignore INTO food
VALUES(30, "smoothies", "Banana Smoothie", "Healthy and Delicious! Nothing can go wrong with a Banana Smoothie!",
13.00, "../images/bananaSmoothie.jpg");

INSERT or ignore INTO food 
VALUES(31, "alcohol", "Penfolds St.Henri Shiraz 2016", "Variety: Syrah/Shiraz\nVintage: 2016\nAppellation: Barossa Valley, Australia",
338.00, "../images/bollinger.jpg");

INSERT or ignore INTO food
VALUES(32, "alcohol", "Taittinger Reserve Brut NV Champagne", "Variety: France\nVintage: 2020\nAppellation: Reims",
 338.00, "../images/penfolds2016.png");

INSERT or ignore INTO food
VALUES(33, "dessert", "Cheesecake", "A creamy, sweet, and delicious no bake berry cheesecake.",
8.00, "../images/cheeseCake.jpg");

INSERT or ignore INTO food 
VALUES(34, "dessert", "Snickers Pie", "Oreo crust, silky and airy chocolate filling and finished with chopped candy.",
12.00, "../images/snickersPie.jpg");


