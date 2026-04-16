const restaurantImages = [
  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
  "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
  "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
  "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
  "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg",
  "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg",
  "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg",
  "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg",
  "https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg",
  "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
  "https://images.pexels.com/photos/5490899/pexels-photo-5490899.jpeg",
  "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg",
  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
  "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
  "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
  "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
  "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg",
  "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg",
  "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg",
  "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg",
];

const dishImages = {
  Burger: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
  Pizza: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
  Biryani: "https://images.pexels.com/photos/7439073/pexels-photo-7439073.jpeg",
  Noodles: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
  Chicken: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg",
  Paneer: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg",
  Roll: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  Pasta: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
  Fries: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",
  Dosa: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
  Kebab: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  IceCream: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
  Thali: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
  Sandwich: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg",
  Momos: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
};

const restaurantNames = [
  "Spice Garden",
  "Urban Bites",
  "Food Junction",
  "Tandoori Treats",
  "Burger Hub",
  "Pizza Palace",
  "Royal Biryani House",
  "The Food Factory",
  "Desi Flavours",
  "Street Eats",
  "The Hungry Point",
  "Flavour Town",
  "Curry Corner",
  "Grill & Chill",
  "Taste of India",
  "Fusion Feast",
  "The Snack Bar",
  "Foodie Hub",
  "Quick Bites",
  "The Dining Room",
  "Kitchen Express",
  "Zayka Restaurant",
  "The Spice Route",
  "City Kitchen",
  "Biryani Blues",
  "The Food Plaza",
  "Delicious Den",
  "The Tasty Table",
  "Masala Magic",
  "Food Adda",
];

const foods = Object.keys(dishImages);

// helper
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateData = () => {
  const restaurants = [];

  for (let i = 1; i <= 30; i++) {
    const categories = [];

    for (let j = 1; j <= 5; j++) {
      const items = [];

      for (let k = 1; k <= 6; k++) {
        const food = rand(foods);

        items.push({
          name: `${food} ${k}`,
          price: Math.floor(Math.random() * 300) + 100,
          description: `Tasty ${food}`,
          image: `${dishImages[food]}?w=300&h=200`,
        });
      }

      categories.push({
        name: j === 1 ? "Recommended" : `Category ${j}`,
        items,
      });
    }

    restaurants.push({
      name: restaurantNames[i % restaurantNames.length],
      image: `${restaurantImages[i % restaurantImages.length]}?w=400&h=250`,
      rating: +(Math.random() * 2 + 3).toFixed(1),
      deliveryTime: `${20 + (i % 10)}-${30 + (i % 10)} mins`,
      cuisines: ["Indian", "Fast Food", "Chinese"].slice(0, 2),
      costForTwo: `₹${Math.floor(Math.random() * 500) + 200}`,
      categories,
      isOpen: Math.random() > 0.1,
    });
  }

  return restaurants;
};

module.exports = generateData;
