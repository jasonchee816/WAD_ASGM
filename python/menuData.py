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
10.80, 'https://cdn.harvesttotable.com/htt/2013/06/23185029/Radish-salad-with-chives.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(2, "salad", "Honey Lime Rainbow Fruit Salad", "Made with beautiful blend of delicious fruits and a simple dressing to compliment it.",
11.80, 'https://www.cookingclassy.com/wp-content/uploads/2019/05/fruit-salad-4-768x1152.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(3, "salad", "Caesar Salad", "The crowd-pleasing salad of crisp romaine leaves, crunchy croutons, and a little or a lot of anchovy.",
12.80, 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(4, "mainCourse", "Chicken Chop", "Juicy Fried Chicken Chop paired with Coleslaw, Fries, and a Sunny-Side Up Egg.",
18.50, 'https://www.sidechef.com/recipe/bf2ae123-0553-4605-a564-e790d69d29fb.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(5, "mainCourse", "Fish and Chips", "Fried Dory Fish with Crunchy Wedges paired with the Homemade Tartar Sauce.",
19.00, 'https://en.wikipedia.org/wiki/File:Fish_and_chips_blackpool.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(6, "mainCourse", "Ribeye Steak", "Ribeye Steak with Garlic Butter cooked to perfect Medium Rare and served with Roasted Potato and Green Beans.",
40.00, 'https://s23209.pcdn.co/wp-content/uploads/2020/02/How-to-Cook-a-Ribeye-SteakIMG_9479.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(7, "mainCourse", "Lamb Chop", "Juicy Pan-Seared Lamb Chops with Cipollini Onions.",
37.00, 'https://www.simplyrecipes.com/thmb/XqY4CK7iizZGPycMxxtsx-T1FRo=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2013__02__Rosemary-Lamb-Chops-LEAD-1-dce9734297f94d379b198ce36055ff8f.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(8, "pizza", "Hawaiian Supreme", "Pizza with tomato sauce, chicken meat, chicken loaf, pineapples, mozzarella cheese.",
30.00, 'https://static.phdvasia.com/sg1/menu/single/desktop_thumbnail_96441904-e6b6-46b8-9d62-c989c57299d4.jpeg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(9, "pizza", "Chicken Supreme", "Pizza with tomato sauce, chicken meat, chicken salami, chicken loaf, mushrooms, capsicums, onions, mozzarella cheese, tomatoes.",
30.00, 'https://1.bp.blogspot.com/-5buTZlSjy94/V6gLKUl-Y_I/AAAAAAAE_-A/mWoY01ZTZ8An548iwD6pLKAaTYF3tqMqACLcB/s1600/1.JPG')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(10, "pizza", "Chicken Supreme", "Pizza with tomato sauce, chicken meat, chicken salami, chicken loaf, mushrooms, capsicums, onions, mozzarella cheese, tomatoes.",
30.00, 'https://1.bp.blogspot.com/-5buTZlSjy94/V6gLKUl-Y_I/AAAAAAAE_-A/mWoY01ZTZ8An548iwD6pLKAaTYF3tqMqACLcB/s1600/1.JPG')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(11, "pizza", "Blazing Seafood", "Pizza with spicy sweet sour sauce, tuna, crabsticks, pineapples, capsicums, onions, mozzarella cheese.",
30.00, 'https://kdelivery.net/assets/img/items/16399708763m9lXKO8Uz.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(12, "pizza", "triple Chicken", "Pizza with thousand island sauce, chicken rolls, chicken meat, chicken salami, mushrooms, tomatoes, onions, mozzarella cheese.",
30.00, 'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/MYITE20200827013409030024/detail/db4f989e_715993138011.webp')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(13, "pasta", "Baked Feta Pasta", "Cherry tomatoes and a whole block of feta are baked until soft and melty, then tossed with garlic, basil and cooked noodles for a beautifully cheesy dish.",
15.00, 'https://littlesunnykitchen.com/wp-content/uploads/2021/02/Baked-Feta-Pasta-4.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(14, "pasta", "Pasta with Garlic and Cheese", "Kind of like a deconstructed pesto, using parsley instead of basil.",
16.70, 'https://littlesunnykitchen.com/wp-content/uploads/2021/02/Baked-Feta-Pasta-4.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(15, "pasta", "Pasta with Fresh Tomato Sauce", "Romas (aka plum tomatoes) fit the bill, but there are plenty of heirlooms with a similar flesh-to-seed ratio.",
20.15, 'https://www.thespruceeats.com/thmb/LziXu5UVNRAOIUDebunozOPAgrc=/1954x1954/smart/filters:no_upscale()/fresh-tomato-pasta-recipe-481998-hero-15-88f9495dfdd8428fafea9232c1bfd7f1.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(16, "burger", "Whooper Jr", "A mouth-watering, flame-grilled beef patty topped with fresh tomatoes, crisp lettuce, tangy pickles and crunchy onions, served on a toasted sesame seed bun and flavored with creamy mayo and ketchup.",
18.00, 'https://images.eatthismuch.com/img/196973_dillonc118_ffb4990e-e789-4780-8581-a0580b4326bd.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(17, "burger", "Long Cheesy Onion Beef", "Featuring 2 pieces of our signature flame-grilled beef patties topped with Nachos Cheese sauce, mayonnaise, mustard, pickles and fresh onions served between two long sesame seed buns.",
22.00, 'https://i.pinimg.com/originals/c6/93/6d/c6936d6c8228a43d2b662c90e63601d8.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(18, "burger", "Double Cheeseburger", "Make room for our Double Cheeseburger, two signature flame-grilled beef patties topped with a simple layer of melted American cheese, crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.",
26.00, 'https://1.bp.blogspot.com/-8TtUy3Hk-40/WOvRtU7CCXI/AAAAAAAATos/0KLTrEtQ4u090eRsJg1_vJbShCvrchXqgCLcB/s1600/Harga-Double-CheeseBurger-Mcdonald.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(19, "coffeeTea", "Caffe Latte", "Espresso topped with Velvety Smooth Steamed Milk.",
12.00, 'https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(20, "coffeeTea", "Mocha", "An Indulgent Blend of Espresso & Hot Chocolate topped with Velvety Steamed Milk.",
10.00, 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Mocha_coffee.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(21, "coffeeTea", "Cappuccino", "Espresso with Smooth Steamed Milk & finished with a Light Drizzle of Chocolate.",
 12.00, 'https://leitesculinaria.com/wp-content/uploads/fly-images/233844/cappuccino-1200x1200-c.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(22, "coffeeTea", "Butterfly Pea Tea", "An Earthy, Woody Tea with an Exquisite Blue Tinge and Distinct Floral Aroma.",
9.00, 'https://www.ohhowcivilized.com/wp-content/uploads/0919-butterfly-pea-flower-tea-2.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(23, "coffeeTea", "Lemongrass Ginger Tea", "Fragrant and Aromatic, this is refreshing lemongrass-flavoured tea with a slight trace of ginger.",
9.00, 'https://delightfulplate.com/wp-content/uploads/2020/12/Lemongrass-Ginger-Tea-Tra-gung-sa-1.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(24, "fruitJuice", "Fig Butterfly", "Fig juice with an exquisite pink tinge.",
11.00, 'https://www.loveandoliveoil.com/wp-content/uploads/2017/08/butterfly-pea-lemonade4-600x900.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(29, "smoothies", "Chocolate Smoothie", "Sweet and Chocolaty, a Perfect Drink for your Date.",
13.00, 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2017%2F01%2Fmain%2Frich-dark-chocolate-smoothie_0.jpg%3Fitok%3DL_zKRUAL')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(30, "smoothies", "Dragon Fruit Smoothies", "Made with Fresh Dragon Fruit, Tasty and Hydrating!",
13.00, 'https://choosingchia.com/jessh-jessh/uploads/2021/12/Dragon-Fruit-Smoothie-4.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(31, "smoothies", "Banana Smoothie", "Healthy and Delicious! Nothing can go wrong with a Banana Smoothie!",
13.00, 'https://www.thespruceeats.com/thmb/RTH5cMhDMvK61a4okKEUqneMtxU=/3909x2601/filters:fill(auto,1)/banana-smoothie-recipes-759606-hero-01-d2abaa79f3204030a0ec0a8940456acc.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(32, "alcohol", "Penfolds St.Henri Shiraz 2016", "Variety: Syrah/Shiraz\nVintage: 2016\nAppellation: Barossa Valley, Australia",
338.00, 'https://www.penfolds.com/dw/image/v2/BDBC_PRD/on/demandware.static/-/Sites-tweus-master-catalog/default/dw7461d238/images/hi-res/Penfolds/7297862-2016-penfolds-StHenri-Shiraz-750ml/7297862-2016-penfolds-StHenri-SHiraz-Fl-750ml.png?sw=566&sh=849&sm=fit')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(33, "alcohol", "Taittinger Reserve Brut NV Champagne", "Variety: France\nVintage: 2020\nAppellation: Reims",
 338.00, 'https://moorewilsons.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/a/taittinger-champagne-box/taittinger-brut-reserve-champagne-32.1572382224.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(34, "dessert", "Cheesecake", "A creamy, sweet, and delicious no bake berry cheesecake.",
8.00, 'https://www.onceuponachef.com/images/2017/12/cheesecake-1200x1393.jpg')''')

cursor.execute(''' INSERT INTO MenuData(id, category, name, desc, price, image)
VALUES(35, "dessert", "Snickers Pie", "Oreo crust, silky and airy chocolate filling and finished with chopped candy.",
12.00, 'https://www.seriouseats.com/thmb/7u3sdS7DcenmuPOLORyblw3Bi-A=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140909-ideas-in-food-Slice-Of-Finished-Snickers-Pie-c1185263a7cf49eca96b04bff93e2558.jpg')''')




db.commit()
db.close()