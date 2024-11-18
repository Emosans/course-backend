import { Model, DataType, Column, Table } from "sequelize-typescript";

// model table for Courses
@Table
export class Course extends Model {
  @Column({ type: DataType.INTEGER, allowNull: false })
  studentId!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  courseId!: number;

  @Column({ type: DataType.JSON })
  videos!: number[];
}
