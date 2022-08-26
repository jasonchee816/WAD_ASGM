const MenuData = [
    {
        id: '1',
        name: 'Radish Green Salad',
        desc: 'Make use of all the wonderful curly, coral lettuce that we had growing in the garden.',
        price: 10.80,
        image: 'https://cdn.harvesttotable.com/htt/2013/06/23185029/Radish-salad-with-chives.jpg',
    },
    {
        id: '2',
        name: 'Honey Lime Rainbow Fruit Salad',
        desc: 'Made with beautiful blend of delicious fruits and a simple dressing to compliment it.',
        price: 11.80,
        image: 'https://www.cookingclassy.com/wp-content/uploads/2019/05/fruit-salad-4-768x1152.jpg',
    },
    {
        id: '3',
        name: 'Caesar Salad',
        desc: 'The crowd-pleasing salad of crisp romaine leaves, crunchy croutons, and a little or a lot of anchovy.',
        price: 12.80,
        image: 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg',
    },
    {
        id: '4',
        name: 'Chicken Chop',
        desc: 'Juicy Fried Chicken Chop paired with Coleslaw, Fries, and a Sunny-Side Up Egg.',
        price: 18.50,
        image:'https://www.sidechef.com/recipe/bf2ae123-0553-4605-a564-e790d69d29fb.jpg',
    },
    {
        id: '5',
        name: 'Fish and Chips',
        desc: 'Fried Dory Fish with Crunchy Wedges paired with the Homemade Tartar Sauce.',
        price: 19.00,
        image: 'https://en.wikipedia.org/wiki/File:Fish_and_chips_blackpool.jpg',
    },
    {
        id: '6',
        name: 'Ribeye Steak',
        desc: 'Ribeye Steak with Garlic Butter cooked to perfect Medium Rare and served with Roasted Potato and Green Beans.',
        price: 40.00,
        image: 'https://s23209.pcdn.co/wp-content/uploads/2020/02/How-to-Cook-a-Ribeye-SteakIMG_9479.jpg',
    },
    {
        id: '7',
        name: 'Lamb Chop',
        desc: 'Juicy Pan-Seared Lamb Chops with Cipollini Onions.',
        price: 37.00,
        image: 'https://www.simplyrecipes.com/thmb/XqY4CK7iizZGPycMxxtsx-T1FRo=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2013__02__Rosemary-Lamb-Chops-LEAD-1-dce9734297f94d379b198ce36055ff8f.jpg',
    },
    {
        id: '8',
        name: 'Hawaiian Supreme',
        desc: 'Pizza with tomato sauce, chicken meat, chicken loaf, pineapples, mozzarella cheese.',
        price: 30.00,
        image: 'https://static.phdvasia.com/sg1/menu/single/desktop_thumbnail_96441904-e6b6-46b8-9d62-c989c57299d4.jpeg',
    },
    {
        id: '9',
        name: 'Chicken Supreme',
        desc: 'Pizza with tomato sauce, chicken meat, chicken salami, chicken loaf, mushrooms, capsicums, onions, mozzarella cheese, tomatoes.',
        price: 30.00,
        image: 'https://1.bp.blogspot.com/-5buTZlSjy94/V6gLKUl-Y_I/AAAAAAAE_-A/mWoY01ZTZ8An548iwD6pLKAaTYF3tqMqACLcB/s1600/1.JPG',
    },
    {
        id: '10',
        name: 'Blazing Seafood',
        desc: 'Pizza with spicy sweet sour sauce, tuna, crabsticks, pineapples, capsicums, onions, mozzarella cheese.',
        price: 30.00,
        image: 'https://kdelivery.net/assets/img/items/16399708763m9lXKO8Uz.jpg',
    },
    {
        id: '11',
        name: 'Triple Chicken',
        desc: 'Pizza with thousand island sauce, chicken rolls, chicken meat, chicken salami, mushrooms, tomatoes, onions, mozzarella cheese.',
        price: 30.00,
        image: 'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/MYITE20200827013409030024/detail/db4f989e_715993138011.webp',
    },
    {
        id: '12',
        name: 'Baked Feta Pasta',
        desc: 'Cherry tomatoes and a whole block of feta are baked until soft and melty, then tossed with garlic, basil and cooked noodles for a beautifully cheesy dish.',
        price: 15.00,
        image: 'https://littlesunnykitchen.com/wp-content/uploads/2021/02/Baked-Feta-Pasta-4.jpg',
    },
    {
        id: '13',
        name: 'Pasta with Garlic and Cheese',
        desc: 'Kind of like a deconstructed pesto, using parsley instead of basil.',
        price: 16.70,
        image: 'https://littlesunnykitchen.com/wp-content/uploads/2021/02/Baked-Feta-Pasta-4.jpg',
    },
    {
        id: '14',
        name: 'Pasta with Fresh Tomato Sauce',
        desc: 'Romas (aka plum tomatoes) fit the bill, but there are plenty of heirlooms with a similar flesh-to-seed ratio.',
        price: 20.15,
        image: 'https://www.thespruceeats.com/thmb/LziXu5UVNRAOIUDebunozOPAgrc=/1954x1954/smart/filters:no_upscale()/fresh-tomato-pasta-recipe-481998-hero-15-88f9495dfdd8428fafea9232c1bfd7f1.jpg',
    },
    {
        id: '15',
        name: 'Whooper',
        desc: 'A real meaty flame-grilled Whopper® beef patty, topped with tangy pickles, ketchup, fresh tomatoes, crisp lettuce and fresh onions, finished with creamy mayo , and served on a toasted 5" sesame seed bun.',
        price: 15.00,
        image: 'https://thefoodxp.com/wp-content/uploads/2022/01/Burger-king-Whooper-4.webp',
    },
    {
        id: '16',
        name: 'Whooper Jr',
        desc: 'A mouth-watering, flame-grilled beef patty topped with fresh tomatoes, crisp lettuce, tangy pickles and crunchy onions, served on a toasted sesame seed bun and flavored with creamy mayo and ketchup.',
        price: 18.00,
        image: 'https://images.eatthismuch.com/img/196973_dillonc118_ffb4990e-e789-4780-8581-a0580b4326bd.jpg',
    },
    {
        id: '17',
        name: 'Long Cheesy Onion Beef',
        desc: 'Featuring 2 pieces of our signature flame-grilled beef patties topped with Nachos Cheese sauce, mayonnaise, mustard, pickles and fresh onions served between two long sesame seed buns.',
        price: 22.00,
        image: 'https://i.pinimg.com/originals/c6/93/6d/c6936d6c8228a43d2b662c90e63601d8.jpg',
    },
    {
        id: '18',
        name: 'Double Cheeseburger',
        desc: 'Make room for our Double Cheeseburger, two signature flame-grilled beef patties topped with a simple layer of melted American cheese, crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
        price: 26.00,
        image: 'https://1.bp.blogspot.com/-8TtUy3Hk-40/WOvRtU7CCXI/AAAAAAAATos/0KLTrEtQ4u090eRsJg1_vJbShCvrchXqgCLcB/s1600/Harga-Double-CheeseBurger-Mcdonald.jpg',
    },
    {
        id: '19',
        name: 'Caffe Latte',
        desc: 'Espresso topped with Velvety Smooth Steamed Milk.',
        price: 12.00,
        image: 'https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg',
    },
    {
        id: '20',
        name: 'Mocha',
        desc: 'An Indulgent Blend of Espresso & Hot Chocolate topped with Velvety Steamed Milk.',
        price: 10.00,
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Mocha_coffee.jpg',
    },
    {
        id: '21',
        name: 'Cappuccino',
        desc: 'Espresso with Smooth Steamed Milk & finished with a Light Drizzle of Chocolate.',
        price: 12.00,
        image: 'https://leitesculinaria.com/wp-content/uploads/fly-images/233844/cappuccino-1200x1200-c.jpg',
    },
    {
        id: '22',
        name: 'Butterfly Pea Tea',
        desc: 'An Earthy, Woody Tea with an Exquisite Blue Tinge and Distinct Floral Aroma.',
        price: 9.00,
        image: 'https://www.ohhowcivilized.com/wp-content/uploads/0919-butterfly-pea-flower-tea-2.jpg',
    },
    {
        id: '23',
        name: 'Lemongrass Ginger Tea',
        desc: 'Fragrant and Aromatic, this is refreshing lemongrass-flavoured tea with a slight trace of ginger.',
        price: 9.00,
        image: 'https://delightfulplate.com/wp-content/uploads/2020/12/Lemongrass-Ginger-Tea-Tra-gung-sa-1.jpg',
    },
    {
        id: '24',
        name: 'Fig Butterfly',
        desc: 'Fig juice with an exquisite pink tinge.',
        price: 11.00,
        image: 'https://www.loveandoliveoil.com/wp-content/uploads/2017/08/butterfly-pea-lemonade4-600x900.jpg',
    },
    {
        id: '25',
        name: 'Chocolate Smoothie',
        desc: 'Sweet and Chocolaty, a Perfect Drink for your Date.',
        price: 13.00,
        image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2017%2F01%2Fmain%2Frich-dark-chocolate-smoothie_0.jpg%3Fitok%3DL_zKRUAL',
    },
    {
        id: '26',
        name: 'Dragon Fruit Smoothie',
        desc: 'Made with Fresh Dragon Fruit, Tasty and Hydrating!',
        price: 13.00,
        image: 'https://choosingchia.com/jessh-jessh/uploads/2021/12/Dragon-Fruit-Smoothie-4.jpg',
    },
    {
        id: '27',
        name: 'Banana Smoothie',
        desc: 'Healthy and Delicious! Nothing can go wrong with a Banana Smoothie!',
        price: 13.00,
        image: 'https://www.thespruceeats.com/thmb/RTH5cMhDMvK61a4okKEUqneMtxU=/3909x2601/filters:fill(auto,1)/banana-smoothie-recipes-759606-hero-01-d2abaa79f3204030a0ec0a8940456acc.jpg',
    },
    {
        id: '28',
        name: 'Penfolds St.Henri Shiraz 2016',
        desc: 'Variety: Syrah/Shiraz\nVintage: 2016\nAppellation: Barossa Valley, Australia',
        price: 160.00,
        image: 'https://www.penfolds.com/dw/image/v2/BDBC_PRD/on/demandware.static/-/Sites-tweus-master-catalog/default/dw7461d238/images/hi-res/Penfolds/7297862-2016-penfolds-StHenri-Shiraz-750ml/7297862-2016-penfolds-StHenri-SHiraz-Fl-750ml.png?sw=566&sh=849&sm=fit',
    },
    {
        id: '29',
        name: 'Taittinger Reserve Brut NV Champagne',
        desc: 'Variety: France\nVintage: 2020\nAppellation: Reims',
        price: 338.00,
        image: 'https://moorewilsons.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/a/taittinger-champagne-box/taittinger-brut-reserve-champagne-32.1572382224.jpg',
    },
    {
        id: '30',
        name: 'Cheesecake',
        desc: 'A creamy, sweet, and delicious no bake berry cheesecake.',
        price: 8.00,
        image: 'https://www.onceuponachef.com/images/2017/12/cheesecake-1200x1393.jpg',
    },
    {
        id: '31',
        name: 'Snickers Pie',
        desc: 'Oreo crust, silky and airy chocolate filling and finished with chopped candy.',
        price: 12.00,
        image: 'https://www.seriouseats.com/thmb/7u3sdS7DcenmuPOLORyblw3Bi-A=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140909-ideas-in-food-Slice-Of-Finished-Snickers-Pie-c1185263a7cf49eca96b04bff93e2558.jpg',
    },
];
export default MenuData;

