const sequelize = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      createdAt: {
        // personaliza nome da coluna
        field: 'published',
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('NOW()'),
      },
      updatedAt: {
        field: 'updated',
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('NOW()'),
      }
    });
  },
  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('BlogPosts');
  }
};