import { DataTypes, QueryInterface } from 'sequelize';

export class _20220209234710CreateUser {
  async up(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      name: {
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
    await queryInterface.dropTable('Users');
  }
}
