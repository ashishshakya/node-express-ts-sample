import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from 'sequelize';

interface IUser {
  userId: number | null;
  userName: string;
  firstName: string | null;
  lastName: string | null;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date | null;
  updatedBy: number | null;
  deletedAt: Date | null;
  deletedBy: number | null;
}

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  userId: number | null;
  userName: string;
  firstName: string | null;
  lastName: string | null;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date | null;
  updatedBy: number | null;
  deletedAt: Date | null;
  deletedBy: number | null;
}

export default function buildUserModel(sequelize: Sequelize) {
  User.init(
    {
      userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userName: {
        field: 'user_name',
        type: DataTypes.STRING,
        unique: true,
      },
      firstName: {
        field: 'first_name',
        type: DataTypes.STRING,
      },
      lastName: {
        field: 'last_name',
        type: DataTypes.STRING,
      },
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        field: 'created_by',
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'userId',
        },
      },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
      },
      updatedBy: {
        field: 'updated_by',
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'userId',
        },
      },
      deletedAt: {
        field: 'deleted_at',
        type: DataTypes.DATE,
      },
      deletedBy: {
        field: 'deleted_by',
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'userId',
        },
      },
    },
    {
      sequelize,
      name: {
        singular: 'User',
        plural: 'Users',
      },
      tableName: 'users',
    },
  );
}

export { User, IUser };
