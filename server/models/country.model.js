const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config'); // Adjust the path as needed


try {
  const Country = sequelize.define(
    'country',
    {
      countryid: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      iso: {
        type: DataTypes.CHAR(2),
      },
      name: {
        type: DataTypes.STRING(80),
      },
      nicename: {
        type: DataTypes.STRING(80),
      },
      iso3: {
        type: DataTypes.CHAR(3),
      },
      numcode: {
        type: DataTypes.SMALLINT,
      },
      phonecode: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'country', // Adjust the table name as needed
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'countryid' }],
        },
      ],
    }
  );
  module.exports = Country;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}



//   countryid - int,
//   iso - char(2),
//   name - varchar(80)
//   nicename - varchar(80),
//   iso3 - char(3),
//   numcode - smallint,
//   phonecode - int