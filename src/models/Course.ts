import { Model, DataType, Column, Table } from "sequelize-typescript";

// model table for Courses
@Table({ tableName: "courses", timestamps: true })
export class Course extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  title!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description!: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  teacherId!: number;
}
