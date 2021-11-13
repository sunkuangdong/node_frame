import fs, { promises as fsPromise } from "fs";
import path from "path";
import matter from 'gray-matter';

// 读取文件的假接口
const getPosts = async () => {
    // process.cwd 子进程的当前工作目录。
    // path.join() 方法使用特定于平台的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
    const markdownDir = path.join(process.cwd(), "markdown")
    // fs.readdirSync 读取目录的内容。
    const fileNames = await fs.readdirSync(markdownDir)
    const posts = fileNames.map(fileName => {
        const fullPath = path.join(markdownDir, fileName)
        const id = fileName.replace(/\.md$/g, "")
        // fs.readFileSync 返回 path 的内容。
        const text = fs.readFileSync(fullPath, "utf-8")
        const { data: { title, date }, content } = matter(text)
        return {
            id, title, date, content
        }
    })
    return posts
}

export default getPosts;