const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config'); // Adjust the path as needed

try {

  const Editors = sequelize.define(
    'editors',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      journal_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Allow journal_id to be null
      },
      resume: {
        type: DataTypes.STRING(255),
      },
      certificate: {
        type: DataTypes.STRING(255),
      },
      email: {
        type: DataTypes.STRING(255),
      },
      status: {
        type: DataTypes.STRING(255),
      },
      created_by: {
        type: DataTypes.STRING(255),
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_by: {
        type: DataTypes.STRING(255),
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'editors', // Adjust the table name as needed
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

  module.exports = Editors;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}


