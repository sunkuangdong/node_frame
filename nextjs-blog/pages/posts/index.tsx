import { NextPage } from "next";
import React, { useState } from "react";
import { useEffect } from "react";
import { usePosts } from "hooks/usePosts";


const PostsIndex: NextPage = () => {
  const {isLoading, posts} = usePosts()
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