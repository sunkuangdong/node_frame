import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const Posts: NextApiHandler = (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.write(JSON.stringify({ name: 'frank' }))
    res.end()
}

export default Posts;
