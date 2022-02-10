import { DataTypes, QueryInterface } from 'sequelize';

export class _20220209234710CreateUser {
  async up(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      author: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  }
  async down(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.dropTable('Recipes');
  }
}
