import sqlite3

db = sqlite3.connect('db.sqlite')
db.execute('DROP TABLE IF EXISTS MenuData')

db.execute('''CREATE TABLE MenuData(
    id integer PRIMARY KEY,
    category text NOT NULL,
    name text NOT NULL,
    desc text NOT NULL,
    price REAL NOT NULL,
    image text NOT NULL
)''')

cursor = db.cursor()

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(1, "salad", "Radish Green Salad", "Make use of all the wonderful curly, coral lettuce that we had growing in the garden.",
10.80, "../images/radishGreenSalad.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(2, "salad", "Honey Lime Rainbow Fruit Salad", "Made with beautiful blend of delicious fruits and a simple dressing to compliment it.",
11.80, "../images/honeyLimeRainbow.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(3, "salad", "Caesar Salad", "The crowd-pleasing salad of crisp romaine leaves, crunchy croutons, and a little or a lot of anchovy.",
12.80, "../images/caesarSalad.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(4, "mainCourse", "Chicken Chop", "Juicy Fried Chicken Chop paired with Coleslaw, Fries, and a Sunny-Side Up Egg.",
18.50, "../images/chickenChop.jpg")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(5, "mainCourse", "Fish and Chips", "Fried Dory Fish with Crunchy Wedges paired with the Homemade Tartar Sauce.",
19.00, "../images/fishAndChips.jpg")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(6, "mainCourse", "Ribeye Steak", "Ribeye Steak with Garlic Butter cooked to perfect Medium Rare and served with Roasted Potato and Green Beans.",
40.00, "../images/ribeyeSteak.jpg")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(7, "mainCourse", "Lamb Chop", "Juicy Pan-Seared Lamb Chops with Cipollini Onions.",
37.00, "../images/lambChop.jpg")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(8, "pizza", "Hawaiian Supreme", "Pizza with tomato sauce, chicken meat, chicken loaf, pineapples, mozzarella cheese.",
30.00, "../images/hawaiianSupreme.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(9, "pizza", "Chicken Supreme", "Pizza with tomato sauce, chicken meat, chicken salami, chicken loaf, mushrooms, capsicums, onions, mozzarella cheese, tomatoes.",
30.00, "../images/chickenSupreme.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(10, "pizza", "Blazing Seafood", "Pizza with spicy sweet sour sauce, tuna, crabsticks, pineapples, capsicums, onions, mozzarella cheese.",
30.00, "../images/blazingSeafood.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(11, "pizza", "Triple Chicken", "Pizza with thousand island sauce, chicken rolls, chicken meat, chicken salami, mushrooms, tomatoes, onions, mozzarella cheese.",
30.00, "../images/tripleChicken.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(12, "pasta", "Baked Feta Pasta", "Cherry tomatoes and a whole block of feta are baked until soft and melty, then tossed with garlic, basil and cooked noodles for a beautifully cheesy dish.",
15.00, "../images/bakedFetaPasta.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(13, "pasta", "Pasta with Garlic and Cheese", "Kind of like a deconstructed pesto, using parsley instead of basil.",
16.70, "../images/pastaGarlicCheese.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(14, "pasta", "Pasta with Fresh Tomato Sauce", "Romas (aka plum tomatoes) fit the bill, but there are plenty of heirlooms with a similar flesh-to-seed ratio.",
20.15, "../images/pastaTomatoSauce.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(15, "burger", "Whooper Jr", "A mouth-watering, flame-grilled beef patty topped with fresh tomatoes, crisp lettuce, tangy pickles and crunchy onions, served on a toasted sesame seed bun and flavored with creamy mayo and ketchup.",
18.00, "../images/whooperJr.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(16, "burger", "Long Cheesy Onion Beef", "Featuring 2 pieces of our signature flame-grilled beef patties topped with Nachos Cheese sauce, mayonnaise, mustard, pickles and fresh onions served between two long sesame seed buns.",
22.00, "../images/cheesyOnionBeef.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(17, "burger", "Double Cheeseburger", "Make room for our Double Cheeseburger, two signature flame-grilled beef patties topped with a simple layer of melted American cheese, crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.",
26.00, "../images/doubleCheeseburger.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)  
VALUES(18, "coffeeTea", "Caffe Latte", "Espresso topped with Velvety Smooth Steamed Milk.",
12.00, "../images/latte.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)  
VALUES(19, "coffeeTea", "Mocha", "An Indulgent Blend of Espresso & Hot Chocolate topped with Velvety Steamed Milk.",
10.00, "../images/mocha.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)  
VALUES(20, "coffeeTea", "Cappuccino", "Espresso with Smooth Steamed Milk & finished with a Light Drizzle of Chocolate.",
 12.00, "../images/cappuccino.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(21, "coffeeTea", "Butterfly Pea Tea", "An Earthy, Woody Tea with an Exquisite Blue Tinge and Distinct Floral Aroma.",
9.00, "../images/butterflyPeaTea.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)  
VALUES(22, "coffeeTea", "Lemongrass Ginger Tea", "Fragrant and Aromatic, this is refreshing lemongrass-flavoured tea with a slight trace of ginger.",
9.00, "../images/lemongrassGinger.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(23, "fruitJuice", "Fig Butterfly", "Fig juice with an exquisite pink tinge.",
11.00, "../images/figButterfly.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)  
VALUES(24, "fruitJuice", "Mango Tango", "A rich mixture of mango, passion fruit and apple.",
10.00, "../images/mangoTango.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)  
VALUES(25, "fruitJuice", "Golden Passion", "Sweet pineapple, passion fruit, guava with a touch of mint leaves",
13.00, "../images/goldenPassion.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)  
VALUES(26, "fruitJuice", "Pink Lady", "Dragon Fruit, Pear, Grapes, topped with mint leaf.",
10.00, "../images/pinkLady.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)  
VALUES(27, "fruitJuice", "Greenty Minty", "A mix of green apple and kiwi with mint leaf and lime.",
10.00, "../images/greentyMinty.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(28, "smoothies", "Chocolate Smoothie", "Sweet and Chocolaty, a Perfect Drink for your Date.",
13.00, "../images/chocolateSmoothie.jpg")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(29, "smoothies", "Dragon Fruit Smoothies", "Made with Fresh Dragon Fruit, Tasty and Hydrating!",
13.00, "../images/dragonFruitSmoothie.jpg")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(30, "smoothies", "Banana Smoothie", "Healthy and Delicious! Nothing can go wrong with a Banana Smoothie!",
13.00, "../images/bananaSmoothie.jpg")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)  
VALUES(31, "alcohol", "Penfolds St.Henri Shiraz 2016", "Variety: Syrah/Shiraz\nVintage: 2016\nAppellation: Barossa Valley, Australia",
338.00, "../images/penfolds2016.png")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(32, "alcohol", "Taittinger Reserve Brut NV Champagne", "Variety: France\nVintage: 2020\nAppellation: Reims",
 338.00, "../images/taittinger.jpg")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image) 
VALUES(33, "dessert", "Cheesecake", "A creamy, sweet, and delicious no bake berry cheesecake.",
8.00, "../images/cheeseCake.jpg")''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)  
VALUES(34, "dessert", "Snickers Pie", "Oreo crust, silky and airy chocolate filling and finished with chopped candy.",
12.00, "../images/snickersPie.jpg")''')




db.commit()
db.close()