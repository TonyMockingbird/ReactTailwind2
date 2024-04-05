const db = require('../models');
const Users = db.users;

const Products = db.products;

const Categories = db.categories;

const Orders = db.orders;

const Reviews = db.reviews;

const PromoCodes = db.promo_codes;

const ProductsData = [
  {
    title: 'I want my 5$ back',

    // type code here for "images" field

    price: 76.46,

    discount: 83.56,

    description:
      'Yes, a Jedi’s strength flows from the Force. But beware of the dark side. Anger, fear, aggression; the dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will, as it did Obi-Wan’s apprentice.',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    rating: 8,

    status: 'out of stock',
  },

  {
    title: 'My buddy Harlen',

    // type code here for "images" field

    price: 16.95,

    discount: 78.14,

    description:
      'Yes, a Jedi’s strength flows from the Force. But beware of the dark side. Anger, fear, aggression; the dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will, as it did Obi-Wan’s apprentice.',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    rating: 8,

    status: 'in stock',
  },

  {
    title: 'I want my 5$ back',

    // type code here for "images" field

    price: 38.56,

    discount: 75.42,

    description: 'Younglings, younglings gather ’round.',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    rating: 4,

    status: 'out of stock',
  },

  {
    title: 'Got depression, Smith and Wessen',

    // type code here for "images" field

    price: 56.93,

    discount: 74.74,

    description: 'Do. Or do not. There is no try.',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    rating: 4,

    status: 'in stock',
  },
];

const CategoriesData = [
  {
    title: 'Turd gone wrong',
  },

  {
    title: 'So I was walking Oscar',
  },

  {
    title: 'I want my 5$ back',
  },

  {
    title: "That Barbala couldn't fly his way out of a wet paper bag",
  },
];

const OrdersData = [
  {
    orderDate: new Date('2024-01-15'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 4,

    status: 'in cart',
  },

  {
    orderDate: new Date('2023-10-06'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 2,

    status: 'bought',
  },

  {
    orderDate: new Date('2023-07-02'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 7,

    status: 'bought',
  },

  {
    orderDate: new Date('2023-07-17'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 3,

    status: 'bought',
  },
];

const ReviewsData = [
  {
    body: 'Always pass on what you have learned.',

    rating: 2,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    body: 'You will find only what you bring in.',

    rating: 8,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    body: 'Mudhole? Slimy? My home this is!',

    rating: 7,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    body: 'Always two there are, no more, no less. A master and an apprentice.',

    rating: 6,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const PromoCodesData = [
  {
    code: 'Might be DQ time',

    discount: 94.38,

    // type code here for "relation_many" field
  },

  {
    code: 'I want my damn cart back',

    discount: 21.58,

    // type code here for "relation_many" field
  },

  {
    code: 'Always the last one to the party',

    discount: 35.49,

    // type code here for "relation_many" field
  },

  {
    code: 'I want my damn cart back',

    discount: 72.67,

    // type code here for "relation_many" field
  },
];

// Similar logic for "relation_many"

// Similar logic for "relation_many"

async function associateOrderWithProduct() {
  const relatedProduct0 = await Products.findOne({
    offset: Math.floor(Math.random() * (await Products.count())),
  });
  const Order0 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Order0?.setProduct) {
    await Order0.setProduct(relatedProduct0);
  }

  const relatedProduct1 = await Products.findOne({
    offset: Math.floor(Math.random() * (await Products.count())),
  });
  const Order1 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Order1?.setProduct) {
    await Order1.setProduct(relatedProduct1);
  }

  const relatedProduct2 = await Products.findOne({
    offset: Math.floor(Math.random() * (await Products.count())),
  });
  const Order2 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Order2?.setProduct) {
    await Order2.setProduct(relatedProduct2);
  }

  const relatedProduct3 = await Products.findOne({
    offset: Math.floor(Math.random() * (await Products.count())),
  });
  const Order3 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Order3?.setProduct) {
    await Order3.setProduct(relatedProduct3);
  }
}

async function associateOrderWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Order0 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Order0?.setUser) {
    await Order0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Order1 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Order1?.setUser) {
    await Order1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Order2 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Order2?.setUser) {
    await Order2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Order3 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Order3?.setUser) {
    await Order3.setUser(relatedUser3);
  }
}

async function associateReviewWithProduct() {
  const relatedProduct0 = await Products.findOne({
    offset: Math.floor(Math.random() * (await Products.count())),
  });
  const Review0 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Review0?.setProduct) {
    await Review0.setProduct(relatedProduct0);
  }

  const relatedProduct1 = await Products.findOne({
    offset: Math.floor(Math.random() * (await Products.count())),
  });
  const Review1 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Review1?.setProduct) {
    await Review1.setProduct(relatedProduct1);
  }

  const relatedProduct2 = await Products.findOne({
    offset: Math.floor(Math.random() * (await Products.count())),
  });
  const Review2 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Review2?.setProduct) {
    await Review2.setProduct(relatedProduct2);
  }

  const relatedProduct3 = await Products.findOne({
    offset: Math.floor(Math.random() * (await Products.count())),
  });
  const Review3 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Review3?.setProduct) {
    await Review3.setProduct(relatedProduct3);
  }
}

async function associateReviewWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Review0 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Review0?.setUser) {
    await Review0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Review1 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Review1?.setUser) {
    await Review1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Review2 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Review2?.setUser) {
    await Review2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Review3 = await Reviews.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Review3?.setUser) {
    await Review3.setUser(relatedUser3);
  }
}

// Similar logic for "relation_many"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Products.bulkCreate(ProductsData);

    await Categories.bulkCreate(CategoriesData);

    await Orders.bulkCreate(OrdersData);

    await Reviews.bulkCreate(ReviewsData);

    await PromoCodes.bulkCreate(PromoCodesData);

    await Promise.all([
      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      await associateOrderWithProduct(),

      await associateOrderWithUser(),

      await associateReviewWithProduct(),

      await associateReviewWithUser(),

      // Similar logic for "relation_many"
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});

    await queryInterface.bulkDelete('categories', null, {});

    await queryInterface.bulkDelete('orders', null, {});

    await queryInterface.bulkDelete('reviews', null, {});

    await queryInterface.bulkDelete('promo_codes', null, {});
  },
};
