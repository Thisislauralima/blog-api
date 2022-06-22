module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      }
    }, {
        timestamps: false,
        createdAt: false,
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Categories');
  }
};