import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("posts")
export class Post {
    // PrimaryGeneratedColumn 主键 increment 自增长
    @PrimaryGeneratedColumn("increment") id: number;
    // id 对应的是 int Column 里面对应的是数据库的类型
    @Column("varchar") title: string;
    @Column("text") content: string;
}
