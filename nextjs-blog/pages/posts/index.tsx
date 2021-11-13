import { NextPage } from "next";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


type Posts = {
  id: string;
  date: string;
  title: string;
}
const PostsIndex: NextPage = () => {
  // 初始化数据
  const [posts, setPosts] = useState<Posts[]>([])
  const [isLoading, setIsLoading] = useState(false)
  // [] 意思是第一次渲染运行，以后不运行
  useEffect(() => {
    setIsLoading(true)
    axios.get('/api/v1/posts').then(res => {
      setPosts(res.data)
      setIsLoading(false)
    }, () => {
      setIsLoading(false)
    })
  }, [])
  return (
    <div>
      <h1>文章列表</h1>
      {isLoading ? '加载中' : posts.map(item => <div key={item.id}>
        {item.id}
      </div>)}
    </div>
  )
}
// 只要请求了 http://localhost:3000/posts 就运行了 PostsIndex 函数
export default PostsIndex;