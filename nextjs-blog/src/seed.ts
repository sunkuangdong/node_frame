import "reflect-metadata";
import { createConnection } from "typeorm";
import { Post } from "./entity/Post";

createConnection().then(async connection => {
    const posts = await connection.manager.find(Post)
    if (posts.length === 0) {
        await connection.manager.save([1, 2, 3, 4, 5].map(item =>
            new Post({
                title: `Post ${item}`,
                content: `这是我的第 ${item} 篇文章`
            })
        ))
    }
    connection.close()
}).catch(error => console.log(error));
