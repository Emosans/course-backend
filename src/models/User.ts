import { Model, Table, Column, DataType } from "sequelize-typescript";

// model table for user
@Table({ tableName: "users", timestamps: true })
export class User extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  role!: "student" | "teacher";
}
