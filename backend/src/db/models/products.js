const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const products = sequelize.define(
    'products',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      title: {
        type: DataTypes.TEXT,
      },

      price: {
        type: DataTypes.DECIMAL,
      },

      discount: {
        type: DataTypes.DECIMAL,
      },

      description: {
        type: DataTypes.TEXT,
      },

      rating: {
        type: DataTypes.INTEGER,
      },

      status: {
        type: DataTypes.ENUM,

        values: ['in stock', 'out of stock'],
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  products.associate = (db) => {
    db.products.belongsToMany(db.categories, {
      as: 'categories',
      foreignKey: {
        name: 'products_categoriesId',
      },
      constraints: false,
      through: 'productsCategoriesCategories',
    });

    db.products.belongsToMany(db.products, {
      as: 'moreProducts',
      foreignKey: {
        name: 'products_moreProductsId',
      },
      constraints: false,
      through: 'productsMoreProductsProducts',
    });

    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.products.hasMany(db.orders, {
      as: 'orders_product',
      foreignKey: {
        name: 'productId',
      },
      constraints: false,
    });

    db.products.hasMany(db.reviews, {
      as: 'reviews_product',
      foreignKey: {
        name: 'productId',
      },
      constraints: false,
    });

    //end loop

    db.products.hasMany(db.file, {
      as: 'image',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.products.getTableName(),
        belongsToColumn: 'image',
      },
    });

    db.products.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.products.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return products;
};