// const SaladMenu = [{
//     title: "Salad",
//     data: [
//         {
//             id: '1',
//             name: 'Radish Green Salad',
//             desc: 'Make use of all the wonderful curly, coral lettuce that we had growing in the garden.',
//             price: 10.80,
//             image: require('../images/radishGreenSalad.png'),
//         },
//         {
//             id: '2',
//             name: 'Honey Lime Rainbow Fruit Salad',
//             desc: 'Made with beautiful blend of delicious fruits and a simple dressing to compliment it.',
//             price: 11.80,
//             image: require('../images/honeyLimeRainbow.png'),
//         },
//         {
//             id: '3',
//             name: 'Caesar Salad',
//             desc: 'The crowd-pleasing salad of crisp romaine leaves, crunchy croutons, and a little or a lot of anchovy.',
//             price: 12.80,
//             image: require('../images/caesarSalad.png'),
//         },
//     ]
// }];
// const MainCourseMenu = [{
//     title: "MainCourse",
//     data: [
//     {
//         id: '4',
//         name: 'Chicken Chop',
//         desc: 'Juicy Fried Chicken Chop paired with Coleslaw, Fries, and a Sunny-Side Up Egg.',
//         price: 18.50,
//         image: require('../images/chickenChop.jpg'),
//     },
//     {
//         id: '5',
//         name: 'Fish and Chips',
//         desc: 'Fried Dory Fish with Crunchy Wedges paired with the Homemade Tartar Sauce.',
//         price: 19.00,
//         image: require('../images/fishAndChips.jpg'),
//     },
//     {
//         id: '6',
//         name: 'Ribeye Steak',
//         desc: 'Ribeye Steak with Garlic Butter cooked to perfect Medium Rare and served with Roasted Potato and Green Beans.',
//         price: 40.00,
//         image: require('../images/ribeyeSteak.jpg'),
//     },
//     {
//         id: '7',
//         name: 'Lamb Chop',
//         desc: 'Juicy Pan-Seared Lamb Chops with Cipollini Onions.',
//         price: 37.00,
//         image: require('../images/lambChop.jpg'),
//     },
// ]
// }];
// const PizzaMenu = [{
//     title: "Pizza",
//     data: [
//     {
//         id: '8',
//         name: 'Hawaiian Supreme',
//         desc: 'Pizza with tomato sauce, chicken meat, chicken loaf, pineapples, mozzarella cheese.',
//         price: 30.00,
//         image: require('../images/hawaiianSupreme.png'),
//     },
//     {        
//         id: '9',
//         name: 'Chicken Supreme',
//         desc: 'Pizza with tomato sauce, chicken meat, chicken salami, chicken loaf, mushrooms, capsicums, onions, mozzarella cheese, tomatoes.',
//         price: 30.00,
//         image: require('../images/chickenSupreme.png'),
//     },
//     {
//         id: '10',
//         name: 'Blazing Seafood',
//         desc: 'Pizza with spicy sweet sour sauce, tuna, crabsticks, pineapples, capsicums, onions, mozzarella cheese.',
//         price: 30.00,
//         image: require('../images/blazingSeafood.png'),
//     },
//     {
//         id: '11',
//         name: 'Triple Chicken',
//         desc: 'Pizza with thousand island sauce, chicken rolls, chicken meat, chicken salami, mushrooms, tomatoes, onions, mozzarella cheese.',
//         price: 30.00,
//         image: require('../images/tripleChicken.png'),
//     },
// ]}];
// const PastaMenu = [{
//     title: "Pasta",
//     data: [
//     {
//         id: '12',
//         name: 'Baked Feta Pasta',
//         desc: 'Cherry tomatoes and a whole block of feta are baked until soft and melty, then tossed with garlic, basil and cooked noodles for a beautifully cheesy dish.',
//         price: 15.00,
//         image: require('../images/bakedFetaPasta.png'),
//     },
//     {
//         id: '13',
//         name: 'Pasta with Garlic and Cheese',
//         desc: 'Kind of like a deconstructed pesto, using parsley instead of basil.',
//         price: 16.70,
//         image: require('../images/pastaGarlicCheese.png'),
//     },
//     {
//         id: '14',
//         name: 'Pasta with Fresh Tomato Sauce',
//         desc: 'Romas (aka plum tomatoes) fit the bill, but there are plenty of heirlooms with a similar flesh-to-seed ratio.',
//         price: 20.15,
//         image: require('../images/pastaTomatoSauce.png'),
//     },
// ]}];
// const BurgerMenu = [{
//     title: "Burger",
//     data: [
//     {
//         id: '15',
//         name: 'Whooper',
//         desc: 'A real meaty flame-grilled Whopper® beef patty, topped with tangy pickles, ketchup, fresh tomatoes, crisp lettuce and fresh onions, finished with creamy mayo , and served on a toasted 5" sesame seed bun.',
//         price: 15.00,
//         image: require('../images/whooper.png'),
//     },
//     {
//         id: '16',
//         name: 'Whooper Jr',
//         desc: 'A mouth-watering, flame-grilled beef patty topped with fresh tomatoes, crisp lettuce, tangy pickles and crunchy onions, served on a toasted sesame seed bun and flavored with creamy mayo and ketchup.',
//         price: 18.00,
//         image: require('../images/whooperJr.png'),
//     },
//     {
//         id: '17',
//         name: 'Long Cheesy Onion Beef',
//         desc: 'Featuring 2 pieces of our signature flame-grilled beef patties topped with Nachos Cheese sauce, mayonnaise, mustard, pickles and fresh onions served between two long sesame seed buns.',
//         price: 22.00,
//         image: require('../images/cheesyOnionBeef.png'),
//     },
//     {
//         id: '18',
//         name: 'Double Cheeseburger',
//         desc: 'Make room for our Double Cheeseburger, two signature flame-grilled beef patties topped with a simple layer of melted American cheese, crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
//         price: 26.00,
//         image: require('../images/doubleCheeseburger.png'),
//     },
// ]}];
// const CoffeeAndTeaMenu = [{
//     title: "Coffee and Tea",
//     data: [
//     {
//         id: '19',
//         name: 'Caffe Latte',
//         desc: 'Espresso topped with Velvety Smooth Steamed Milk.',
//         price: 12.00,
//         image: require('../images/latte.png'),
//     },
//     {
//         id: '20',
//         name: 'Mocha',
//         desc: 'An Indulgent Blend of Espresso & Hot Chocolate topped with Velvety Steamed Milk.',
//         price: 10.00,
//         image: require('../images/mocha.png'),
//     },
//     {
//         id: '21',
//         name: 'Cappuccino',
//         desc: 'Espresso with Smooth Steamed Milk & finished with a Light Drizzle of Chocolate.',
//         price: 12.00,
//         image: require('../images/cappuccino.png'),
//     },
//     {
//         id: '22',
//         name: 'Butterfly Pea Tea',
//         desc: 'An Earthy, Woody Tea with an Exquisite Blue Tinge and Distinct Floral Aroma.',
//         price: 9.00,
//         image: require('../images/butterflyPeaTea.png'),
//     },
//     {
//         id: '23',
//         name: 'Lemongrass Ginger Tea',
//         desc: 'Fragrant and Aromatic, this is refreshing lemongrass-flavoured tea with a slight trace of ginger.',
//         price: 9.00,
//         image: require('../images/lemongrassGinger.png'),
//     },
//     {
//         id: '24',
//         name: 'Fig Butterfly',
//         desc: 'Fig juice with an exquisite pink tinge.',
//         price: 11.00,
//         image: require('../images/figButterfly.png'),
//     },
// ]}];
// const SmoothiesMenu = [{
//     title: "Smoothies",
//     data: [
//     {
//         id: '25',
//         name: 'Chocolate Smoothie',
//         desc: 'Sweet and Chocolaty, a Perfect Drink for your Date.',
//         price: 13.00,
//         image: require('../images/chocolateSmoothie.jpg'),
//     },
//     {
//         id: '26',
//         name: 'Dragon Fruit Smoothie',
//         desc: 'Made with Fresh Dragon Fruit, Tasty and Hydrating!',
//         price: 13.00,
//         image: require('../images/dragonFruitSmoothie.jpg'),
//     },
//     {
//         id: '27',
//         name: 'Banana Smoothie',
//         desc: 'Healthy and Delicious! Nothing can go wrong with a Banana Smoothie!',
//         price: 13.00,
//         image: require('../images/bananaSmoothie.jpg'),
//     },
// ]}];
// const WineMenu = [{
//     title: "Wine",
//     data: [
//     {
//         id: '28',
//         name: 'Penfolds St.Henri Shiraz 2016',
//         desc: 'Variety: Syrah/Shiraz\nVintage: 2016\nAppellation: Barossa Valley, Australia',
//         price: 160.00,
//         image: require('../images/penfolds2016.png'),
//     },
//     {
//         id: '33',
//         name: 'Taittinger Reserve Brut NV Champagne',
//         desc: 'Variety: France\nVintage: 2020\nAppellation: Reims',
//         price: 338.00,
//         image: require('../images/taittinger.jpg'),
//     },
// ]}];
// const DessertMenu = [{
//     title: "Dessert",
//     data: [
//     {
//         id: '29',
//         name: 'Cheesecake',
//         desc: 'A creamy, sweet, and delicious no bake berry cheesecake.',
//         price: 8.00,
//         image: require('../images/cheeseCake.jpg'),
//     },
//     {
//         id: '30',
//         name: 'Snickers Pie',
//         desc: 'Oreo crust, silky and airy chocolate filling and finished with chopped candy.',
//         price: 12.00,
//         image: require('../images/snickersPie.jpg'),
//     },
//     ]}];

// module.exports= {
//     SaladMenu: SaladMenu, 
//     MainCourseMenu: MainCourseMenu, 
//     PizzaMenu: PizzaMenu, 
//     PastaMenu: PastaMenu, 
//     BurgerMenu: BurgerMenu, 
//     CoffeeAndTeaMenu: CoffeeAndTeaMenu, 
//     SmoothiesMenu: SmoothiesMenu, 
//     WineMenu: WineMenu, 
//     DessertMenu: DessertMenu,

// };