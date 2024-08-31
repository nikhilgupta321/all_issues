const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config'); // Adjust the path as needed

try {
  const Entries = sequelize.define(
    'entries',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      journal_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      txnid: {
        type: DataTypes.STRING(255),
      },
      year: {
        type: DataTypes.STRING(255),
      },
      volume: {
        type: DataTypes.INTEGER,
      },
      issue: {
        type: DataTypes.INTEGER,
      },
      refnumber: {
        type: DataTypes.STRING(255),
      },
      type: {
        type: DataTypes.STRING(255),
      },
      title: {
        type: DataTypes.TEXT,
      },
      authorname: {
        type: DataTypes.STRING(255),
      },
      email: {
        type: DataTypes.STRING(255),
      },
      phone: {
        type: DataTypes.STRING(50),
      },
      country: {
        type: DataTypes.STRING(255),
      },
      agent: {
        type: DataTypes.STRING(255),
      },
      author_payed_on: {
        type: DataTypes.DATE,
      },
      agent_amount: {
        type: DataTypes.INTEGER,
      },
      agent_amount_received: {
        type: DataTypes.ENUM('yes', 'no'),
      },
      made_by: {
        type: DataTypes.STRING(255),
      },
      made_at: {
        type: DataTypes.DATE,
      },
      published_by: {
        type: DataTypes.STRING(255),
      },
      published_at: {
        type: DataTypes.DATE,
      },
      payment_received_by: {
        type: DataTypes.STRING(255),
      },
      payment_received_at: {
        type: DataTypes.DATE,
      },
      remarks: {
        type: DataTypes.STRING(255),
      },
      rawfile: {
        type: DataTypes.STRING(255),
      },
      mainfile: {
        type: DataTypes.STRING(255),
      },
      status: {
        type: DataTypes.STRING(255),
      },
      urgent_at: {
        type: DataTypes.DATE,
      },
      today_at: {
        type: DataTypes.DATE,
      },
      withdraw_at: {
        type: DataTypes.DATE,
      },
      reminder_at: {
        type: DataTypes.DATE,
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
      tableName: 'entries',
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

  module.exports = Entries;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}


// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/config'); // Adjust the path as needed

// try {
//   const Entries = sequelize.define(
//     'entries',
//     {
//       id: {
//         autoIncrement: true,
//         type: DataTypes.INTEGER.UNSIGNED,
//         allowNull: false,
//         primaryKey: true,
//       },
//       journal_id: {
//         type: DataTypes.INTEGER,
//         allowNull: true,
//       },
//       txnid: {
//         type: DataTypes.STRING(255),
//       },
//       year: {
//         type: DataTypes.STRING(255),
//       },
//       volume: {
//         type: DataTypes.INTEGER,
//       },
//       issue: {
//         type: DataTypes.INTEGER,
//       },
//       refnumber: {
//         type: DataTypes.STRING(255),
//       },
//       type: {
//         type: DataTypes.STRING(255),
//       },
//       title: {
//         type: DataTypes.TEXT,
//       },
//       authorname: {
//         type: DataTypes.STRING(255),
//       },
//       email: {
//         type: DataTypes.STRING(255),
//       },
//       phone: {
//         type: DataTypes.STRING(50),
//       },
//       country: {
//         type: DataTypes.STRING(255),
//       },
//       agent: {
//         type: DataTypes.STRING(255),
//       },
//       authour_payed_on: {
//         type: DataTypes.TIMESTAMP,
//       },
//       agent_amount: {
//         type: DataTypes.INTEGER,
// },
// agent_amount_received: {
//   type: DataTypes.ENUM('yes', 'no'),
// },
// made_by: {
//   type: DataTypes.STRING(255),
// },
// made_at: {
//   type: DataTypes.TIMESTAMP,
// },
// published_by: {
//   type: DataTypes.STRING(255),
// },
// published_at: {
//   type: DataTypes.TIMESTAMP,
// },
// payment_received_by: {
//   type: DataTypes.STRING(255),
// },
// payment_received_at: {
//   type: DataTypes.TIMESTAMP,
// },
// remarks: {
//   type: DataTypes.STRING(255),
// },
// rawfile: {
//   type: DataTypes.STRING(255),
// },
// mainfile: {
//   type: DataTypes.STRING(255),
// },
// status: {
//   type: DataTypes.STRING(255),
// },
// urgent_at: {
//   type: DataTypes.TIMESTAMP,
// },
// today_at: {
//   type: DataTypes.TIMESTAMP,
// },
// withdraw_at: {
//   type: DataTypes.TIMESTAMP,
// },
// reminder_at: {
//   type: DataTypes.TIMESTAMP,
// },
// created_by: {
//   type: DataTypes.STRING(255),
// },
// created_at: {
//   type: DataTypes.TIMESTAMP,
// },
// updated_by: {
//   type: DataTypes.STRING(255),
// },
// updated_at: {
//   type: DataTypes.TIMESTAMP,
// },
//     },
//     {
//       tableName: 'entries',
//       timestamps: false,
//       indexes: [
//         {
//           name: 'PRIMARY',
//           unique: true,
//           using: 'BTREE',
//           fields: [{ name: 'id' }],
//         },
//       ],
//     }
//   );

//   module.exports = Entries;
// } catch (error) {
//   console.error('Error defining Sequelize model:', error);
// }
