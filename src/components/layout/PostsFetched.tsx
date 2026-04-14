import PostCard from "../ui/PostCard"
import type { Post } from "../../types/types"

type PostsFetchedProps = {
  data: Post[];
}

const PostsFetched = ({ data }: PostsFetchedProps) => {
  return (
    <div className="space-y-4">
      {data.map((post) => <PostCard key={post.id} {...post} />)}
    </div>
  )
}

export default PostsFetched