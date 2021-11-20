import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("posts")
export class Post {
    // PrimaryGeneratedColumn 主键 increment 自增长
    @PrimaryGeneratedColumn("increment") id: number;
    // title 对应的是 string Column 里面对应的是数据库的类型
    @Column("varchar") title: string
    @Column("text") content: string
    constructor(attributes: Partial<Post>) {
        Object.assign(this, attributes);
    }
}
