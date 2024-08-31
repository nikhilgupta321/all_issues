const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config'); // Adjust the path as needed


try {
  const Agents = sequelize.define(
    'agents',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED, // Set the type to int unsigned
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
      },
      country: {
        type: DataTypes.STRING(255),
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'agents',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
      ],
    }
  );
  module.exports = Agents;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}
