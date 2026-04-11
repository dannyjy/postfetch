import type { Post } from "../../types/types"

const PostCard = ({ userId, id, body, title }: Post) => {
  return (
    <div className="px-8 py-12 border-2 border-gray-300 space-y-2 rounded-2xl">
        <h1 className="font-bold text-2xl">{title}</h1>
        <h2 className="text-md font-medium">Post ID: {id} User ID: {userId}</h2>
        <p>{body}</p>
    </div>
  )
}

export default PostCard